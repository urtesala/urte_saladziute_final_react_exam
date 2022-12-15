import LoginForm from '../../components/forms/LoginForm';
import { Card } from '../../components/styled/StyledComponents';
import { Section } from './styledLogin';

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
