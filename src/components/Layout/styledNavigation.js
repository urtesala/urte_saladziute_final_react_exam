import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  background-color: #171717;
  height: 120px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
export const Nav = styled.nav`
  display: flex;
  font-size: 2rem;
  padding-right: 2rem;
`;
export const StyledNavLink = styled(NavLink)`
  color: #EDEDED;
  padding: 1rem;
  text-decoration: none;
  &:hover{
    color: #DA0037;
  }
`;
