import { Link, NavLink } from 'react-router-dom';
import { useAuthCtx } from '../../store/AuthContext';
import { Header, Nav, StyledNavLink } from './styledNavigation';

function Navigation(props) {
  const { isUserLoggedIn, logout } = useAuthCtx();

  return (
    <Header>
      {/* <Link to={'/'}>Logo</Link> */}

      <Nav>
        <li>
          <StyledNavLink
            activeStyle={{
              color: 'white',
              textDecoration: 'underline',
            }}
            to={'/'}
            exact
          >
            Home
          </StyledNavLink>
        </li>

        {!isUserLoggedIn && (
          <li>
            <StyledNavLink
              activeStyle={{
                color: 'white',
                textDecoration: 'underline',
              }}
              to={'/register'}
              exact
            >
              Register
            </StyledNavLink>
          </li>
        )}
        {!isUserLoggedIn && (
          <li>
            <StyledNavLink
              activeStyle={{
                color: 'white',
                textDecoration: 'underline',
              }}
              to={'/login'}
              exact
            >
              Login
            </StyledNavLink>
          </li>
        )}
        {isUserLoggedIn && (
          <li>
            <StyledNavLink
              activeStyle={{
                color: 'white',
                textDecoration: 'underline',
              }}
              to={'/add-shop'}
              exact
            >
              Add Shop
            </StyledNavLink>
          </li>
        )}
        {isUserLoggedIn && (
          <li>
            <StyledNavLink
              activeStyle={{
                color: 'white',
                textDecoration: 'underline',
              }}
              to={'/shops'}
              exact
            >
              Shops
            </StyledNavLink>
          </li>
        )}
        {isUserLoggedIn && (
          <li>
            <StyledNavLink
              activeStyle={{
                color: 'white',
                textDecoration: 'underline',
              }}
              onClick={logout}
              to={'/home'}
              exact
            >
              Logout
            </StyledNavLink>
          </li>
        )}
      </Nav>
    </Header>
  );
}
export default Navigation;
