var db = require('./db.js');
var template = require('../template/templatemodule.js');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));


module.exports = {
  home:function(request, response){
    db.query(`SELECT * FROM post JOIN writer ON post.writer_id=writer.writer_id`, function(error, posts){
      if(error){
        throw error;
      }
      var querypage = request.query.page;
      if(querypage){
        var posttable = template.postlist(posts, querypage);
        var pagenation = template.pagenation(posts, querypage);
        var memohtml = template.memohtml(posttable, pagenation);
        response.send(memohtml);
      }
      else{
        var posttable = template.postlist(posts, 1);
        var pagenation = template.pagenation(posts, 1);
        var memohtml = template.memohtml(posttable, pagenation);
        response.send(memohtml);
      }
      
    });
  }, view:function(request, response){
    db.query(`SELECT * FROM post LEFT JOIN writer ON post.writer_id=writer.writer_id WHERE post.post_id=?`, [request.query.id], function(error, post){
      if(error){
        throw error;
      }
      console.log(post);
      var title = post[0].title;
      var description = post[0].description;
      var created = post[0].created;
      var writer = post[0].name;
      var memohtml = template.viewhtml(request.query.id, title, description, created, writer);
      response.send(memohtml)
    });
  }, create:function(response){
    db.query(`SELECT * FROM post`, function(error, post){
      if(error){
        throw error;
      }
      var createhtml = template.createhtml();
      response.send(createhtml);
    });
  }, create_process:function(request, response){
    var post = request.body;
    db.query(`SELECT * FROM writer`, function(error, writers){
      var writer_check = false; // 기존 DB에 이 게시글의 작성자 정보가 없으면 false, 있으면 true
      for(var i in writers){
        if(post.writer === writers[i].name){
          db.query(`INSERT INTO post (title, description, writer_id) VALUES(?, ?, ?)`, [post.title, post.description, writers[i].writer_id], function(error, result){
            if(error){
              throw error;
            }
            response.writeHead(302, {Location: `view?id=${result.insertId}`});
            response.end();
          });
          writer_check = true;
        }
      }
      if (writer_check === false){
        db.query(`INSERT INTO writer (name) VALUES(?)`, [post.writer], function(error, result){
          db.query(`SELECT writer_id FROM writer WHERE name=?`, [post.writer], function(error, writerId){
            db.query(`INSERT INTO post (title, description, writer_id) VALUES(?, ?, ?)`, [post.title, post.description, writerId[0].writer_id], function(error, result){
              if(error){
                throw error;
              }
              response.writeHead(302, {Location: `view?id=${result.insertId}`});
              response.end();
            });
          });
        }); 
      }
    });
  }, update:function(request, response){
    db.query(`SELECT * FROM post`, function(error, posts){
      if(error){
        throw error;
      }
      db.query(`SELECT * FROM post WHERE post_id=?`, [request.query.id], function(error2, post){
        if(error2){
          throw error2;
        }
        var id = post[0].post_id;
        var title = post[0].title;
        var description = post[0].description;
        var updatehtml = template.updatehtml(id,title, description);
        response.send(updatehtml);
      });
    });
  }, update_process:function(request, response){
    var post = request.body;
    db.query(`UPDATE post SET title=?, description=? WHERE post_id=?`, [post.title, post.description, post.id], function(error, result){
      if(error){
        throw error;
      }
      response.writeHead(302, {Location: `view?id=${post.id}`});
      response.end();
    });
  }, delete_process:function(request, response){
    var post = request.body;
    // console.log(post);
    db.query(`DELETE FROM post WHERE post_id=?`, [post.id], function(error, result){
      if(error){
        throw error;
      }
      response.writeHead(302, {Location: `/memo`});
      response.end();
    });
  }
}

// exports.home = function(response){
  
// }
