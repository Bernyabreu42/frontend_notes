import axios from "axios";
const baseUrl = 'http://localhost:3001/api/login'

const login = async credentials => {
  try {
    const request = await axios.post(baseUrl, credentials)
    console.log(request.data);
    return request.data
  } catch (error) {
    console.log(error);
  }
}



export default { login }