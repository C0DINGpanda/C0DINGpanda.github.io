import { NavLink, Link } from 'react-router-dom'
import {
  Name,
  NavMenuItem,
  NavMenuWrapper,
  NavTitleWrapper,
  Role,
  Separator,
  StyledNavbarDesktop
} from '../../styles/Navbar.style'
import { GeometricShape } from '../../styles/Containers.style'

const NavbarDesktop = () => {
  return (
    <>
      <StyledNavbarDesktop>
        <NavTitleWrapper>
          <GeometricShape />
          <div>
            <Link to="/">
              <Name>Eshan MD</Name>
            </Link>
            <Separator>/</Separator>
            <Role>Lead Software Developer</Role>
          </div>
        </NavTitleWrapper>
        <div>
          <NavMenuWrapper>
            {/* <NavLink to="/">
              <NavMenuItem>Eshan</NavMenuItem>
            </NavLink> */}
            <NavLink to="/about">
              <NavMenuItem>about me</NavMenuItem>
            </NavLink>
            <NavLink to="/resume">
              <NavMenuItem>resume</NavMenuItem>
            </NavLink>
            <NavLink to="/projects">
              <NavMenuItem>projects</NavMenuItem>
            </NavLink>
            <NavLink to="/contact">
              <NavMenuItem>contact</NavMenuItem>
            </NavLink>
            <NavLink to="/blogs">
              <NavMenuItem>blogs</NavMenuItem>
            </NavLink>
          </NavMenuWrapper>
        </div>
      </StyledNavbarDesktop>
    </>
  )
}

export default NavbarDesktop
