// , header, main, about_me, portfolio, skill
var fs = require('fs');
var sanitizeHtml = require('sanitize-html');

module.exports = {
  mainhtml:function mainHtml(title){
      return `<!DOCTYPE html>
      <html>
      <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=divice-width, initial-scale=1">
          <title>이경근의 포트폴리오 - ${sanitizeHtml(title)}</title>
      
          <link rel="stylesheet" href="../style/style.css">
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css">
          <!-- bootstrap -->
          <link href="css/bootstrap/css/bootstrap.min.css" rel="stylesheet" media="screen">
      </head>
      <body>
      <!-- Header -->
      <header class=" p-3 sticky-top bg-dark">
          <nav class="container-xxl bd-gutter flex-wrap flex-lg-nowrap" aria-label="Main navigation">
              <div class="container">
                  <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                      <li><a class="nav-link px-2 text-white" aria-current="page" href="#main">Main</a></li>
                      <li><a class="nav-link px-2 text-white" href="#about-me">About me</a></li>
                      <li><a class="nav-link px-2 text-white" href="#portfolio">Portfolio</a></li>
                      <li><a class="nav-link px-2 text-white" href="#skill">skill</a></li>
                      <li><a class="nav-link px-2 text-white" href="/memo">memo</a></li>
                  </ul>
              </div>
          </nav>
      </header>
      
          <!-- main -->
          <main>
          <!-- main section -->
          <section class="py-5 text-center container" id="main">
              <div class="row py-lg-5">
                  <div class="col-lg-10 col-md-8 mx-auto">
                      <h1 class="fw-light">이경근의 포트폴리오에 오신것을 환영합니다!</h1>
                      <p class="lead text-muted">성실과 정직을 바탕으로 개발실력을 키워가고 있는 신입 개발자 이경근입니다</p>
                  </div>
              </div>
          </section>
      
          <!-- about me section -->
          <section class="py-5 bg-light" id="about-me">
              <div class="container px-4 py-5">
                  <h2 class="pb-4 border-bottom">About Me</h2>
                  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
                      <div class="col d-flex align-items-start">
                          <i class="material-symbols-outlined">cake</i>
                          <div>
                              <h3 class="fw-bold mb-0 fs-4">생년월일</h3>
                              <p>1998.03.05</p>
                          </div>
                      </div>
                      <div class="col d-flex align-items-start">
                          <i class="material-symbols-outlined">school</i>
                          <div>
                              <h3 class="fw-bold mb-0 fs-4">학력</h3>
                              <p>조선대학교 컴퓨터공학과 졸업</p>
                          </div>
                      </div>
                      <div class="col d-flex align-items-start">
                          <i class="material-symbols-outlined">mail</i>
                          <div>
                              <h3 class="fw-bold mb-0 fs-4">Email</h3>
                              <p>leegg98@gmail.com</p>
                          </div>
                      </div>
                      <div class="col d-flex align-items-start">
                          <i class="material-symbols-outlined">home</i>
                          <div>
                              <h3 class="fw-bold mb-0 fs-4">주소</h3>
                              <p>광주광역시 동구</p>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      
          <!-- portfolio section -->
          <section class="py-5" id="portfolio">
              <div class="container px-4 py-5">
                  <h2 class="pb-4 border-bottom">포트폴리오</h2>
                  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-2 g-4 py-5">
                      <div class="col-lg-4 col-md-6">
                          <h3>안심 귀가길 찾기</h3>
                          <a href="https://github.com/ansrnskfk/capstone_5" >
                              <img src="/img/안심귀가.png" class="img-fluid" alt="">
                          </a>
                          <br><br>
                          <h5>제작기간: 2022.03 - 2022.06</h5>
                          <h5>팀원 수: 5명</h5>
                          <h5>사용 언어: python, javascript, css, html, django</h5>
                          <br>
                          <p>
                              4학년 1학기 캡스톤디자인 팀 프로젝트입니다. 광주 동구 한정으로, 출발지와 목적지를 설정하면 근처에 있는 cctv를 경유해 가는 경로를 알려주는 웹 서비스입니다.<br>
                              공공데이터포털의 cctv의 위치 정보 api와 네이버 지도 api 크롤링, 다익스트라 알고리즘 작성 및 프론트엔드 일부분을 담당했습니다.
                          </p>
                      </div>
                      <div class="col-lg-4 col-md-6">
                          <h3>CHOSUN MAP</h3>
                          <a href="https://github.com/hokoro/ChosunMap">
                              <img src="/img/CHOSUN MAP.png" class="img-fluid" alt="">
                          </a>
                          <br><br>
                          <h5>제작기간: 2022.09 - 2022.12</h5>
                          <h5>팀원 수: 5명</h5>
                          <h5>사용 언어: python, css, html, django, sqlite3</h5>
                          <br>
                          <p>
                              4학년 2학기 캡스톤디자인 팀 프로젝트입니다. 각종 웹지도 서비스에서 볼 수 없는 좁은 오솔길이나 골목길, 지름길까지 포함하여 도보 기준으로 경로를 탐색하고 알려주는 웹 서비스입니다.<br>
                              ACO알고리즘 작성을 담당했습니다.
                          </p>
                      </div>
                      <div class="col-lg-4 col-md-6">
                          <h3>블소 계산기</h3>
                          <a href="#">
                              <img src="/img/블소 계산기.png" class="img-fluid" alt="">
                          </a>
                          <br><br>
                          <h5>제작기간: 2023.02 - 2023.04</h5>
                          <h5>팀원 수: 1명</h5>
                          <h5>사용 언어: python, mysql</h5>
                          <br>
                          <p>
                              개인 프로젝트입니다. 평소 즐겨하는 게임인 블레이드 앤 소울의 제작 시스템을 이용한 수익을 계산 해주는 GUI프로그램입니다.<br>
                              제작 아이템과 그 재료들의 정보를 DB에 저장하고 웹 시장에서 시세를 크롤링 한 뒤 제작비와 판매금액을 계산하고 수익을 예상합니다.<br>
                              유저가 직접 예상 수수료와 판매 가격을 입력하여 유저의 거래 성향에 맞춰 수익을 예상할 수 있습니다.
                          </p>
                      </div>
                      <div class="col-lg-4 col-md-6">
                          <h3>포트폴리오 웹 페이지</h3>
                          <a href="#">
                              <img src="/img/포트폴리오 웹 페이지.png" class="img-fluid" alt="">
                          </a>
                          <br><br>
                          <h5>제작기간: 2023.02 - 2023.04</h5>
                          <h5>팀원 수: 1명</h5>
                          <h5>사용 언어: javascript, css, nodejs</h5>
                          <br>
                          <p>
                              개인 프로젝트입니다. 현재 보고계신 웹 페이지입니다.<br>
                              javascript와 css, nodejs를 공부하며 만들어본 첫 웹 페이지 입니다. 앞으로도 계속 공부하고 연습하여 실력을 꾸준히 향상시켜 더욱 발전해 나갈 것입니다.
                          </p>
                      </div>
                  </div>
              </div>
          </section>
      
          <!-- skill section -->
          <section class="py-5 bg-light" id="skill">
              <div class="container px-4 py-5">
                  <h2 class="pb-4 border-bottom">사용해본 언어 및 기술들</h2>
                  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
                      <div class="col d-flex align-items-start">
                          <i class='bx bxl-python bx-md'></i>
                          <div>
                              <h3 class="fw-bold mb-0 fs-4">Python</h3>
                          </div>
                      </div>
                      <div class="col d-flex align-items-start">
                          <i class='bx bxl-java bx-md' ></i>
                          <div>
                              <h3 class="fw-bold mb-0 fs-4">Java</h3>
                          </div>
                      </div>
                      <div class="col d-flex align-items-start">
                          <i class='bx bxl-javascript bx-md' ></i>
                          <div>
                              <h3 class="fw-bold mb-0 fs-4">JavaScript</h3>
                          </div>
                      </div>
                      <div class="col d-flex align-items-start">
                          <i class='bx bxl-css3 bx-md' ></i>
                          <div>
                              <h3 class="fw-bold mb-0 fs-4">CSS</h3>
                          </div>
                      </div>
                      <div class="col d-flex align-items-start">
                          <i class='bx bxl-nodejs bx-md' ></i>
                          <div>
                              <h3 class="fw-bold mb-0 fs-4">Node.js</h3>
                          </div>
                      </div>
                      <div class="col d-flex align-items-start">
                          <i class='bx bx-data bx-md' ></i>
                          <div>
                              <h3 class="fw-bold mb-0 fs-4">MySQL</h3>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          <script src="http://code.jquery.com/jquery.js"></script>
          <script src="../bootstrap/js/bootstrap.js"></script>
          </main>
      
          <!-- footer -->
          <footer class="py-3 my-4" id="footer">
          </footer>
      </body>
      </html>
      `;
  }, memohtml:function memoHtml(posttable, pagenation){
    return `<!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=divice-width, initial-scale=1">
        <title>이경근의 포트폴리오</title>
    
        <link rel="stylesheet" href="../style/style.css">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css">
        <!-- bootstrap -->
        <link href="css/bootstrap/css/bootstrap.min.css" rel="stylesheet" media="screen">
    </head>
    <body>
        <!-- Header -->
        <header class=" p-3 sticky-top bg-dark">
            <nav class="container-xxl bd-gutter flex-wrap flex-lg-nowrap" aria-label="Main navigation">
                <div class="container">
                    <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li><a class="nav-link px-2 text-white" aria-current = "page" href="/">Main</a></li>
                        <li><a class="nav-link px-2 text-white" aria-current = "page" href="/memo">memo</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    
        <!-- main -->
        <main>
            <div class="container px-4 py-5">
                <table class="table">
                    <colgroup>
                    <col>
                    <col style="width:20%">
                    <col style="width:15%">
                    </colgroup>
                    <thead>
                        <tr>
                            <th scope="col" style="text-align: center">제목</th>
                            <th scope="col" style="text-align: center">글쓴이</th>
                            <th scope="col" style="text-align: center">작성일</th>
                        </tr>
                    <thead>
                    ${posttable}
                </table>
                <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                    <a class="btn btn-primary me-md-2" href="/memo/create" role"button">글쓰기</a>
                </div>
                <nav aria-label="Page navigation example">
                    <ul class="pagination justify-content-center">
                    <li class="page-item">
                        <a class="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    ${pagenation}
                    <li class="page-item">
                        <a class="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                    </ul>
                </nav>
            </div>
            
    
    
        <script src="http://code.jquery.com/jquery.js"></script>
        <script src="../bootstrap/js/bootstrap.js"></script>
        </main>
    
        <!-- footer -->
        <footer class="py-3 my-4" id="footer">
        </footer>
    </body>
    </html>`;
  }, postlist:function postList(postlist, querypage){
    var id;
    var title;
    var writer;
    var created;
    var table = `<tbody>`;
    
    for(var i = ((querypage-1)*10)+1; i < ((querypage-1)*10)+11; i++){
        if(postlist[postlist.length - i] === undefined){
            break;
        } else{
            id = postlist[postlist.length - i].post_id;
            title = postlist[postlist.length - i].title;
            writer = postlist[postlist.length - i].name;
            created = postlist[postlist.length - i].created;
            table = table + `
            <tr><td><a href="/memo/view?id=${id}">${sanitizeHtml(title)}</a></td>
            <td style="text-align: center">${sanitizeHtml(writer)}</td>
            <td style="text-align: center">${sanitizeHtml(created)}</td></tr>`
            // listhtml = listhtml + `<li><a href="/memo/view?id=${id}">${sanitizeHtml(title)} / ${sanitizeHtml(writer)}</a></li>`;
        }
    }
    table = table + '</tbody>';

    return table;
  }, pagenation:function pagenation(postlist, querypage){
    var pagelength = parseInt((postlist.length-1)/10)+1;    // 전체 게시물을 10개씩 묶어서 최대 페이지 수 계산 / ex) 게시물 11개면 2 저장
    var pagelist = '';
    var page = parseInt((querypage-1)/10)*10    // 현재 페이지의 십의자리 수가 몇인지 확인, 일의자리 수가 0인것도 한 리스트에 포함 / ex) 1~10페이지면 0 저장
    if(pagelength < page+10){
        for(var i = 1; i < (pagelength%10)+1; i++ ){
            if(i == querypage){
                pagelist = pagelist + `<li class="page-item active" aria-current="page"><a class="page-link" href="/memo?page=${page+i}">${page+i}</a></li>`
            }
            else{
                pagelist = pagelist + `<li class="page-item"><a class="page-link" href="/memo?page=${page+i}">${page+i}</a></li>`
            }
        }
    }
    else{
        for(var i = 1; i < 11; i++){
            if(i == querypage){
                pagelist = pagelist + `<li class="page-item active" aria-current="page"><a class="page-link" href="/memo?page=${page+i}">${page+i}</a></li>`
            }
            else{
                pagelist = pagelist + `<li class="page-item"><a class="page-link" href="/memo?page=${page+i}">${page+i}</a></li>`
            }
        }
    }
    

    return pagelist;
  }, viewhtml:function viewHtml(id, title, description, created, writer){
    return `<!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=divice-width, initial-scale=1">
        <title>이경근의 포트폴리오</title>
    
        <link rel="stylesheet" href="../style/style.css">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css">
        <!-- bootstrap -->
        <link href="/css/bootstrap/css/bootstrap.min.css" rel="stylesheet" media="screen">
    </head>
    <body>
        <!-- Header -->
        <header class=" p-3 sticky-top bg-dark">
            <nav class="container-xxl bd-gutter flex-wrap flex-lg-nowrap" aria-label="Main navigation">
                <div class="container">
                    <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li><a class="nav-link px-2 text-white" aria-current = "page" href="/">Main</a></li>
                        <li><a class="nav-link px-2 text-white" aria-current = "page" href="/memo">memo</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    
        <!-- main -->
        <main>
        <div class="container px-4 py-5">
            <div class="border-bottom pb-2">
                <h3>${sanitizeHtml(title)}</h3>
                <span class="border-right pr-3">글쓴이: ${sanitizeHtml(writer)}</span>
                <span class="pl-3">작성일: ${created}</span>
            </div>
            <div class="border-bottom pt-5 pb-4">
                <p>${sanitizeHtml(description)}</p>
            </div>
            <div class="pt-2">
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                <a class="btn btn-primary" href="/memo/update?id=${id} role="button">수정</a>
                <form class="pl-2" action="delete_process" method="post">
                    <input class="btn btn-primary" type="submit" value="삭제">
                    <input type="hidden" name="id" value="${id}">
                </form>
            </div>
            </div>
        </div>
    
    
        <script src="http://code.jquery.com/jquery.js"></script>
        <script src="../bootstrap/js/bootstrap.js"></script>
        </main>
    
        <!-- footer -->
        <footer class="py-3 my-4" id="footer">
        </footer>
    </body>
    </html>`
  }, createhtml:function createHtml(){
    return `<!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=divice-width, initial-scale=1">
        <title>이경근의 포트폴리오</title>
    
        <link rel="stylesheet" href="../style/style.css">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css">
        <!-- bootstrap -->
        <link href="/css/bootstrap/css/bootstrap.min.css" rel="stylesheet" media="screen">
    </head>
    <body>
        <!-- Header -->
        <header class=" p-3 sticky-top bg-dark">
            <nav class="container-xxl bd-gutter flex-wrap flex-lg-nowrap" aria-label="Main navigation">
                <div class="container">
                    <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li><a class="nav-link px-2 text-white" aria-current = "page" href="/">Main</a></li>
                        <li><a class="nav-link px-2 text-white" aria-current = "page" href="/memo">memo</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    
        <!-- main -->
        <main>
        <div class="container px-4 py-5">
            <form action="/memo/create_process" method="post">
                <div class="input-group mb-1">
                    <input type="text" class="form-control" name="writer" placeholder="작성자" aria-label="Username" aria-describedby="basic-addon1">
                </div>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" name="title" placeholder="제목을 입력하세요." aria-label="Username" aria-describedby="basic-addon1">
                </div>
                <div class="input-group">
                    <textarea class="form-control" name="description" aria-label="With textarea" style="height:600px;"></textarea>
                </div>
                <p>
                <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                    <input class="btn btn-primary" type="submit" value="등록">
                </div>
            </form>
        </div>
        <script src="http://code.jquery.com/jquery.js"></script>
        <script src="../bootstrap/js/bootstrap.js"></script>
        </main>
    
        <!-- footer -->
        <footer class="py-3 my-4" id="footer">
        </footer>
    </body>
    </html>`
  }, updatehtml:function updateHtml(id, title, description){
    return `<!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=divice-width, initial-scale=1">
        <title>이경근의 포트폴리오</title>
    
        <link rel="stylesheet" href="../style/style.css">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css">
        <!-- bootstrap -->
        <link href="/css/bootstrap/css/bootstrap.min.css" rel="stylesheet" media="screen">
    </head>
    <body>
        <!-- Header -->
        <header class=" p-3 sticky-top bg-dark">
            <nav class="container-xxl bd-gutter flex-wrap flex-lg-nowrap" aria-label="Main navigation">
                <div class="container">
                    <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li><a class="nav-link px-2 text-white" aria-current = "page" href="/">Main</a></li>
                        <li><a class="nav-link px-2 text-white" aria-current = "page" href="/memo">memo</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    
        <!-- main -->
        <main>
        <div class="container px-4 py-5">
        <form action="/memo/update_process" method="post">
            <input type="hidden" name="id" value="${id}">
            <div class="input-group mb-3">
                <input type="text" class="form-control" name="title" value="${sanitizeHtml(title)}" aria-label="Username" aria-describedby="basic-addon1">
            </div>
            <div class="input-group">
                <textarea class="form-control" name="description" aria-label="With textarea" style="height:600px;">${sanitizeHtml(description)}</textarea>
            </div>
            <p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                <input class="btn btn-primary" type="submit" value="등록">
            </div>
        </form>
        </div>
    
        <script src="http://code.jquery.com/jquery.js"></script>
        <script src="../bootstrap/js/bootstrap.js"></script>
        </main>
    
        <!-- footer -->
        <footer class="py-3 my-4" id="footer">
        </footer>
    </body>
    </html>`
  }
}