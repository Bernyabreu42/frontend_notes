
import { createContext, useEffect, useState } from "react";


const AuthContext = createContext()

const AuthProvider = ({ children }) => {

  let authToken = ''

  useEffect(() => {
    authToken = localStorage.getItem('token') || null
  }, [])


  const [auth, setAuth] = useState('')
  const [token, setToken] = useState(authToken)



  const handleAuth = (e) => {
    auth
      ? setAuth(null)
      : setAuth(null)
  }
  const data = { auth, handleAuth, token, setToken }

  return (
    <AuthContext.Provider value={data}>
      {children}
    </AuthContext.Provider>
  )
}
export { AuthProvider }
export default AuthContext



