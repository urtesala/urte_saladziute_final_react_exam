import LoginForm from '../../components/forms/LoginForm';
import { Card, Section } from '../../components/styled/StyledComponents';


function LoginPage(props) {
  return (
    <Section>
      <Card>
        <h1>LOGIN</h1>
        <LoginForm />
      </Card>
    </Section>
  );
}
export default LoginPage;
