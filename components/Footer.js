import { useContext } from "react";
import AuthContext from "../context/useContext";
import BotonCreate from "./BotonCreate";

export default function Footer() {
  const { validated } = useContext(AuthContext)

  return (
    <footer >
      <div className="container d-flex ">
        <h3>
          <a href={'https://github.com/Bernyabreu42'} target='_blanck'>@BernyAbreu42</a>
        </h3>
        {validated ? <BotonCreate /> : null}
      </div>

    </footer >
  );
}
