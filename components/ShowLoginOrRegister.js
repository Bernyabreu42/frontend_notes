import axios from "axios";
import { useContext, useEffect, useState } from "react"
import AuthContext from "../context/useContext";
import Login from "./Login";
import Register from "./Register";

export default function ShowLoginOrRegister() {


  const [login, setLogin] = useState(true)
  const [auth, setAuth] = useState(null)

  useEffect(async () => {

    const user = JSON.parse(localStorage.getItem('token'))
    console.log(user);
    const res = await axios.get('/users')
    res.data.map(usuario => {
      if (usuario.email === user.email) {
        setAuth(user)
      }
    })


  }, [])




  return auth === null ? login
    ? <Login handler={setLogin} />
    : <Register handler={setLogin} />
    : null



}
