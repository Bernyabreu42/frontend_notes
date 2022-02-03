import axios from "axios";
const baseUrl = 'http://localhost:3001/api/notes'

const getAllNote = () => {
  const request = axios.get(baseUrl)
  return request.then(({ data }) => data)
}

const CreateNote = (newObject) => {
  const request = axios.post(baseUrl, newObject, token)
  return request.then(response => response.data)
}

const updateNote = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
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

export default { getAllNote, CreateNote, updateNote, findById }