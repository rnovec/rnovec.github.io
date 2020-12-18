import React from 'react'
import ReactDOM from 'react-dom'
import Profile from './components/Profile'
import Footer from './components/Footer'
import './dark-theme.scss'
import data from './data'

const styles = {
  list: {
    listStyle: 'disc',
    marginLeft: '1em'
  },
  projItem: {
    paddingTop: 0.5
  },
  tag: {
    margin: '0.7%'
  }
}

const el = (
  <div>
    <header className='line has-background-light'></header>
    <Profile profile={data.profile} social={data.social} />
    <div className='hr'></div>
    <section className='section'>
      <div className='container'>
        <div className='columns'>
          <div className='column is-three-fifths'>
            <div className='summary'>
              <div className='title is-size-5 has-text-primary has-text-weight-bold'>
                SUMMARY
              </div>
              <div className='wrapper'>
                Experienced Fullstack Developer with more than 2 years of broad
                experience in the areas of <b>Backend</b>, <b>Frontend</b>,{' '}
                <b>Cloud</b> and <b>DevOps</b>. Having deep knowledge in Web
                Development with frameworks as <b>Vue.js</b>, <b>Node.js</b> and{' '}
                <b>Django</b>. Also, I am community leader, open-source
                collaborator, and author for technical articles.
                <br />
                <br />✔ Among the strengths I have developed are my excellent{' '}
                <b>communication skills</b>, <b>teamwork</b>,{' '}
                <b>critical thinking</b>, <b>creativity</b>, and{' '}
                <b>problem-solving</b>.
              </div>
            </div>

            <div className='experience'>
              <div className='title is-size-5 has-text-primary has-text-weight-bold'>
                EXPERIENCE
              </div>
              {data.experiences.map(exp => (
                <div key={exp.title} className='item'>
                  <div className='is-size-5'>
                    <b>{exp.company}, </b>
                    <span className='has-text-weight-semi-bold'>
                      {exp.location} — <i>{exp.title}</i>
                    </span>
                  </div>
                  <div className='is-size-7'>{exp.period}</div>
                  {exp.jobdesc.map(job => (
                    <ul key={job} style={styles.list}>
                      <li>{job}</li>
                    </ul>
                  ))}
                </div>
              ))}
            </div>

            <div className='education'>
              <div className='title is-size-5 has-text-primary has-text-weight-bold'>
                EDUCATION
              </div>

              {data.educations.map(school => (
                <div key={school.name} className='item'>
                  <div className='is-size-5'>
                    <b>{school.name}</b>/
                    <span className='has-text-weight-semi-bold'>
                      {school.city} — <i>{school.degree}</i>
                    </span>
                  </div>
                  <div className='is-size-7'>{school.period}</div>
                  <div>{school.faculty}</div>
                </div>
              ))}
            </div>
          </div>
          <div className='column'>
            <div className='projects'>
              <div className='title is-size-5 has-text-primary has-text-weight-bold'>
                RESEARCH
              </div>
              {data.research.map(r => (
                <div className='item'>
                  <div className='is-size-6'>
                    <b>{r.title}</b> —
                    <i>
                      <a href={r.link}>{r.publisher}</a>
                    </i>
                  </div>
                  <div className='is-size-7'>{r.year}</div>
                </div>
              ))}
            </div>
            <div className='projects'>
              <div className='title is-size-5 has-text-primary has-text-weight-bold'>
                PROJECTS
              </div>

              {data.projects.map(proj => (
                <div className='item' style={styles.projItem}>
                  <div className='is-size-6'>
                    <b>
                      {' '}
                      <a target='_blank' rel='noreferrer' href={proj.link}>
                        {proj.title}
                      </a>
                    </b>
                  </div>
                  <div className='is-size-7'>
                    {' '}
                    {proj.company}, {proj.period}
                  </div>
                </div>
              ))}
            </div>

            <div className='skills'>
              <div className='title is-size-5 has-text-primary has-text-weight-bold'>
                SKILLS
              </div>
              <div className='wrapper'>
                {data.skills.map(skill => (
                  <span style={styles.tag} className='tag is-white has-text-weight-bold'>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
            <div className='languages'>
              <div className='title is-size-5 has-text-primary has-text-weight-bold'>
                LANGUAGES
              </div>
              {data.languages.map(lang => (
                <ul key={lang} className='wrapper'>
                  <li style={styles.list}>{lang}</li>
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer name={data.profile.name} />
  </div>
)

ReactDOM.render(el, document.getElementById('root'))
