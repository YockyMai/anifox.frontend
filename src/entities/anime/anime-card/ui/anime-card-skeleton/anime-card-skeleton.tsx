import './anime-card-skeleton.css'

export const AnimeCardSkeleton = () => {
  return (
    <div className='anime-card-skeleton'>
      <div className='anime-card-skeleton__container'>
        <div className='anime-card-skeleton__image-loader' />
      </div>
      <div className='anime-card-skeleton__title-loader'>
        <div />
      </div>
    </div>
  )
}
