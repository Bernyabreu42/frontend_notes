import axios from "axios";
import { createContext, useEffect, useState } from "react";

// create context
const AuthContext = createContext()

// create provider of context
const AuthProvider = ({ children }) => {

  // state
  const [user, setUser] = useState(null)

  useEffect(() => {

    const findUser = async () => {

      try {
        // fetch token in localstorage
        localStorage.getItem('token') || localStorage.setItem('token', null);

        //if there is no register token in localstorage
        if (localStorage.getItem('token') === 'null' && user !== null) {
          //if it exists we pass a value to token
          localStorage.setItem('token', JSON.stringify(user))
        }

      } catch (error) {
        console.log(error);
      }
    }

    if (user) {
      findUser()
    }

  }, [user])

  // variables to return in the context
  const data = { user, setUser }


  return (
    <AuthContext.Provider value={data}>
      {children}
    </AuthContext.Provider>
  )
}


export { AuthProvider }
export default AuthContext



