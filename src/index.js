import React from 'react'
import ReactDOM from 'react-dom'
import Profile from './components/Profile'
import {
  Experience,
  Education,
  Research,
  Projects,
  Skills,
  Langs
} from './components/Lists'
import Footer from './components/Footer'
import './dark-theme.scss'
import data from './data'

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
                experience in the areas of Backend, Frontend, Cloud and DevOps.
                Having deep knowledge in Web Development with frameworks as
                Vue.js, Node.js and Django. Also, I am community leader,
                open-source collaborator, and author for technical articles.
                <br />
                <br />✔ Among the strengths I have developed are my excellent
                communication skills, teamwork, critical thinking, creativity,
                and problem-solving.
              </div>
            </div>

            <div className='experience'>
              <div className='title is-size-5 has-text-primary has-text-weight-bold'>
                EXPERIENCE
              </div>
              <Experience experiences={data.experiences} />
            </div>

            <div className='education'>
              <div className='title is-size-5 has-text-primary has-text-weight-bold'>
                EDUCATION
              </div>

              <Education schools={data.educations} />
            </div>
          </div>
          <div className='column'>
            <div className='projects'>
              <div className='title is-size-5 has-text-primary has-text-weight-bold'>
                RESEARCH
              </div>
              <Research research={data.research} />
            </div>
            <div className='projects'>
              <div className='title is-size-5 has-text-primary has-text-weight-bold'>
                PROJECTS
              </div>

              <Projects projects={data.projects} />
            </div>

            <div className='skills'>
              <div className='title is-size-5 has-text-primary has-text-weight-bold'>
                SKILLS
              </div>
              <div className='wrapper'>
                <Skills skills={data.skills} />
              </div>
            </div>
            <div className='languages'>
              <div className='title is-size-5 has-text-primary has-text-weight-bold'>
                LANGUAGES
              </div>
              <Langs languages={data.languages} />
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer name={data.profile.name} />
  </div>
)

ReactDOM.render(el, document.getElementById('root'))
