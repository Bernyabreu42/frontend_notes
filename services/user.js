import axios from "axios";

const CreateUser = (newObject) => {
  const request = axios.post('/users', newObject)
  return request.then(response => response.data)
}

export default { CreateUser }