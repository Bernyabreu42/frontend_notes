import NotNotes from '../components/NotNotes'
import { useState } from 'react'
import { useEffect } from 'react/cjs/react.development'
import axios from 'axios'
import Note from '../components/Note'
export default function Home() {

  const [notes, setNotes] = useState(null)
  const [show, setShow] = useState(false)
  const [error, setError] = useState('')

  useEffect(async () => {

    try {
      const userLs = JSON.parse(localStorage.getItem('user'))

      const { data } = await axios.get('/users')
      data.map(user => {
        if (user.email === userLs.email) {
          setShow(true)
          setNotes(user.notes)

        }
      })
    } catch (error) {
      setError(error)
      setShow(false)
      console.log(error);
    }

  }, [])

  console.log(notes !== null);

  return (
    show
      ? (notes !== null) ? notes.map(note => (
        < Note key={note.id} {...note} />
      )) : null
      : <NotNotes error={error} />
  )
}
