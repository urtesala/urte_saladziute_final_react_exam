import { Route } from 'react-router-dom';
import { useAuthCtx } from './../store/AuthContext';
import NotAuthorised from '../pages/extraPages/NotAuthorized'

function ProtectedRoute({ children, ...restOfProps }) {
  const { isUserLoggedIn } = useAuthCtx();
  return (
    <Route {...restOfProps}>
      {isUserLoggedIn ? children : <NotAuthorised/>}
    </Route>
  );
}
export default ProtectedRoute;
