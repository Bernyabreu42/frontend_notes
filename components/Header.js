import { useEffect, useState } from "react";
import { useContext } from "react/cjs/react.development";
import AuthContext from "../context/useContext";

export default function Header() {

  const { validated } = useContext(AuthContext)
  const [user, setUser] = useState()
  const [logout, setLogout] = useState(false)

  useEffect(() => {

    if (logout) {
      window.localStorage.removeItem('token')
      window.localStorage.removeItem('user')
      window.location.reload()
    }

    if (JSON.parse(localStorage.getItem('user')) !== null) {
      const { name } = JSON.parse(localStorage.getItem('user'))
      setUser(name);
    }
  }, [validated, logout])

  return (
    <header className='header'>
      <div className="container">
        <h1>Notes</h1>
        <div className="f-between">
          {validated ? <span>Welcome {user}</span> : null}
          {validated ? <span style={{ cursor: "pointer" }} className="material-icons" onClick={() => setLogout(true)}>logout</span> : null}
        </div>
      </div>
    </header >
  );
}
