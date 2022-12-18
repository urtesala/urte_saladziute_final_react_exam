import { Link } from 'react-router-dom';
import { StyledLink } from '../../components/styled/StyledComponents';
import { HomeDiv } from './styledHome';

function HomePage(props) {
  return (
    <HomeDiv>
      <h1>Welcome to Home Page</h1>
      <p>
        ...to continue you must <StyledLink to={'/login'}>LOGIN</StyledLink> or{' '}
        <StyledLink to={'/register'}>REGISTER</StyledLink>
      </p>
    </HomeDiv>
  );
}
export default HomePage;
