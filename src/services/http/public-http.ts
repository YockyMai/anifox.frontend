import axios from 'axios'

// class PublicHttp {

//   get: () => {

//   }
// }

export const publicHttp = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL
})
