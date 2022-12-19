import { StyledLink } from '../../components/styled/StyledComponents';
import { useAuthCtx } from '../../store/AuthContext';
import { HomeDiv } from './styledHome';

function HomePage(props) {
  const { isUserLoggedIn } = useAuthCtx();
  return (
    <>
      {!isUserLoggedIn ? (
        <HomeDiv>
          <h1>Welcome to Home Page</h1>
          <p>
            ...to continue you must <StyledLink to={'/login'}>LOGIN</StyledLink>{' '}
            or <StyledLink to={'/register'}>REGISTER</StyledLink>
          </p>
        </HomeDiv>
      ) : (
        <HomeDiv>
          <h1>Welcome to the shops page!</h1>
          <p>
            ...here you can <StyledLink to={'/add-shop'}>ADD SHOP</StyledLink>{' '}
            or <StyledLink to={'/shops'}>SEE SHOPS LIST </StyledLink>
          </p>
        </HomeDiv>
      )}
    </>
  );
}
export default HomePage;
