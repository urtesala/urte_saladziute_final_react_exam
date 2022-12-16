import { createContext, useState, useContext } from 'react';

const AuthContext = createContext({
  login({ token, email }) {},
  logout() {},
  isUserLoggedIn: false,
  token: '',
});

AuthContext.displayName = 'Auth-context';

const tokenName = 'firebaseToken';

function AuthContextProvider(props) {
  const tokenFromStorage = localStorage.getItem(tokenName);
  const emailFromStorage = localStorage.getItem('email');
  const [token, setToken] = useState(tokenFromStorage);
  const [emailValue, setEmailValue] = useState(emailFromStorage);
  const [uid, setUid] = useState('');
  const isUserLoggedIn = !!token;

  const login = ({ idToken, email, localId }) => {
    setToken(idToken);
    localStorage.setItem(tokenName, idToken);
    setEmailValue(email);
    localStorage.setItem('email', email);
    setUid(localId);
  };
  const logout = () => {
    setToken('');
    localStorage.removeItem(tokenName);
    localStorage.removeItem('email');
  };

  const contextValue = {
    login,
    logout,
    isUserLoggedIn,
    token,
    email: emailValue,
    uid,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;

//burtai magija oho 
export function useAuthCtx() {
  return useContext(AuthContext);
}