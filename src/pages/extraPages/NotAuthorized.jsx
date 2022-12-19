import { Section, StyledLink } from '../../components/styled/StyledComponents';

function unauthorized(props) {
  return (
    <>
      <Section>
        <h1>401 ACCESS ALLOWED ONLY FOR REGISTRED USERS</h1>
        <h2>
          If you would like to register, please go{' '}
          <StyledLink to={'/register'}>HERE</StyledLink>
        </h2>
      </Section>
    </>
  );
}
export default unauthorized;
