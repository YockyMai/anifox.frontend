import * as VKID from '@vkid/sdk'
import { useEffect, useMemo, useRef } from 'react'

export const VkAuthButton = () => {
  const buttonRef = useRef<HTMLDivElement>(null)

  const oneTap = useMemo(() => {
    VKID.Config.init({
      app: 53283763,
      redirectUrl: 'http://localhost/api/auth/vk/callback',
      codeVerifier: 'codeVerifier'
    })

    return new VKID.OneTap()
  }, [])

  useEffect(() => {
    if (buttonRef.current) {
      oneTap.render({
        container: buttonRef.current,
        scheme: VKID.Scheme.LIGHT,
        lang: VKID.Languages.RUS,
        showAlternativeLogin: false
      })
    }
  }, [oneTap, buttonRef])

  return <div id='VkIdSdkOneTap' ref={buttonRef} />
}
