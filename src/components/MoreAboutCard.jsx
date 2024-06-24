import { AboutCardFooter, AboutCardWrapper, Separator } from '../styles/Home.style'
import avatar from '../assets/eshan.png'
import { Name } from '../styles/Navbar.style'
import { CardRole } from '../styles/Home.style'
import { Link } from 'react-router-dom'
import Dev from './Icons/Dev'
import Github from './Icons/Github'
import Linkedin from './Icons/Linkedin'
import Stackoverflow from './Icons/Stackoverflow'
import Gmail from './Icons/Gmail'
import FlexBox from './containers/FlexBox'

const MoreAbuotCard = () => {
  return (
    <>
      <AboutCardWrapper>
        <img src={avatar} alt="" width="220" height="220" />
        <FlexBox align="center" justify="center" direction="column" style={{ marginTop: '25px' }}>
          <Name>Eshan MD</Name>
        </FlexBox>
        <Separator />
        <CardRole>Lead Software Developer</CardRole>
        <CardRole>@Ascertra</CardRole>

        <AboutCardFooter>
          <Link
            to="https://www.linkedin.com/in/eshan-md-a62225ab/"
            target="_blank"
            rel="noopener noreferrer">
            <Linkedin width="28" height="28" />
          </Link>
          <Link to="https://github.com/C0DINGpanda" target="_blank" rel="noopener noreferrer">
            <Github width="28" height="28" />
          </Link>
          <Link to="https://dev.to/c0dingpanda" target="_blank" rel="noopener noreferrer">
            <Dev width="28" height="28" />
          </Link>
          <Link to="https://mail.google.com/mail/?view=cm&fs=1&to=eshanhunter@gmail.com">
            <Gmail width="28" height="28" />
          </Link>
          <Link
            to="https://stackoverflow.com/users/8688155/coding-panda"
            target="_blank"
            rel="noopener noreferrer">
            <Stackoverflow width="28" height="28" />
          </Link>
        </AboutCardFooter>
      </AboutCardWrapper>
    </>
  )
}

export default MoreAbuotCard
