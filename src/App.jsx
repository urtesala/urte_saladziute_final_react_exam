import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Navigation from './components/Layout/Navigation';
import ProtectedRoute from './components/ProtectedRoute';
import { Wraper } from './components/styled/StyledComponents';
import AddShop from './pages/addShop/AddShop';
import HomePage from './pages/Home/HomePage';
import LoginPage from './pages/Login-Register/LoginPage';
import RegisterPage from './pages/Login-Register/RegisterPage';
import Shops from './pages/shops/Shops';
import { useAuthCtx } from './store/AuthContext';
import PageNotFound from './pages/extraPages/PageNotFound';

function App() {
  return (
    <Wraper>
      <Navigation />
      <Switch>
        <ProtectedRoute path={'/add-shop'}>
          <AddShop />
        </ProtectedRoute>

        <ProtectedRoute path={'/shops'}>
          <Shops />
        </ProtectedRoute>

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

        <Route path={'*'}>
          <PageNotFound />
        </Route>
      </Switch>
    </Wraper>
  );
}

export default App;
