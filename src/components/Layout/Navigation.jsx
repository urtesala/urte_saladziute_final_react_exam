import { Link, NavLink } from 'react-router-dom';
import { useAuthCtx } from '../../store/AuthContext';
import { Header, Nav, StyledNavLink } from './styledNavigation';

function Navigation(props) {
  const { isUserLoggedIn, logout } = useAuthCtx();

  return (
    <Header>
      {/* <Link to={'/'}>Logo</Link> */}

      <Nav>
        {isUserLoggedIn && (
          <li>
            <StyledNavLink to={'/'} exact>
              Home
            </StyledNavLink>
          </li>
        )}
        {!isUserLoggedIn && (
          <li>
            <StyledNavLink to={'/register'} exact>
              Register
            </StyledNavLink>
          </li>
        )}
        {!isUserLoggedIn && (
          <li>
            <StyledNavLink to={'/login'} exact>
              Login
            </StyledNavLink>
          </li>
        )}
        {isUserLoggedIn && (
          <li>
            <StyledNavLink to={'/add-shop'} exact>
              Add Shop
            </StyledNavLink>
          </li>
        )}
        {isUserLoggedIn && (
          <li>
            <StyledNavLink to={'/shops'} exact>
              Shops
            </StyledNavLink>
          </li>
        )}
        {isUserLoggedIn && (
          <li>
            <StyledNavLink onClick={logout} to={'/'} exact>
              Logout
            </StyledNavLink>
          </li>
        )}
      </Nav>
    </Header>
  );
}
export default Navigation;
