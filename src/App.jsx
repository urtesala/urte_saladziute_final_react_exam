import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Navigation from './components/Layout/Navigation';
import { Wraper } from './components/styled/StyledComponents';
import AddShop from './pages/addShop/AddShop';
import HomePage from './pages/Home/HomePage';
import LoginPage from './pages/Login-Register/LoginPage';
import RegisterPage from './pages/Login-Register/RegisterPage';
import Shops from './pages/shops/Shops';

function App() {
  return (
    <Wraper>
      <Navigation />

      <Switch>
        <Route path={'/add-shop'}>
          <AddShop/>
        </Route>

        <Route path={'/shops'}>
          <Shops/>
        </Route>

        <Route path={'/login'}>
          <LoginPage />
        </Route>

        <Route path={'/register'}>
          <RegisterPage/>
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
