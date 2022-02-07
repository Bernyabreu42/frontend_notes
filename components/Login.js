import axios from "axios"
import { useContext, useEffect, useRef, useState } from "react"
import AuthContext from "../context/useContext"

export default function Login({ handler }) {

  // context
  const { setUser, setToken } = useContext(AuthContext)

  const refForm = useRef()

  // state
  const [showPass, setShowPass] = useState(false)
  const [error, setError] = useState(false)
  const [data, setData] = useState({
    email: '',
    password: ''
  })

  // function hanler
  const handlerClick = () => handler(false)
  const handleShowPassword = () => setShowPass(!showPass)

  const handleChange = (event) => setData({
    ...data,
    [event.target.name]: event.target.value
  })

  const handlerLogin = async (event) => {
    event.preventDefault()
    login()
  }

  useEffect(() => {
    const correo = localStorage.getItem('correo')
    refForm.current.email.value = correo
    setData({ email: correo })
  }, [])



  const login = async () => {

    try {
      const obj = {
        email: data.email.toLowerCase(),
        password: data.password.toLowerCase()
      }
      const res = await axios.post('/login', obj)
      if (res !== null) {
        setUser(res.data)
        setToken(res.data.token);

        setData({
          email: '',
          password: ''
        })
      }

    } catch (error) {

      setError(true);

      // close alert after 5 seconds
      setTimeout(() => {
        setError(false);
      }, 5000);

    }
  }




  return (
    <div className="login">

      <form ref={refForm} onSubmit={handlerLogin}>
        <h1>Sing in</h1>
        {
          error ? <label className="error">The email address or password is incorrect</label> : ''
        }
        <input
          type="email"
          name="email"
          placeholder="Correo Electronico"
          autoComplete="off"
          value={data.email}
          onChange={handleChange}
          required
        />
        <div className="input-pass">
          <input
            value={data.password}
            type={showPass ? "text" : 'password'}
            name="password" placeholder="******"
            autoComplete="off"
            onChange={handleChange}
            required
          />
          <span
            className="material-icons"
            onClick={handleShowPassword}>
            {showPass ? 'visibility' : 'visibility_off'}
          </span>
        </div>

        <button>Login</button>
      </form>

      <span onClick={handlerClick}>Create account</span>
    </div>
  );
}
