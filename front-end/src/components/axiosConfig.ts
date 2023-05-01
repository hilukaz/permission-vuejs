import axios from 'axios'

//esse código é feito para reutilização de código, ou seja para que eu não precise mais declarar o header no código

const instance = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
})

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default instance//a partir do momento que o import do axios for instanciado, acontece essa função