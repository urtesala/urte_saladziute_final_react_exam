import RegisterForm from '../../components/forms/RegisterForm';
import { Card, Section } from '../../components/styled/StyledComponents';

function RegisterPage(props) {
  return (
    <Section>
      <Card>
        <h1>REGISTER</h1>
        <RegisterForm />
      </Card>
    </Section>
  );
}
export default RegisterPage;
