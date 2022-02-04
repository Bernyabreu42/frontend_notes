import { useEffect, useState } from "react"

export default function Register({ handler }) {

  const [showPass, setShowPass] = useState(false)
  const [user, setUser] = useState(null)

  const handlerLogin = (event) => {
    event.preventDefault()
    const form = event.target
    const user = {
      user: form.name.value,
      username: form.username.value,
      email: form.email.value,
      password: form.pass.value
    }
    setUser(user);
  }



  const handleChange = () => {
    setShowPass(!showPass)
  }

  const handlerClick = () => {
    handler(true)
  }

  return (
    <div className="login">
      <form onSubmit={handlerLogin}>
        <h1>Create acount</h1>
        <input type="text" name="name" placeholder="Full name" autoComplete="off" />
        <input type="text" name="username" placeholder="username" autoComplete="off" />
        <input type="text" name="email" placeholder="Correo Electronico" autoComplete="off" />
        <div className="input-pass">
          <input type={showPass ? "text" : 'password'} name="pass" placeholder="******" autoComplete="off" />
          <span className="material-icons" onClick={handleChange}>
            {showPass ? 'visibility' : 'visibility_off'}
          </span>
        </div>
        <button>Login</button>
      </form>
      <span onClick={handlerClick}>Sing in</span>
    </div>
  );
}
