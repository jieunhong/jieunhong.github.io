import Bio from '../components/Bio';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import React, { useEffect, useState } from 'react';
import '../components/custom.css';
import '../components/profile.css';
import huray from '../assets/huray.png';
import sociallive from '../assets/sociallive.webp';
import sqisoft from '../assets/sqisoft.jpg';
import platform_arch from '../assets/platform_arch.png';
import { PROJECT_DATA } from '../data/projects';

// ProjectModal 컴포넌트 추가
const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
        <div className="modal-header">
          <h3>{project.title}</h3>
          <p className="modal-period">{project.period}</p>
        </div>
        <div className="modal-body">
          {project.image && (
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
          )}
          <div className="project-details">
            <ul>
              {project.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </div>
          <div className="tech-stack">
            {project.techStack.map((tech, index) => (
              <span key={index} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

class BlogProfileTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      selectedExperience: null,
      selectedProject: null,
    };
  }

  render() {
    const { selectedExperience, selectedProject } = this.state;

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
                        <img
                          src={huray}
                          alt="Huraypositive"
                          className="company-logo"
                        />
                        <h3>Huraypositive</h3>
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
                        <img
                          src={sociallive}
                          alt="SOCIALLIVE"
                          className="company-logo"
                        />
                        <h3>SOCIALLIVE</h3>
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
                        <img
                          src={sqisoft}
                          alt="SQISOFT"
                          className="company-logo"
                        />
                        <h3>SQISOFT</h3>
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
                {PROJECT_DATA.huraypositive.map((project, index) => (
                  <div
                    key={project.id}
                    className="project-item"
                    onClick={() => this.setState({ selectedProject: project })}
                  >
                    <h5>{project.summary}</h5>
                    <div className="tech-stack">
                      {project.techStack.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="section-container">
                {/* 휴레이포지티브 */}
                <div className="experience-item">
                  <h3>소셜라이브 (2020.07 - 2021.12)</h3>
                  {PROJECT_DATA.sociallive.map((project, index) => (
                    <div
                      key={project.id}
                      className="project-item"
                      onClick={() =>
                        this.setState({ selectedProject: project })
                      }
                    >
                      <h5>{project.summary}</h5>
                      <div className="tech-stack">
                        {project.techStack.map((tech, techIndex) => (
                          <span key={techIndex} className="tech-tag">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="section-container">
                {/* 휴레이포지티브 */}
                <div className="experience-item">
                  <h3>에스큐아이소프트 (2018.01 - 2020.07)</h3>
                  {PROJECT_DATA.sqisoft.map((project, index) => (
                    <div
                      key={project.id}
                      className="project-item"
                      onClick={() =>
                        this.setState({ selectedProject: project })
                      }
                    >
                      <h5>{project.summary}</h5>
                      <div className="tech-stack">
                        {project.techStack.map((tech, techIndex) => (
                          <span key={techIndex} className="tech-tag">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
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
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => this.setState({ selectedProject: null })}
          />
        )}
      </Layout>
    );
  }
}

export default BlogProfileTemplate;
