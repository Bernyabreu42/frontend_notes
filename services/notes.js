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

  const request = axios.post(baseUrl, newObject, config)
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
  const request = axios.get(`${baseUrl}/${id}`)
  return request.then(response => response.data)
}

const deleteNote = () => {
  const request = axios.delete(`${baseUrl}/${id}`)
  return request.then(response => response.data)
}

export default { getAllNote, CreateNote, updateNote, findById, deleteNote, setToken }