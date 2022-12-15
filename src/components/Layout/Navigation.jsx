import { Link, NavLink } from 'react-router-dom';
import { Header, Nav, StyledNavLink } from './styledNavigation';

function Navigation(props) {
  return (
    <Header>
      {/* <Link to={'/'}>Logo</Link> */}

      <Nav>
        <StyledNavLink to={'/'} exact>
          Home
        </StyledNavLink>

        <StyledNavLink to={'/login'} exact>
          Login
        </StyledNavLink>

        <StyledNavLink to={'/register'} exact>
          Register
        </StyledNavLink>
      </Nav>
    </Header>
  );
}
export default Navigation;
