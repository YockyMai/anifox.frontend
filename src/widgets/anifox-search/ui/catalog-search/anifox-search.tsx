import {
  Input,
  Portal,
  UnstyledButton,
  useDebounce,
  useKeyDown
} from '@anifox/ui'
import { IconSearch, IconX } from '@tabler/icons-react'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

import { $anifoxSearch } from '../../store'
import { CatalogSearchResult } from './catalog-search-result/catalog-search-result'

export const CatalogSearch = () => {
  useKeyDown('Escape', () => $anifoxSearch.actions.toggleIsOpened())

  const search = $anifoxSearch.selectors.search()

  const [localSearch, setLocalSearch] = useState(search)

  const debouncedSearch = useDebounce(localSearch, 300)

  useEffect(() => {
    $anifoxSearch.actions.setSearch(debouncedSearch)
  }, [debouncedSearch])

  return (
    <Portal>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className='fixed left-0 top-0 z-50 h-screen w-screen bg-[#1f263199] dark:bg-[#12161ce6]'
      />
      <div className='scrollbar fixed right-0 top-0 z-50 h-screen w-screen overflow-y-auto'>
        <motion.div
          className='mx-auto mt-8 max-w-4xl'
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
        >
          <Input
            placeholder={'Поиск AniFox'}
            icon={<IconSearch />}
            rightIcon={
              <UnstyledButton
                onClick={() => $anifoxSearch.actions.toggleIsOpened()}
              >
                <IconX />
              </UnstyledButton>
            }
            onChange={(e) => setLocalSearch(e.target.value)}
          />
        </motion.div>

        <motion.div
          initial={{ y: -200 }}
          animate={{ y: 0 }}
          exit={{ y: -200 }}
          className='mt-10 px-12 text-slate-900 dark:text-slate-100'
        >
          <CatalogSearchResult />
        </motion.div>
      </div>
    </Portal>
  )
}
