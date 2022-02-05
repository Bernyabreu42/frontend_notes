import axios from "axios";

const getAllNote = async () => {
  const request = axios.get('/notes')
  return request.then(({ data }) => data)
}

const CreateNote = (newObject, { token }) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const request = axios.post(baseUrl, newObject, config)
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

export default { getAllNote, CreateNote, updateNote, findById, deleteNote }