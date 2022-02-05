import { useContext } from "react/cjs/react.development";
import AuthContext from "../context/useContext";
import Actions from "./Actions";

export default function Note({ title, content, date }) {
  const fecha = new Date(date).toLocaleDateString()
  const { token } = useContext(AuthContext)

  return token ? (
    <div className="note">
      <input type="text" maxLength={17} placeholder="Type a title..." defaultValue={title} />
      <h3>
        <strong> ultima actualizacion: </strong>
        <span>{fecha}</span>
      </h3>
      <textarea cols="30" maxLength={120} rows="10" placeholder='Type a description' defaultValue={content} />
      <Actions />
    </div>
  )
    : null
}
