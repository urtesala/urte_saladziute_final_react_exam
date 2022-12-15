function LoginPage(props) {
  return (
    <section>
      <h1>Login</h1>
      <form>
        <label htmlFor='email'>Your email</label>
        <input type='email' id='email' />

        <label htmlFor='password'>Your Password</label>
        <input type='password' id='password' />

        <button type='button'>Login</button>
        <h3>If you don't have an account, please Register here</h3>
      </form>
    </section>
  );
}
export default LoginPage;
