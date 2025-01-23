'use client'

// this page is needed to load the kodik player via iframe for other apps

type KodikPageParams = { searchParams: { src: string } }

const createKodikUrlFromSearchParams = (
  searchParams: KodikPageParams['searchParams']
) => {
  const { src, ...otherParams } = searchParams
  return {
    url: `${src}&${new URLSearchParams(otherParams).toString()}`
  }
}

const Kodik = ({ searchParams }: KodikPageParams) => {
  const { url } = createKodikUrlFromSearchParams(searchParams)

  return <iframe className='h-full w-full' src={url} allowFullScreen />
}

export default Kodik
