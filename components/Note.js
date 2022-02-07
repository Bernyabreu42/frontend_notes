import { useEffect, useRef, useState } from "react";
import { useContext } from "react/cjs/react.development";
import noteService from '../services/notes'
import AuthContext from "../context/useContext";
import ActionEdit from "./ActionEdit";
import Actions from "./Actions";


export default function Note({ title, content, date, color, id }) {
  const fecha = new Date(date).toLocaleDateString()
  const { token, created } = useContext(AuthContext)


  const refNote = useRef()

  const [edit, setEdit] = useState(false)
  const [editTitle, setEditTitle] = useState(title)
  const [editContent, setEditContent] = useState(content)
  const [editColor, setEditColor] = useState(color)
  const [cancel, setCancel] = useState(false)
  const [update, setUpdate] = useState(false)
  const [remove, setRemove] = useState(false)

  const modify = {
    title: editTitle,
    content: editContent,
    color: editColor
  }

  const handlerChange = () => {
    if (editTitle !== title || editContent !== content || editColor !== color) {
      setEdit(true)
      setCancel(false)
      setUpdate(true)
    } else {
      setEdit(false)
    }
  }

  useEffect(() => {
    if (update) {
      noteService.updateNote(id, modify)
      setCancel(false)
    };
    if (remove) {
      noteService.deleteNote(id)
      refNote.current.remove()
    };
    handlerChange()
    if (cancel) {
      setEditTitle(title)
      setEditContent(content)
      setEditColor(color)
    }
  }, [editTitle, editContent, editColor, cancel, update, remove, created])

  return (
    <div ref={refNote} className="note" style={{ background: `${editColor}` }}>
      <input type="text" style={{ background: `${editColor}` }} maxLength={17} placeholder="Type a title..." onChange={(e) => setEditTitle(e.target.value)} value={editTitle} />
      <h3>
        <strong> ultima actualizacion: </strong> <span>{fecha}</span>
      </h3>
      <textarea style={{ background: `${editColor}` }} cols="30" maxLength={120} rows="10" placeholder='Type a description' onChange={(e) => setEditContent(e.target.value)} value={editContent} />
      {edit ? < ActionEdit handlerColor={setEditColor} handlerEdit={setEdit} handlerCancel={setCancel} handlerUpdate={setUpdate} /> : <Actions handlerRemove={setRemove} icon={' delete_outline'} show={true} />}
    </div>
  )
}
