import Bio from '../components/Bio';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import React, { useEffect } from 'react';
import '../components/custom.css';
import '../components/profile.css';
import huray from '../assets/huray.png';
import sociallive from '../assets/sociallive.webp';
import sqisoft from '../assets/sqisoft.jpg';

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
            <div className="intro-section">
              <div className="intro">
                <h1>
                  보이지 않는 곳에서 더 나은 삶을 만들고 싶은
                  <br /> 개발자 홍지은입니다.
                </h1>
                <p className="intro-text">
                  플랫폼 및 서비스 개발을 주로 하였습니다.
                  <br />
                  커뮤니케이션을 통해 더 가치있는 서비스를 만들고자 노력합니다.
                </p>

                <div className="contact-links">
                  <div className="contact-item">
                    <span className="icon">📧</span>
                    <a href="mailto:hong.bbubbu@gmail.com">
                      hong.bbubbu@gmail.com
                    </a>
                  </div>
                  <div className="contact-item">
                    <span className="icon">📝</span>
                    <a
                      href="https://blog.bbubbu.me/profile"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Portfolio
                    </a>
                  </div>
                  <div className="contact-item">
                    <span className="icon">📚</span>
                    <a
                      href="https://blog.bbubbu.me"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Tech Blog
                    </a>
                  </div>
                  <div className="contact-item">
                    <span className="icon">💻</span>
                    <a
                      href="https://github.com/jieunhong"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section className="about-section">
            <div className="about-content">
              <h2>About Me</h2>

              <div className="introduction">
                <p className="highlight-text">
                  "눈에 보이지 않지만 더 나은 삶을 만들어주는 서비스를 개발하고
                  싶습니다."
                </p>

                <div className="text-content">
                  <p>
                    저는 Spring Boot와 Java를 활용한 서버 개발을 담당해왔으며,
                    DDD, EDA, MSA 등 플랫폼 개발에서 데이터 정합성을 유지하고
                    트랜잭션을 처리하는 부분에 관심을 가지고 있습니다.
                  </p>

                  <p>
                    스타트업에서 근무하며 단순히 주어진 기획에 따라 개발을
                    진행하는 것을 넘어, 실제로 소비자에게 어떤 가치를 제공할 수
                    있을지에 대해 고민하게 되었습니다. 이런 이유로 대학에서
                    경영과 공학이 융합된 전공을 선택하게 되었고, 소비자와 기업의
                    목적을 이해하며 더 넓은 시각에서 소비자 지향적인 서비스를
                    만들고자 노력하고 있습니다.
                  </p>

                  <p>
                    4년 동안 학교와 회사를 병행하며 제 업무의 관점은 단순히
                    '개발'에서 '서비스'로 확장되었습니다. 초기에는 "어떻게 하면
                    더 깔끔하고 객체지향적인 코드를 작성할 수 있을까?"를
                    고민했지만, 점차 "어떻게 하면 실제 소비자가 원하는 서비스를
                    빠르고 정확하게 제공할 수 있을까?"로 제 업무의 목표가
                    변화하게 되었습니다.
                  </p>

                  <p>
                    호수 위의 백조처럼, 대단하고 보기 좋은 서비스도 물 밑에서는
                    치열한 고민과 노력을 통해 유지됩니다. 도메인 전문가와의
                    소통을 통해 어떤 기능이 실제로 필요한지, 더 나은 방법은
                    무엇인지 고민하며 서비스를 만들어가는 것이 제가 지향하는
                    개발자의 역할입니다.
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* 경력 & 학력 섹션 */}
          <section className="career-education-section">
            <div className="section-container">
              <div className="section-item education">
                <h2>EDUCATION</h2>
                <div className="timeline-horizontal">
                  <div className="timeline-item">
                    <div className="content">
                      <h3>방송통신대학교</h3>
                      <div className="details">
                        <span className="department">컴퓨터공학과</span>
                        <span className="period">2021.02 - Present</span>
                      </div>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="content">
                      <h3>건국대학교 공과대학</h3>
                      <div className="details">
                        <span className="department">
                          신산업융합학과 - 경영공학사
                        </span>
                        <span className="period">2021.02 - 2025.02</span>
                      </div>
                    </div>
                  </div>

                  <div className="timeline-item">
                    <div className="content">
                      <h3>미림여자정보과학고등학교</h3>
                      <div className="details">
                        <span className="department">인터랙티브미디어과</span>
                        <span className="period">2015.03 - 2018.02</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="section-item work">
                <h2>WORK EXPERIENCE</h2>
                <div className="timeline-horizontal">
                  <div className="timeline-item">
                    <div className="content">
                      <div className="company-header">
                        <h3>Huraypositive</h3>
                        <img
                          src={huray}
                          alt="Huraypositive"
                          className="company-logo"
                        />
                      </div>
                      <div className="details">
                        <span className="position">플랫폼 개발팀 / 선임</span>
                        <span className="description">
                          공용 플랫폼 및 서비스 Backend 개발
                        </span>
                        <span className="period">2022.01 - Present</span>
                      </div>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="content">
                      <div className="company-header">
                        <h3>SOCIALLIVE</h3>
                        <img
                          src={sociallive}
                          alt="SOCIALLIVE"
                          className="company-logo"
                        />
                      </div>
                      <div className="details">
                        <span className="position">플랫폼 사업부 / 선임</span>
                        <span className="description">
                          WebRTC기반 화상대화 플랫폼 개발
                        </span>
                        <span className="period">2020.07 - 2021.12</span>
                      </div>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="content">
                      <div className="company-header">
                        <h3>SQISOFT</h3>
                        <img
                          src={sqisoft}
                          alt="SQISOFT"
                          className="company-logo"
                        />
                      </div>
                      <div className="details">
                        <span className="position">미디어 사업부 / 선임</span>
                        <span className="description">
                          디지털 사이니지 및 키오스크 개발 및 유지보수
                        </span>
                        <span className="period">2018.01 - 2020.07</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="experience-section">
            <div className="section-container">
              {/* 휴레이포지티브 */}
              <div className="experience-item">
                <h3>휴레이포지티브 (2022.01 - 현재)</h3>

                <div className="project-item">
                  <h4>MSA Core Platform 개발 (2024.01 - 현재)</h4>
                  <ul>
                    <li>
                      MSA 환경에서 여러 서비스에서 사용하는 플랫폼을 중점적으로
                      개발
                    </li>
                    <li>1. 건강정보 콘텐츠 스케쥴링 및 배급 플랫폼</li>
                    <li>2. 플랫폼 사용 서비스 관리 플랫폼</li>
                    <li>3. 사용자 인증 및 토큰 발행 플랫폼</li>
                    <li>4. 건강정보(PHR) 관리 플랫폼</li>
                    <li>
                      5. Push, SMS, Email과 같은 알림 관련 서드파티 연동 플랫폼
                    </li>
                    <li>
                      플랫폼별 Client 개발 및 운영으로 서비스에서 사용하기 쉬운
                      환경 제공
                    </li>
                    <li>
                      RestAPI 및 Kafka와 RabbitMQ를 이용한 다양한 플랫폼 이용
                      채널 제공
                    </li>
                    <li>
                      Transaction Outbox Pattern 적용으로 Event Queue 환경에서의
                      순서 보장
                    </li>
                    <li>성능 개선을 위한 JPA + Redis 적용</li>
                  </ul>
                  <div className="tech-stack">
                    <span className="tech-tag">Spring Boot</span>
                    <span className="tech-tag">Spring Batch</span>
                    <span className="tech-tag">JPA</span>
                    <span className="tech-tag">Redis</span>
                    <span className="tech-tag">RabbitMQ</span>
                    <span className="tech-tag">Kafka</span>
                    <span className="tech-tag">MySQL</span>
                    <span className="tech-tag">Kubernetes</span>
                    <span className="tech-tag">AWS</span>
                    <span className="tech-tag">NCP</span>
                  </div>
                </div>

                <div className="project-item">
                  <h4>
                    Cancer care 암환자 서비스 API 개발 (2024.07 - 2025.01)
                  </h4>
                  <ul>
                    <li>
                      기업 내 암환자 발생 시 최적의 치료와 재발방지를 위한
                      컨설팅 서비스
                    </li>
                    <li>SK 하이닉스와 계약하여 서비스 운영 중</li>
                    <li>TPM으로 서버 개발 및 리딩 진행</li>
                  </ul>
                  <div className="tech-stack">
                    <span className="tech-tag">Spring Boot</span>
                    <span className="tech-tag">JPA</span>
                    <span className="tech-tag">MySQL</span>
                    <span className="tech-tag">QueryDSL</span>
                  </div>
                </div>

                <div className="project-item">
                  <h4>
                    삼성전자 One Health 서비스의 내부 PHR 플랫폼 개발 (2024.08 -
                    2025.02)
                  </h4>
                  <ul>
                    <li>DX 임직원 건진/식이정보 삼성헬스 통합 개발</li>
                    <li>내부 PHR 처리용 플랫폼 개발</li>
                    <li>JavaCC를 이용한 동적 Expression 컴파일러 관련 개발</li>
                  </ul>
                  <div className="tech-stack">
                    <span className="tech-tag">Spring Boot</span>
                    <span className="tech-tag">JPA</span>
                    <span className="tech-tag">MySQL</span>
                    <span className="tech-tag">Kafka</span>
                    <span className="tech-tag">JavaCC</span>
                  </div>
                </div>
                <div className="project-item">
                  <h4>고대 국제진료 플랫폼 API 개발 (2024.10 - 2025.02)</h4>
                  <ul>
                    <li>국제진료센터 비대면 솔루션의 개발 및 구축</li>
                    <li>국제 진료센터 비대면 진료 및 관리 페이지 API 개발</li>
                    <li>TPM으로 서버 개발 및 리딩 진행</li>
                    <li>Agora 화상대화 플랫폼 연동(RTC)</li>
                    <li>
                      Object storage의 Presigned URL을 활용한 대용량 파일
                      Multipart Upload 개발
                    </li>
                  </ul>
                  <div className="tech-stack">
                    <span className="tech-tag">Spring Boot</span>
                    <span className="tech-tag">JPA</span>
                    <span className="tech-tag">MySQL</span>
                    <span className="tech-tag">SSE</span>
                    <span className="tech-tag">NCP</span>
                  </div>
                </div>

                <div className="project-item">
                  <h4>EPRO API 개발 (2022.01 - 2022.05)</h4>
                  <ul>
                    <li>암환자 증상 자가보고 서비스</li>
                    <li>설문 및 문진 API 개발</li>
                    <li>ORM을 이용한 도메인 설계 및 개발</li>
                    <li>환자용 API, 의료진용 API 개발</li>
                  </ul>
                  <div className="tech-stack">
                    <span className="tech-tag">Spring Boot</span>
                    <span className="tech-tag">JPA</span>
                    <span className="tech-tag">MySQL</span>
                    <span className="tech-tag">AWS</span>
                    <span className="tech-tag">NCP</span>
                  </div>
                </div>

                <div className="project-item">
                  <h4>헬스투두 API 개발 (2022.06 - 2024.01)</h4>
                  <ul>
                    <li>
                      직장인 심뇌혈관질환 예방 및 관리를 위한 개인 맞춤형 모바일
                      건강관리 서비스
                    </li>
                    <li>
                      프로젝트 초기부터 기획, 클라이언트, 프론트, 사업부와
                      커뮤니케이션
                    </li>
                    <li>
                      Domain, Plugin, Service 패키지로 나누어 모놀리식 아키텍처
                      기반으로 프로젝트 설계 및 개발
                    </li>
                    <li>
                      타 플랫폼(MSA 환경)의 변경사항에 의존적이지 않기 위한 모듈
                      기반 프로젝트 설계
                    </li>
                    <li>Spring Batch를 이용한 대용량 처리 Job 개발</li>
                    <li>약 2분이 넘게 걸리던 통계 API 10초로 성능 개선</li>
                  </ul>
                  <div className="tech-stack">
                    <span className="tech-tag">Spring Boot</span>
                    <span className="tech-tag">Spring Batch</span>
                    <span className="tech-tag">JPA</span>
                    <span className="tech-tag">Redis</span>
                    <span className="tech-tag">RabbitMQ</span>
                    <span className="tech-tag">Kafka</span>
                    <span className="tech-tag">Kubernetes</span>
                  </div>
                </div>
              </div>

              {/* 소셜라이브 */}
              <div className="experience-item">
                <h3>소셜라이브 (2020.07 - 2021.12)</h3>

                <div className="project-item">
                  <h4>
                    LiveRTC Cloud/Platform 솔루션 개발 (2020.07 - 2021.07)
                  </h4>
                  <ul>
                    <li>바바라이브 사이트 개발 및 LiveRTC 고도화</li>
                    <li>WebRTC기반 화상 대화 솔루션 플랫폼 개발</li>
                    <li>AWS 클라우드 환경 구축 및 운영</li>
                  </ul>
                  <div className="tech-stack">
                    <span className="tech-tag">Java</span>
                    <span className="tech-tag">Spring Boot</span>
                    <span className="tech-tag">PostgreSQL</span>
                    <span className="tech-tag">JPA</span>
                    <span className="tech-tag">Node.js</span>
                    <span className="tech-tag">WebRTC</span>
                    <span className="tech-tag">AWS</span>
                  </div>
                </div>
              </div>

              {/* 에스큐아이소프트 */}
              <div className="experience-item">
                <h3>에스큐아이소프트 (2018.01 - 2020.07)</h3>

                <div className="project-item">
                  <h4>Eliga-Core (2020.02 - 2020.07)</h4>
                  <ul>
                    <li>
                      무인주문 키오스크 통합 솔루션(Eliga Order Kiosk - EOK)
                    </li>
                    <li>스마트스페이스 구축 및 운영 솔루션</li>
                    <li>Redis 도입</li>
                    <li>HTML5 웹 기반의 통합운영 디지털 사이니지 솔루션</li>
                    <li>fabric.js를 이용한 커스텀 레이아웃 구성 메뉴 개발</li>
                    <li>SPA 개발</li>
                  </ul>
                  <div className="tech-stack">
                    <span className="tech-tag">Java</span>
                    <span className="tech-tag">Spring Boot</span>
                    <span className="tech-tag">MySQL</span>
                    <span className="tech-tag">JPA</span>
                    <span className="tech-tag">Redis</span>
                    <span className="tech-tag">AWS</span>
                    <span className="tech-tag">Node.js</span>
                    <span className="tech-tag">AWS</span>
                    <span className="tech-tag">DynamoDB</span>
                    <span className="tech-tag">NoSQL</span>
                  </div>
                </div>

                <div className="project-item">
                  <h4>SPC Happy Station 2.0 통합 플랫폼 (2019.05 - 2020.07)</h4>
                  <ul>
                    <li>SPC의 무인주문 키오스크 솔루션 통합 관리 시스템</li>
                    <li>여러 브랜드를 한 솔루션으로 통합하여 관리</li>
                    <li>클라우드 서비스 도입(AWS)</li>
                    <li>자바 ORM 사용(JPA)</li>
                    <li>통합 플랫폼 환경을 위한 관계형 DB 아키텍처 설계</li>
                  </ul>
                  <div className="tech-stack">
                    <span className="tech-tag">Java</span>
                    <span className="tech-tag">Spring Boot</span>
                    <span className="tech-tag">MySQL</span>
                    <span className="tech-tag">JPA</span>
                    <span className="tech-tag">AWS</span>
                  </div>
                </div>

                <div className="project-item">
                  <h4>신세계 스마트 미러 (2019.06 - 2019.07)</h4>
                  <ul>
                    <li>
                      사용자가 일정 거리 이상 다가오면, 거리를 측정하여 광고를
                      재생하는 스마트 미러
                    </li>
                    <li>Arduino 개발</li>
                    <li>Vue.js 도입 및 개발</li>
                    <li>내부망 환경에서의 서버 세팅 및 관리</li>
                  </ul>
                  <div className="tech-stack">
                    <span className="tech-tag">Java</span>
                    <span className="tech-tag">Spring Boot</span>
                    <span className="tech-tag">MySQL</span>
                    <span className="tech-tag">Arduino</span>
                    <span className="tech-tag">Vue.js</span>
                  </div>
                </div>

                <div className="project-item">
                  <h4>CAS Smart BTU (2019.06 - 2019.07)</h4>
                  <ul>
                    <li>
                      사용자의 수하물 무게와 크기를 재고, 보유한 티켓을 읽어들여
                      수하물 규정에 맞는지 자동으로 확인해주는 키오스크
                    </li>
                    <li>첫 프론트 프로젝트</li>
                    <li>Node.js와 NoSQL 첫 개발</li>
                    <li>광고로 인한 스케쥴링 체크로직 개발</li>
                  </ul>
                  <div className="tech-stack">
                    <span className="tech-tag">Node.js</span>
                    <span className="tech-tag">AWS</span>
                    <span className="tech-tag">NoSQL</span>
                  </div>
                </div>

                <div className="project-item">
                  <h4>KT 패밀리박스 및 KT KBOX(2018.02 - 2019.05)</h4>
                  <ul>
                    <li>KT 가입자들의 데이터와 멤버포인트 공유 어플리케이션</li>
                    <li>
                      Jira와 Confluence, Slack 등 협업툴을 이용한 이슈 관리
                    </li>
                    <li>SVN, Git을 이용한 소스 버전 관리</li>
                    <li>
                      다양한 개발 직군의 업무 경험 (Android, Server, Operation)
                    </li>
                    <li>서비스 아키텍처의 전체적인 흐름(Flow) 파악</li>
                    <li>I/A 리뷰, 코드 리뷰 등을 통한 코드 정확도 재검토</li>
                    <li>KT그룹 및 계열사의 사내 커뮤니티 사이트</li>
                    <li>앱 로그인 연동 API 개발</li>
                    <li>Spring MVC 패턴을 활용한 파일 설계</li>
                  </ul>
                  <div className="tech-stack">
                    <span className="tech-tag">Java</span>
                    <span className="tech-tag">Spring Boot</span>
                    <span className="tech-tag">PostgreSQL</span>
                    <span className="tech-tag">MyBatis</span>
                  </div>
                </div>
                <div className="project-item">
                  <h4>iqsbz (2018.01 - 2018.02)</h4>
                  <ul>
                    <li>에스큐아이소프트 사내 사이트 개발</li>
                  </ul>
                  <div className="tech-stack">
                    <span className="tech-tag">Java</span>
                    <span className="tech-tag">Spring</span>
                    <span className="tech-tag">MySQL</span>
                    <span className="tech-tag">MyBatis</span>
                    <span className="tech-tag">Trello</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <p></p>
          <section className="awards-activities-section">
            <br></br> <br></br>
            <div className="main-white section-container">
              <h2>Awards & Activities</h2>
              {/* 수상 경력 */}
              <div className="subsection">
                <h3>Awards & Certificates</h3>
                <div className="awards-list">
                  <div className="award-item">
                    <h4>정보처리기사</h4>
                    <p className="award-date">2024.12</p>
                    <p>한국산업인력공단</p>
                  </div>

                  <div className="award-item">
                    <h4>정보처리기능사</h4>
                    <p className="award-date">2017.07</p>
                    <p>한국산업인력공단</p>
                  </div>

                  <div className="award-item">
                    <h4>SK Smarteen App Challenge 우수멘토상</h4>
                    <p className="award-date">2019.09</p>
                    <p>아이디어 개발 멘토링 활동</p>
                  </div>

                  <div className="award-item">
                    <h4>제 10회 App Jam 해커톤 특별상</h4>
                    <p className="award-date">2016.04</p>
                  </div>

                  <div className="award-item">
                    <h4>Smarteen App Challenge</h4>
                    <p className="award-date">2017.10</p>
                    <p>가작상</p>
                  </div>

                  <div className="award-item">
                    <h4>Smarteen App Challenge</h4>
                    <p className="award-date">2016.10</p>
                    <p>가작상</p>
                  </div>
                </div>
              </div>
              {/* 멘토링 및 기타 활동 */}
              <div className="subsection">
                <h3>Mentoring & Activities</h3>
                <div className="activities-list">
                  <div className="activity-item">
                    <h4>SK Smarteen App Challenge (2019 ~ 2021)</h4>
                    <p>아이디어 & 개발 멘토</p>
                  </div>

                  <div className="activity-item">
                    <h4>Django Girls Workshop 멘토</h4>
                    <p className="activity-date">2019.04</p>
                    <p>Django 개발 멘토링 활동</p>
                    <a
                      href="https://www.facebook.com/djangogirlsseoul"
                      className="activity-link"
                    >
                      Django Girls Seoul
                    </a>
                  </div>

                  <div className="activity-item">
                    <h4>STACCATO (2018 ~ 2020)</h4>
                    <p>
                      청소년 강연 모임 STACCATO 멘토링 모임 운영진 및 강연자
                    </p>
                    <div className="activity-links">
                      <a href="https://www.facebook.com/staccato19">Facebook</a>
                      <a href="https://www.notion.so/staccatokorea/2019-12-02-b65df979913e428da5705e6d6df26da7">
                        Notion
                      </a>
                    </div>
                  </div>

                  <div className="activity-item">
                    <h4>Smarteen App Club</h4>
                    <p className="activity-date">2016.07</p>
                    <p>Smarteen App Club 6기 회장단 부회장 활동</p>
                    <p>청소년 해커톤 기획 및 운영</p>
                  </div>
                </div>
              </div>
              <br></br> <br></br>
            </div>
          </section>
          <div className="github-contributions main ">
            <div className="container">
              <h2>GitHub Contributions</h2>
              <div className="col-6 row">
                <img
                  src="https://ghchart.rshah.org/jieunhong"
                  alt="GitHub Contributions"
                  style={{ width: '100%' }}
                />
              </div>
              <div className="col-6  row">
                <img
                  src="https://github-readme-stats.vercel.app/api?username=jieunhong&show_icons=true&theme=default&hide_border=true&bg_color=ffffff&title_color=2C3E50&icon_color=3498DB&text_color=2C3E50"
                  alt="GitHub Stats"
                  style={{
                    width: '100%',
                    maxWidth: '495px',
                    margin: '0 auto',
                    display: 'block',
                  }}
                />
                <img
                  src="https://github-readme-streak-stats.herokuapp.com/?user=jieunhong&theme=default&hide_border=true&background=ffffff&ring=3498DB&fire=E74C3C&currStreakLabel=2C3E50&sideLabels=2C3E50&dates=718096"
                  alt="GitHub Streak"
                  style={{
                    width: '100%',
                    maxWidth: '495px',
                    margin: '20px auto 0',
                    display: 'block',
                  }}
                />
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
