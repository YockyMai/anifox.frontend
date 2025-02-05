// this page is needed to load the kodik player via iframe for other apps
import { useSearchParams } from 'react-router'

export const KodikScreen = () => {
  const [params] = useSearchParams()

  const normalizedParams = params.toString().split('src=')[1]

  const kodikSrc = decodeURIComponent(normalizedParams)

  return <iframe className='h-screen w-screen' src={kodikSrc} allowFullScreen />
}
