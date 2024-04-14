import axios from 'axios'

import { config } from '@/config'

export const publicHttp = axios.create({
  baseURL: config.API_URL
})
