import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  Observable
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { onError } from '@apollo/client/link/error'

import { COOKIES } from '@/common/const'

import { pageBasedPaginationPolicy } from '../policies/page-based-pagination.policie'

// Создаем http link
const httpLink = createHttpLink({
  uri: import.meta.env.VITE_PUBLIC_GRAPHQL_API_URL
})

// Функция для обновления токена
// const refreshAuthToken = async () => {
//   const refreshToken = localStorage.getItem(COOKIES.REFRESH_TOKEN_KEY)

//   try {
//     const response = await fetch('YOUR_REFRESH_TOKEN_ENDPOINT', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ refreshToken })
//     })

//     const { accessToken, refreshToken: newRefreshToken } = await response.json()

//     localStorage.setItem('token', accessToken)
//     localStorage.setItem('refreshToken', newRefreshToken)

//     return accessToken
//   } catch (error) {
//     // Обработка ошибки (например, logout при невалидном refresh token)
//     console.error('Error refreshing token:', error)
//     localStorage.clear()
//     window.location.href = '/login'
//     return null
//   }
// }

// Middleware для установки заголовков
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem(COOKIES.ACCESS_TOKEN_KEY)

  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : ''
    }
  }
})

// Обработка ошибок и обновление токена
const errorLink = onError(({ graphQLErrors, operation, forward }) => {
  // if (graphQLErrors) {
  //   for (let err of graphQLErrors) {
  //     if (err.extensions?.code === 'UNAUTHENTICATED') {
  //       return new Observable((observer) => {
  //         refreshAuthToken()
  //           .then((newToken) => {
  //             if (!newToken) {
  //               observer.error(new Error('Unable to refresh token'))
  //               return
  //             }
  //             const oldHeaders = operation.getContext().headers
  //             operation.setContext({
  //               headers: {
  //                 ...oldHeaders,
  //                 Authorization: `Bearer ${newToken}`
  //               }
  //             })
  //             // Повторяем запрос
  //             const subscriber = forward(operation).subscribe({
  //               next: observer.next.bind(observer),
  //               error: observer.error.bind(observer),
  //               complete: observer.complete.bind(observer)
  //             })
  //             return () => subscriber.unsubscribe()
  //           })
  //           .catch((error) => observer.error(error))
  //       })
  //     }
  //   }
  // }
})

export const client = new ApolloClient({
  link: errorLink.concat(authLink).concat(httpLink),
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          animes: {
            keyArgs: [
              'genres',
              'minimalAge',
              'order',
              'ratingMpa',
              'search',
              'season',
              'sort',
              'status',
              'studios',
              'translations',
              'type',
              'years'
            ],
            ...pageBasedPaginationPolicy
          },
          favoriteCharacters: {
            keyArgs: ['userId'],
            ...pageBasedPaginationPolicy
          },
          episodes: {
            keyArgs: ['animeUrl'],
            ...pageBasedPaginationPolicy
          },
          friendships: {
            keyArgs: ['userId', 'status', 'search'],
            ...pageBasedPaginationPolicy
          }
        }
      }
    }
  })
})
