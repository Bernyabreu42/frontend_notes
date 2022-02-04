import axios from "axios";
const baseUrl = 'http://localhost:3001/api/login'


const login = async (credentials) => {

  try {
    const res = await axios.post(baseUrl, credentials)
    console.log(res.data);
    return res.data
  } catch (error) {
    console.log(error);
  }

}



export default { login }