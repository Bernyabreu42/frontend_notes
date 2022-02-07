import { useContext, useState } from "react";
import AuthContext from "../context/useContext";
import Actions from "./Actions";
import noteService from '../services/notes'

export default function CreateNote() {

  const { created, setCreated } = useContext(AuthContext)
  const [data, setData] = useState({
    title: "",
    content: "",
    color: ""
  })

  const handlerLogin = (e) => {
    e.preventDefault()

    const createNote = noteService.CreateNote(data)
    console.log({ createNote })
    setCreated(false)
  }

  const handlerInputChange = (e) => {
    setData({
      ...data, [e.target.name]: e.target.value
    })
  }

  return (
    <form onSubmit={handlerLogin} className="note" >
      <input type="text" maxLength={17} name='title' onChange={handlerInputChange} placeholder="Type a title..." />
      <textarea cols="30" maxLength={120} name='content' onChange={handlerInputChange} rows="10" placeholder='Type a description' />
      <div className="d-flex">
        <Actions icon={'close'} />
        <input type='text' placeholder="#fce or red" name='color' onChange={handlerInputChange} maxLength={11} style={{ textAlign: "center", fontSize: "14px" }} />
        <button className="material-icons btn-material">done</button>
      </div>
    </form>
  );
}
