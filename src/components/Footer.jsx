import Dev from './Icons/Dev'
import Github from './Icons/Github'
import Linkedin from './Icons/Linkedin'
// import Twitter from './Icons/Twitter'
import {
  IconsContainer,
  LicenceContainer,
  SocialContainer,
  SocialItem,
  StyledFooter
} from '../styles/Footer.style'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <StyledFooter>
        <LicenceContainer>
          <p>
            By <strong>c0dingpanda </strong>
          </p>
          <p>No © copyright issues :)</p>
        </LicenceContainer>
        <SocialContainer>
          <SocialItem>
            <p>
              <strong>Write</strong>
            </p>
            <p>Eshanhunter@gmail.com</p>
          </SocialItem>
          <SocialItem>
            <p>
              <strong>Follow</strong>
            </p>
            <IconsContainer>
              <Link
                to="https://www.linkedin.com/in/eshan-md-a62225ab/"
                target="_blank"
                rel="noopener noreferrer">
                <Linkedin width="22" height="22" />
              </Link>
              <Link to="https://github.com/C0DINGpanda" target="_blank" rel="noopener noreferrer">
                <Github width="22" height="22" />
              </Link>
              <Link to="https://dev.to/c0dingpanda" target="_blank" rel="noopener noreferrer">
                <Dev width="22" height="22" />
              </Link>
              {/* <Link to="https://twitter.com/khush__2706" target="_blank" rel="noopener noreferrer">
                <Twitter width="22" height="22" />
              </Link> */}
            </IconsContainer>
          </SocialItem>
        </SocialContainer>
      </StyledFooter>
    </>
  )
}

export default Footer
