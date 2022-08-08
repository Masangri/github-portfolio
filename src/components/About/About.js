import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const { name, role, description, resumeCG, resumeWeb3, social } = about

  return (
    <div className='about center'>
      {name && (
        <h2>
          Welcome to
        </h2>
      )}
        <h1>
          <span className='about__name'>{name}&apos;&nbsp;
            <a className='about__link' href={social.github} target="_blank" rel="noreferrer">GitHub</a> Page.</span>
        </h1>

      {role && <h2 className='about__role'>{role}</h2>}
      <p className='about__desc'>{description && description}</p>

      <div className='about__contact center'>
        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                target="_blank"
                rel="noreferrer"
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>

      <div className='about__contact center'>
        {resumeCG && (
          <a href={resumeCG} target="_blank" rel="noreferrer">
            <span type='button' className='btn btn--outline'>
              Resume (CG)
            </span>
          </a>
        )}
        {resumeWeb3 && (
          <a href={resumeWeb3} target="_blank" rel="noreferrer">
            <span type='button' className='btn btn--outline'>
              Resume (Web3)
            </span>
          </a>
        )}
      </div>
    </div>
  )
}

export default About
