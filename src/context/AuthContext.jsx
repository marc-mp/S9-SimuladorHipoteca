import { createContext, useState, useEffect  } from 'react';
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "../Services/firebaseConfig";
import { getAuth } from 'firebase/auth';
import appFirebase from '../Services/firebaseConfig';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);
  const auth = getAuth(appFirebase);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
        setUsuario(user);
    });

    return () => unsubscribe();
}, [auth]);
  

  // onAuthStateChanged(auth, (user) => setUsuario(user));

  return (
    <AuthContext.Provider value={{ usuario, setUsuario,

                                }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider


// export const useAuth = () => useContext(AuthContext);
