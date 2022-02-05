import { useContext } from "react/cjs/react.development";
import AuthContext from "../context/useContext";
import BotonCreate from "./BotonCreate";

export default function Header() {

  const { validated } = useContext(AuthContext)


  return (
    <header className='header'>
      <div className="container">
        <h1>Notas</h1>
        {validated ? <BotonCreate /> : null}
      </div>
    </header>
  );
}
