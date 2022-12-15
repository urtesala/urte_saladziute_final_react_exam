function RegisterPage(props) {
    return (
      <section>
        <h1>Register new account</h1>
        <form>
          <label htmlFor='email'>Your email</label>
          <input type='email' id='email' />
  
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' />
  
          <label htmlFor='password'>Repeat Password</label>
          <input type='password' id='password' />
  
          <button type='button'>Register</button>
          <h3>If you already have an account, please Login here</h3>
        </form>
      </section>
    );
  }
  export default RegisterPage;
  