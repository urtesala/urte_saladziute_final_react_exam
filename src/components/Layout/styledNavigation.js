import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  height: 120px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #4444;
  opacity: 0.95;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  
`;
export const Nav = styled.nav`
  display: flex;
  font-size: 2rem;
  font-weight: 600;
  letter-spacing: 3px;
  padding-right: 2rem;
  li {
    list-style-type: none;
  }

`;
export const StyledNavLink = styled(NavLink)`
  color: #000000;
  padding: 1rem;
  text-decoration: none;
  list-style-type: none;
  &:hover {
    color: white;
  }
`;

export const Logo = styled(Link)`
font-size: 3rem;
text-decoration: none;
color: white;
padding-left: 4rem;
`