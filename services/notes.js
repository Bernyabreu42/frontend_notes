import axios from "axios";

let token = null
const setToken = newToken => {
  token = `Bearer ${newToken}`
}


const getAllNote = async () => {
  const request = axios.get('/notes')
  return request.then(({ data }) => data)
}

const CreateNote = (newObject) => {
  const config = {
    headers: {
      Authorization: token
    }
  }

  const request = axios.post('/notes', newObject, config)

  return request.then(response => response.data)
}

const updateNote = (id, newObject) => {
  const config = {
    headers: {
      Authorization: token
    }
  }

  const request = axios.put(`/notes/${id}`, newObject, config)
  return request.then(response => response.data)
}

const findById = (id) => {
  const request = axios.get(`/notes/${id}`)
  return request.then(response => response.data)
}

const deleteNote = (id) => {
  const config = {
    headers: {
      Authorization: token
    }
  }

  const request = axios.delete(`/notes/${id}`, config)
  return request.then(response => response.data)
}

export default { getAllNote, CreateNote, updateNote, findById, deleteNote, setToken }