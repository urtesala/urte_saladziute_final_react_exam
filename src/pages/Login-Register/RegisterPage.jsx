
import RegisterForm from "../../components/forms/RegisterForm";
import { Button, Card, Form } from "../../components/styled/StyledComponents";
import { Section } from './styledLogin';

function RegisterPage(props) {
  return (
    <Section>
      <Card>
        <h1>REGISTER</h1>
        <RegisterForm/>
      </Card>
    </Section>
  );
}
export default RegisterPage;
