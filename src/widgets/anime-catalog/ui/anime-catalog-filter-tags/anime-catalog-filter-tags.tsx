import { useStore } from '@anifox/store'
import { useHover, isMobileUserAgent, Badge, UIColors } from '@anifox/ui'
import { IconTags, IconX } from '@tabler/icons-react'
import { AnimatePresence, motion } from 'framer-motion'

import {
  MAP_ANIME_STATUSES_LABEL,
  MAP_ANIME_TYPE_VARIANTS
} from '@/services/api'

import { useAnimeCatalogStores } from '../../context'
import { useIsFilterActive } from '../../store'

export const AnimeCatalogFilterTags = () => {
  const { isHovered, hoverProps } = useHover()
  const isMobile = isMobileUserAgent()

  const { $filter } = useAnimeCatalogStores()

  const {
    genres,
    status,
    season,
    search,
    type,
    years,
    translations,
    studio,
    minimalAge,
    order,
    ratingMpa,
    sort
  } = useStore($filter.store)

  const resetSearchFilter = () => {
    $filter.actions.setSearch('')
  }
  const removeGenreFilter = (id: string) => {
    // animeFilterModel.removeGenre({ genreId: id })
  }
  const removeStatusFilter = () => {
    // animeFilterModel.setStatus({ status: null })
  }
  const removeRatingMpaFilter = () => {
    // animeFilterModel.setRatingMpa({ rating_mpa: null })
  }
  const removeSeasonFilter = () => {
    // animeFilterModel.setSeason({ season: null })
  }

  const removeTypeFilter = () => {
    // animeFilterModel.setType({ type: null })
  }

  const removeMinimalAgeFilter = () => {
    // animeFilterModel.setMinimalAge({ minimal_age: null })
  }

  const removeYearItem = (year: number) => {
    // animeFilterModel.removeYear({ year })
  }

  const removeTranslationItem = (translationId: number) => {
    // animeFilterModel.removeTranslation({ translationId })
  }

  const removeStudioFilter = () => {
    // animeFilterModel.setStudio({ studio: null })
  }

  return (
    <div className='mb-6 flex' {...hoverProps}>
      <div>
        <IconTags size={24} />
      </div>

      <div className='ml-2 flex flex-wrap items-center'>
        {search && (
          <div
            onClick={resetSearchFilter}
            className='mb-2 mr-2 cursor-pointer opacity-90 transition-opacity hover:opacity-100'
          >
            <Badge color={UIColors.RED}>
              <div className='flex items-center break-words'>
                Поиск: {search} <IconX size={18} />
              </div>
            </Badge>
          </div>
        )}
        {ratingMpa && (
          <div
            onClick={removeRatingMpaFilter}
            className='mb-2 mr-2 cursor-pointer opacity-90 transition-opacity hover:opacity-100'
          >
            <Badge className={'bg-orange-300'}>
              <div className='flex items-center break-words'>
                MPA: {ratingMpa} <IconX size={18} />
              </div>
            </Badge>
          </div>
        )}
        {/* {genres.length > 0 && (
          <>
            {genres.map((genre) => (
              <div
                key={genre.id}
                onClick={() => removeGenreFilter(genre.id)}
                className='mr-2 mb-2 cursor-pointer opacity-90 hover:opacity-100 transition-opacity'
              >
                <Badge className={"bg-blue-400"}>
                  <div className='flex items-center break-words'>
                    {genre.name} <GrFormClose />
                  </div>
                </Badge>
              </div>
            ))}
          </>
        )} */}
        {status && (
          <div
            onClick={removeStatusFilter}
            className='mb-2 mr-2 cursor-pointer opacity-90 transition-opacity hover:opacity-100'
          >
            <Badge className={'bg-purple-400'}>
              <div className='flex items-center break-words'>
                {MAP_ANIME_STATUSES_LABEL[status]} <IconX size={18} />
              </div>
            </Badge>
          </div>
        )}
        {season && (
          <div
            onClick={removeSeasonFilter}
            className='mb-2 mr-2 cursor-pointer opacity-90 transition-opacity hover:opacity-100'
          >
            <Badge className={'bg-emerald-400'}>
              <div className='flex items-center break-words'>
                {season}
                <IconX size={18} />
              </div>
            </Badge>
          </div>
        )}
        {type && (
          <div
            onClick={removeTypeFilter}
            className='mb-2 mr-2 cursor-pointer opacity-90 transition-opacity hover:opacity-100'
          >
            <Badge className={'bg-pink-400'}>
              <div className='flex items-center break-words'>
                {MAP_ANIME_TYPE_VARIANTS[type]}
                <IconX size={18} />
              </div>
            </Badge>
          </div>
        )}
        {minimalAge !== null && (
          <div
            onClick={removeMinimalAgeFilter}
            className='mb-2 mr-2 cursor-pointer opacity-90 transition-opacity hover:opacity-100'
          >
            <Badge className={'bg-cyan-500'}>
              <div className='flex items-center break-words'>
                {`${minimalAge}+`}
                <IconX size={18} />
              </div>
            </Badge>
          </div>
        )}
        {years.length > 0 && (
          <>
            {years.map((year) => (
              <div
                key={year}
                onClick={() => removeYearItem(year)}
                className='mb-2 mr-2 cursor-pointer opacity-90 transition-opacity hover:opacity-100'
              >
                <Badge className={'bg-rose-500'}>
                  <div className='flex items-center break-words'>
                    {year} г. <IconX size={18} />
                  </div>
                </Badge>
              </div>
            ))}
          </>
        )}
        {/* {translations.length > 0 && (
          <>
            {translations.map((translation) => (
              <div
                key={translation.id}
                onClick={() => removeTranslationItem(translation.id)}
                className='mr-2 mb-2 cursor-pointer opacity-90 hover:opacity-100 transition-opacity'
              >
                <Badge className={'bg-pink-500'}>
                  <div className='flex items-center break-words'>
                    {translation.title} <IconX size={18} />
                  </div>
                </Badge>
              </div>
            ))}
          </>
        )} */}
        {studio && (
          <div
            onClick={() => removeStudioFilter()}
            className='mb-2 mr-2 cursor-pointer opacity-90 transition-opacity hover:opacity-100'
          >
            <Badge className={'bg-pink-500'}>
              <div className='flex items-center break-words'>
                {studio} <IconX size={18} />
              </div>
            </Badge>
          </div>
        )}

        <AnimatePresence>
          {((isHovered && !isMobile) || isMobile) && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {}}
              className='mb-2 mr-2 cursor-pointer opacity-90 transition-opacity hover:opacity-100'
            >
              <Badge className='bg-slate-600'>
                <div className='flex items-center break-words'>
                  Очистить всё <IconX size={18} />
                </div>
              </Badge>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
