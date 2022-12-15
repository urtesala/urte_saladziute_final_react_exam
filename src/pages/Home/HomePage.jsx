import { HomeDiv } from './styledHome';

function HomePage(props) {
  return (
    <HomeDiv>
      <h1>Welcome to Home Page</h1>
      <p>
        ...to continue you must <a href='/login'>LOGIN</a> or{' '}
        <a href='/register'>REGISTER</a>
      </p>
    </HomeDiv>
  );
}
export default HomePage;
