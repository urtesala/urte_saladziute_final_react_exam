
import { Button, Card, Form } from "../components/styled/StyledComponents";
import { Section } from './Login/styledLogin';

function RegisterPage(props) {
  return (
    <Section>
      <Card>
        <h1>REGISTER</h1>
        <Form>
          <input type='email' id='email' placeholder='Your email' />

          <input type='password' id='password' placeholder='Your password' />
          <input
            type='password'
            id='repPassword'
            placeholder='Repeat password'
          />

          <Button>Login</Button>
          <p>
            If you already have an account, please <a href='/login'>LOGIN </a>
          </p>
        </Form>
      </Card>
    </Section>
  );
}
export default RegisterPage;
