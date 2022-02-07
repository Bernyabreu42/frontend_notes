import axios from "axios"
import { useEffect, useRef, useState } from "react"
import userService from '../services/user'

export default function Register({ handler }) {

  const refForm = useRef()
  const [showPass, setShowPass] = useState(false)
  const [login, setLogin] = useState(false)
  const [error, setError] = useState('')
  const [user, setUser] = useState({
    email: "",
    username: "",
    name: "",
    password: ""
  })

  const handerInputChange = (e) => {
    setUser({
      ...user, [e.target.name]: e.target.value
    })
  }


  const handlerLogin = async (event) => {
    event.preventDefault()


    if (user.email !== "" && user.username !== "" && user.name !== "" && user.password !== "") {
      const consulta = await userService.CreateUser(user)
      if (consulta.error) {
        setError(consulta.error)
        refForm.current.email.value = ""
        refForm.current.email.focus()
        refForm.current.email.style.border = "1px solid red"
        setTimeout(() => {
          setError('')
        }, 3000)
      } else {
        setLogin(true)
        handler(true)
      }
    }
  }

  useEffect(() => {
    localStorage.setItem('correo', refForm.current.email.value)
  }, [login])


  const handleChange = () => {
    setShowPass(!showPass)
  }



  return (
    <div className="login">
      <form ref={refForm} onSubmit={handlerLogin}>

        <h1>Create acount</h1>
        {
          error ? <label className="error">{error}</label> : ''
        }
        <input type="text" onChange={handerInputChange} name="name" placeholder="Full name" autoComplete="off" required />

        <input type="text" onChange={handerInputChange} name="username" placeholder="username" autoComplete="off" required />

        <input type="email" onChange={handerInputChange} name="email" placeholder="Correo Electronico" autoComplete="off" required />

        <div className="input-pass">

          <input onChange={handerInputChange} type={showPass ? "text" : 'password'} name="password" placeholder="******" autoComplete="off" required />

          <span className="material-icons" onClick={handleChange}>
            {showPass ? 'visibility' : 'visibility_off'}
          </span>

        </div>

        <button type="submit">Crear</button>

      </form>

      <span onClick={() => handler(true)}>Sing in</span>

    </div>
  );
}
