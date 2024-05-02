import Bio from '../components/Bio';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import React from 'react';
import '../components/custom.css';
import '../components/profile.css';

class BlogProfileTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }
  render() {
    return (
      <Layout location={this.props.location} title="Hello Jieun World.">
        <aside>
          <Bio />
        </aside>
        <main className="main-profile">
          <div id="header">
            <div className="inner">
              <span className="icon"></span>
              <h1>
                I'm Backend Developer <br />
                <strong>JIEUN HONG</strong>
              </h1>
              <p>
                I'm Junior Backend Developer. Welcome to my blog, Thanks for
                visiting everybody
              </p>
              <ul className="actions special">
                <li>
                  <a href="#profile" className="button scrolly">
                    GO!
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div id="profile" className="main style1">
            <div className="container">
              <header className="major">
                <h2>ABOUT ME</h2>
              </header>
              <p></p>
              <div className="row gtr-150">
                <div className="col-12 row">
                  <div className="col-5 profile-img col-12-medium">
                    <i></i>
                  </div>
                  <div className="col-1 col-12-medium"></div>
                  <div className="col-6 col-12-medium row profile-desc">
                    <h3 className="col-12">홍지은 JIEUN HONG</h3>
                    <h4 className="col-12">
                      <a href="https://github.com/jieunhong">
                        Github@jieunhong
                      </a>
                    </h4>
                    <h4 className="col-12">
                      <a href="https://blog.bbubbu.me">
                        기술 블로그 [BLOG.BBUBBU.ME]
                      </a>
                    </h4>
                    <h5 className="col-12">hong.bbubbu@gmail.com</h5>
                    <h5 className="col-12">
                      안녕하세요. 4년차 서버 개발자 홍지은입니다. <br />
                      항상 즐기는 마음으로 개발을 하고 있습니다.
                    </h5>
                  </div>
                </div>
                <p></p>
                <div className="col-12 row">
                  <div className="col-6  education col-12-medium">
                    <header className="major">
                      <h4>EDUCATION</h4>
                    </header>
                    <div className="col-12">
                      <h4>
                        <b>건국대학교 공과대학 신산업융합학과</b>
                      </h4>
                      <p>2021.02 - (재학)</p>
                    </div>
                    <div className="col-12">
                      <h5>
                        <b>미림여자정보과학고등학교 인터랙티브미디어과</b>
                      </h5>
                      <p>2015.03 - 2018.02 (졸업)</p>
                    </div>
                  </div>
                  <div className="col-6 work col-12-medium">
                    <header className="major">
                      <h4>WORK</h4>
                    </header>
                    <div className="col-12">
                      <h4>
                        <b>Huraypositive</b>
                      </h4>
                      <p>서비스 개발팀 / 선임 (서비스 Backend 개발)</p>
                      <p>2022.01 ~ (재직)</p>
                    </div>
                    <div className="col-12">
                      <h5>
                        <b>SOCIALLIVE</b>
                      </h5>
                      <p>
                        플랫폼 사업부 / 선임 (WebRTC기반 화상대화 플랫폼 개발 및
                        유지보수)
                      </p>
                      <p>2020.07 - 2021.12</p>
                    </div>
                    <div className="col-12">
                      <h5>
                        <b>SQISOFT</b>
                      </h5>
                      <p>미디어 사업부 / 선임 (개발 및 유지보수)</p>
                      <p>2018.01 - 2020.07</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="two" className="main style2">
            <div className="container">
              <div className="row gtr-150">
                <div className="col-6 col-12-medium">
                  {/* <ul className="major-icons">
                            <li><span className="icon solid style1 major fa-code"></span></li>
                            <li><span className="icon solid style2 major fa-bolt"></span></li>
                            <li><span className="icon solid style3 major fa-camera-retro"></span></li>
                            <li><span className="icon solid style4 major fa-cog"></span></li>
                            <li><span className="icon solid style5 major fa-desktop"></span></li>
                            <li><span className="icon solid style6 major fa-calendar"></span></li>
                        </ul>
                        </div> */}
                </div>
                <div className="col-6 col-12-medium">
                  <header className="language">
                    <h2>Language</h2>
                  </header>
                  <p>JAVA, JS, CSS, HTML, C++ </p>

                  <header className="framework">
                    <h2>Framework</h2>
                  </header>
                  <p>Spring, spring boot, Node Express, Arduino</p>

                  <header className="db">
                    <h2>DB</h2>
                  </header>
                  <p>Mysql, oracle, postgreSQL, mybatis, JPA, dynamoDB</p>

                  <header className="devops">
                    <h2>DevOps</h2>
                  </header>
                  <p>
                    Git, GitHub, jira, confluence, AWS, dooray, notion, slack,
                    fork, sourcetree
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div id="three" className="main style1 special">
            <div className="container">
              <header className="major">
                <h2>Project</h2>
              </header>
              <p>진행한 프로젝트 목록</p>
              <div className="row gtr-150">
                <div className="col-4 col-12-medium">
                  <span className="image fit">
                    <img src="/images/pic02.jpg" alt="" />
                  </span>
                  <div className="project">
                    <h3>S병원 임상용 서비스</h3>
                    <p> 임상용 서비스, 환자/의료진 어플리케이션 서버 개발</p>
                    <p>JAVA, Spring boot, JPA, QueryDsl, Junit, Jmeter 등</p>
                    <ul className="actions special">
                      <li> 2022.02 ~ 2022.05</li>
                    </ul>
                  </div>
                </div>
                <div className="col-4 col-12-medium">
                  <span className="image fit">
                    <img src="/images/pic02.jpg" alt="" />
                  </span>
                  <div className="project">
                    <h3>Y사 LMS 구축</h3>
                    <p>Y사 Learning Mate System 개발</p>
                    <p>Node.js, AWS 등</p>
                    <ul className="actions special">
                      <li> 2021.08 ~ 2021.12</li>
                    </ul>
                  </div>
                </div>
                <div className="col-4 col-12-medium">
                  <span className="image fit">
                    <img src="/images/pic02.jpg" alt="" />
                  </span>
                  <div className="project">
                    <h3>LiveRTC Cloud/Platform 개발</h3>
                    <p>
                      WebRTC기반 화상 대화 솔루션 플랫폼 개발 AWS 클라우드 환경
                      구축 및 운영
                    </p>
                    <p>
                      Java, Spring boot, PostgreSQL, JPA, Dooray, Node.js, AWS
                      등
                    </p>
                    <ul className="actions special">
                      <li> 2020.07 ~ 2021.07</li>
                    </ul>
                  </div>
                </div>
                <div className="col-4 col-12-medium">
                  <span className="image fit">
                    <img src="/images/pic02.jpg" alt="" />
                  </span>
                  <div className="project">
                    <h3>EOK-Lite</h3>
                    <p>키오스크 솔루션 Order Kiosk Lite버전 서버 및 CMS 개발</p>
                    <p>
                      Java, Spring boot, MySQL, JPA, Dooray, Node.js, AWS 등
                    </p>
                    <ul className="actions special">
                      <li> 2020.05 ~ 2020.07</li>
                    </ul>
                  </div>
                </div>

                <div className="col-4 col-12-medium">
                  <span className="image fit">
                    <img src="/images/pic02.jpg" alt="" />
                  </span>
                  <div className="project">
                    <h3>Eliga-Core 2.0</h3>
                    <p>Eliga Core 광고 스케쥴링 CMS 개발</p>
                    <p> Node.js, AWS , DynamoDB, NoSQL, Dooray 등</p>
                    <ul className="actions special">
                      <li> 2020.02 ~ 2020.04</li>
                    </ul>
                  </div>
                </div>
                <div className="col-4 col-12-medium">
                  <span className="image fit">
                    <img src="/images/pic02.jpg" alt="" />
                  </span>
                  <div className="project">
                    <h3>S사 Happy Station 2.0 통합 플랫폼</h3>
                    <p>S사 통합 키오스크 서버 및 CMS 개발</p>
                    <p> Java, Spring boot, MySQL, JPA, Dooray, AWS 등</p>
                    <ul className="actions special">
                      <li> 2019.05 ~ 2020.07</li>
                    </ul>
                  </div>
                </div>
                <div className="col-4 col-12-medium">
                  <span className="image fit">
                    <img src="/images/pic02.jpg" alt="" />
                  </span>
                  <div className="project">
                    <h3>S사 스마트 미러</h3>
                    <p>S사 스마트 미러 CMS 및 아두이노 개발</p>
                    <p>Java, Spring boot, MySQL, Arduino 등</p>
                    <ul className="actions special">
                      <li> 2019.06 ~ 2019.07</li>
                    </ul>
                  </div>
                </div>
                <div className="col-4 col-12-medium">
                  <span className="image fit">
                    <img src="/images/pic02.jpg" alt="" />
                  </span>
                  <div className="project">
                    <h3>C사 Smart BTU</h3>
                    <p>C사 공항 스마트 저울 개발</p>
                    <p>Node.js, AWS, Dooray 등</p>
                    <ul className="actions special">
                      <li> 2019.06 ~ 2019.07</li>
                    </ul>
                  </div>
                </div>
                <div className="col-4 col-12-medium">
                  <span className="image fit">
                    <img src="/images/pic02.jpg" alt="" />
                  </span>
                  <div className="project">
                    <h3>K사 패밀리박스</h3>
                    <p>K사 패밀리박스 어플리케이션 개발 및 운영</p>
                    <p>
                      Java, Spring boot, PostgreSQL, MyBatis, JIRA, Conflence 등
                    </p>
                    <ul className="actions special">
                      <li> 2018.07 ~ 2019.05</li>
                    </ul>
                  </div>
                </div>

                <div className="col-4 col-12-medium">
                  <span className="image fit">
                    <img src="/images/pic02.jpg" alt="" />
                  </span>
                  <div className="project">
                    <h3>K사 KBOX</h3>
                    <p>K사 사내 메신저 KBOX의 회원가입 API 개발</p>
                    <p>Java, Spring, MySQL, MyBatis 등</p>
                    <ul className="actions special">
                      <li> 2018.03 ~ 2018.05</li>
                    </ul>
                  </div>
                </div>

                <div className="col-4 col-12-medium">
                  <span className="image fit">
                    <img src="/images/pic02.jpg" alt="" />
                  </span>
                  <div className="project">
                    <h3>KTC투어 </h3>
                    <p>KTC투어 홈페이지 개발</p>
                    <p>Java, Spring, MySQL, MyBatis 등</p>
                    <ul className="actions special">
                      <li> 2018.06 ~ 2018.06</li>
                    </ul>
                  </div>
                </div>
                <div className="col-4 col-12-medium">
                  <span className="image fit">
                    <img src="/images/pic02.jpg" alt="" />
                  </span>
                  <div className="project">
                    <h3>S사 사내 프로젝트 관리 페이지 </h3>
                    <p>S사 사내 사이트 개발</p>
                    <p>Java, Spring, MySQL, MyBatis, Trello 등</p>
                    <ul className="actions special">
                      <li> 2018.01 ~ 2018.02</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </Layout>
    );
  }
}

export default BlogProfileTemplate;
