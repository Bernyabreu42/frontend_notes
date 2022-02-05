import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react"
import AuthContext from "../context/useContext";
import Login from "./Login";
import Register from "./Register";

export default function ShowLoginOrRegister() {

  const { token, setToken, validated } = useContext(AuthContext)
  const [showOr, setShowOr] = useState(true)

  const router = useRouter()

  useEffect(async () => {
    const sendToken = localStorage.getItem('token')
    setToken(sendToken);

  }, [token])



  return showOr
    ? <Login handler={setShowOr} />
    : <Register handler={setShowOr} />


}
