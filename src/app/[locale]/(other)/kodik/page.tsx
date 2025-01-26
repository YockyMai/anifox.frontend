// this page is needed to load the kodik player via iframe for other apps

type KodikPageParams = { searchParams: Promise<{ src: string }> }

const createKodikUrlFromSearchParams = (searchParams: {
  src: string
  [key: string]: string
}) => {
  const { src, ...otherParams } = searchParams
  return {
    url: `${src}&${new URLSearchParams(otherParams).toString()}`
  }
}

const Kodik = async (props: KodikPageParams) => {
  const searchParams = await props.searchParams
  const { url } = createKodikUrlFromSearchParams(searchParams)

  return <iframe className='h-full w-full' src={url} allowFullScreen />
}

export default Kodik
