import { createContext, useState } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Services/firebaseConfig";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);
  

  onAuthStateChanged(auth, (user) => setUsuario(user));

  return (
    <AuthContext.Provider value={{ usuario, setUsuario,

                                }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider


// export const useAuth = () => useContext(AuthContext);
