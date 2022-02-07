import axios from "axios";
import { createContext, useEffect, useState } from "react";
import noteService from '../services/notes'

// create context
const AuthContext = createContext()

// create provider of context
const AuthProvider = ({ children }) => {

  // state
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)
  const [validated, setValidated] = useState(false)
  const [created, setCreated] = useState(false)

  useEffect(() => {

    const findUser = async () => {
      try {
        // fetch token in localstorage
        localStorage.getItem('token') || localStorage.setItem('token', null);
        localStorage.getItem('user') || localStorage.setItem('user', null);

        //if there is no register token in localstorage
        if (localStorage.getItem('token') === 'null' && token !== null) {
          //if it exists we pass a value to token
          localStorage.setItem('token', token)
          setValidated(true)
        }

        if (user !== null) {
          localStorage.setItem('user', JSON.stringify(user))
        }

      } catch (error) {
        console.log(error);
        setValidated(false)
      }
    }
    if (token) {
      findUser()
      setValidated(true)
      noteService.setToken(token)
    }

  }, [token])


  // variables to return in the context
  const data = { user, setUser, token, setToken, validated, setValidated, created, setCreated }


  return (
    <AuthContext.Provider value={data}>
      {children}
    </AuthContext.Provider>
  )
}


export { AuthProvider }
export default AuthContext



