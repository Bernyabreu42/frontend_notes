import axios from "axios";


const login = async (credentials) => {

  try {
    const res = await axios.post('/login', credentials)
    console.log(res.data);
    return res.data
  } catch (error) {
    console.log(error);
  }

}



export default { login }