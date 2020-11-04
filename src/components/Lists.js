const listStyles = { listStyle: 'disc', marginLeft: '1em' }
const Activities = props =>
  props.jobdesc.map(job => (
    <ul key={job} style={listStyles}>
      <li>{job}</li>
    </ul>
  ))

const Experience = props =>
  props.experiences.map(exp => (
    <div key={exp.title} className='item'>
      <div className='is-size-5'>
        <b>{exp.company},</b>
        <span className='has-text-weight-semi-bold'>
          {exp.location} — <i>{exp.title}</i>
        </span>
      </div>
      <div className='is-size-7'>{exp.period}</div>
      <Activities jobdesc={exp.jobdesc} />
    </div>
  ))

const Education = props =>
  props.schools.map(school => (
    <div key={school.name} className='item'>
      <div className='is-size-5'>
        <b>{school.name}</b>,
        <span className='has-text-weight-semi-bold'>
          {school.city} — <i>{school.degree}</i>
        </span>
      </div>
      <div className='is-size-7'>{school.period}</div>
      <div>{school.faculty}</div>
    </div>
  ))

const Projects = props =>
  props.projects.map(proj => (
    <div className='item'>
      <div className='is-size-6'>
        <b>
          {' '}
          <a target='_blank' href={proj.link}>
            {proj.title}
          </a>
        </b>
      </div>
      <div className='is-size-7'>
        {' '}
        {proj.company},{' '}
        {proj.period}
      </div>
    </div>
  ))

const Langs = props =>
  props.languages.map(lang => (
    <ul key={lang} className='wrapper'>
      <li style={listStyles}>{lang}</li>
    </ul>
  ))

const Skills = props =>
  props.skills.map(skill => (
    <span className='tag is-white has-text-weight-bold'>{skill.name}</span>
  ))
const Research = props =>
  props.research.map(r => (
    <div className='item'>
      <div className='is-size-6'>
        <b>{r.title}</b> —
        <i>
          <a href={r.link}>{r.publisher}</a>
        </i>
      </div>
      <div className='is-size-7'>{r.year}</div>
    </div>
  ))

export { Activities, Experience, Education, Research, Projects, Skills, Langs }
