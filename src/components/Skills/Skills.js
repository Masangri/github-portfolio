import uniqid from 'uniqid'
import { skills, skillsDCC } from '../../portfolio'
import './Skills.css'

const Skills = () => {
  if (!skills.length || !skillsDCC.length) return null

  return (
    <section className='section skills' id='skills'>
      <h2 className='section__title'>Skills</h2>
      <h3 className='section__title'>Programming</h3>
      <ul className='skills__list'>
        {skills.map((skill) => (
          <li key={uniqid()} className='skills__list-item btn btn--plain'>
            {skill}
          </li>
        ))}
      </ul>
      <br/>
      <h3 className='section__title'>DCC</h3>
      <ul className='skills__list'>
        {skillsDCC.map((skillDCC) => (
          <li key={uniqid()} className='skills__list-item btn btn--plain'>
            {skillDCC}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skills
