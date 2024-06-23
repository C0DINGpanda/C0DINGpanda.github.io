import { Link } from 'react-router-dom'
import { BioText, DescWrapper, Heading, SubHeading } from '../styles/Home.style'
import Button from './Button'
import Typed from '../styles/Typed.jsx'
const DescContainer = () => {
  return (
    <>
      <DescWrapper>
        <Heading>
          <Typed />
        </Heading>
        <SubHeading>
          <strong>Thank you,</strong> It&apos;s great to have you here!
        </SubHeading>
        {
          <div style={{ marginBottom: '30px' }}>
            <Link to="resume">
              <Button>Resume</Button>
            </Link>
            <Link to="projects">
              <Button backgroundcolor="#fff" color="#000" border="1px solid #000">
                Projects
              </Button>
            </Link>
          </div>
        }
        <BioText>
          &emsp; I&apos;m a Software developer with over 6 years of experience in Product companies
          . I Master the art of migrating products to PaaS. A Cloud wizard with the powers of C, C#,
          powershell, React, BICEP, CI\CD, YAML.
        </BioText>
        <BioText>My brain also process 🏸🎭♟️🎮⚜️📝🏀🍽️🧑‍🌾 </BioText>
      </DescWrapper>
    </>
  )
}

export default DescContainer
