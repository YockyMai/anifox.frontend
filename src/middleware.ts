import { NextRequest } from 'next/server'

import { ACCESS_TOKEN_KEY } from './services/http/http.const'

export const middleware = (request: NextRequest) => {
  const accessToken = request.cookies.get(ACCESS_TOKEN_KEY)?.value
}
