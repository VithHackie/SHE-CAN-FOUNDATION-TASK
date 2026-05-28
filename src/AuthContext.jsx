import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth, db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [users, setUsers] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const ADMIN_EMAIL = "admin@gmail.com";

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currUser) => {
      try {
        if (currUser) {
          const colRef = collection(db, "messages");
          const authedUsers = await getDocs(colRef);
          setUsers(authedUsers);
          
          if (currUser.email === ADMIN_EMAIL) {
            setIsAdmin(true);
          } else {
            setIsAdmin(false);
          }
        } else {
          setUsers(null);
          setIsAdmin(false);
        }
      } catch (e) {
        console.log(e);
        setUsers(null);
        setIsAdmin(false);
      } finally {
        setLoading(false);
      }
    });
    return unsubscribe;
  }, []);
  
  return (
    <AuthContext.Provider value={{ users, isAdmin, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
