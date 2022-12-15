import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Navigation from './components/Layout/Navigation';
import { Wraper } from './components/styled/StyledComponents';
import HomePage from './pages/Home/HomePage';
import LoginPage from './pages/Login/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <Wraper>
      <Navigation />

      <Switch>
        <Route path={'/login'}>
          <LoginPage />
        </Route>

        <Route path={'/register'}>
          <RegisterPage />
        </Route>

        <Route path={'/home'} exact>
          <Redirect to={'/'} />
        </Route>

        <Route path={'/'} exact>
          <HomePage />
        </Route>
      </Switch>
    </Wraper>
  );
}

export default App;
