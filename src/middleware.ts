import { NextRequest } from 'next/server'

import { COOKIES } from './common/const/cookies'

export const middleware = (request: NextRequest) => {
  const accessToken = request.cookies.get(COOKIES.ACCESS_TOKEN_KEY)?.value
}
