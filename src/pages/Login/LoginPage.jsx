import { Button, Card, Form } from "../../components/styled/StyledComponents";
import { Section } from "./styledLogin";


function LoginPage(props) {
  return (
    <Section>
      <Card>
      <h1>LOGIN</h1>
      <Form>
        <input type='email' id='email' placeholder='Your email' />

        <input type='password' id='password' placeholder='Your password' />

        <Button>Login</Button>
        <p>
          If you don't have an account, please{' '}
          <a href='/register'>REGISTER </a>
        </p>
      </Form>
      </Card>
    </Section>
     
      
  );
}
export default LoginPage;
