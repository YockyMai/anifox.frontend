import cloneDeep from 'lodash.clonedeep'

import { DEFAULT_PLAYER_LINK_PARAMS } from './get-player-link-from-params.const'
import { PlayerParams } from './get-player-link-from-params.interface'

export const getPlayerLinkFromParams = (
  playerLink: string,
  params?: PlayerParams
) => {
  const normalizedParams = cloneDeep(params ?? DEFAULT_PLAYER_LINK_PARAMS)

  // set default params
  if (normalizedParams.only_episode === undefined) {
    normalizedParams.only_episode = true
  }
  if (normalizedParams.translations === undefined) {
    normalizedParams.translations = false
  }
  if (!normalizedParams.start_from === undefined) {
    normalizedParams.start_from = 0
  }

  const paramsCount = Object.getOwnPropertyNames(params).length

  const paramsArray: { key: string; value: string }[] = []

  for (const [key, value] of Object.entries(normalizedParams)) {
    paramsArray.push({ key, value: value.toString() })
  }

  const paramsString = paramsArray
    .map((param) => `${param.key}=${param.value}`)
    .join('&')

  if (paramsCount === 0) return playerLink

  return `${playerLink}${playerLink.includes('?') ? '&' : '?'}${paramsString}`
}
