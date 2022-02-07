import { useContext } from "react";
import AuthContext from "../context/useContext";

export default function BotonCreate() {

  const { created, setCreated } = useContext(AuthContext)

  return (
    <>
      <button className="btn_Create" onClick={() => setCreated(!created)}>
        <span className="material-icons" >
          {created ? 'close' : 'add'}
        </span>
      </button>
    </>
  );
}
