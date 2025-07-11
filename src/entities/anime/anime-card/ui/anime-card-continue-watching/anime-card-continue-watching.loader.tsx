export const AnimeCardContinueWatchingLoader = () => {
  return (
    <div className='relative my-3 items-baseline overflow-hidden rounded bg-white drop-shadow-sm dark:bg-slate-800'>
      <div className='h-[60px] w-full animate-pulse bg-slate-100 dark:bg-slate-700' />
      <div className='p-3'>
        <div className='flex items-center gap-x-2 pt-3'>
          <div className='aspect-[6/7] h-14 animate-pulse rounded bg-slate-100 dark:bg-slate-700' />

          <div className='h-3 w-[50%] animate-pulse rounded bg-slate-100 font-bold dark:bg-slate-700' />
        </div>

        <div className='flex items-center justify-between py-5'>
          <div className='h-5 w-[50%] animate-pulse rounded bg-slate-100 dark:bg-slate-700' />

          <div className='h-5 w-10 rounded bg-slate-100 dark:bg-slate-700' />
        </div>

        <div className='h-8 w-full animate-pulse rounded bg-slate-100 dark:bg-slate-700' />
      </div>

      <div className='h-1.5 w-[30%] animate-pulse bg-slate-100 dark:bg-slate-700' />
    </div>
  )
}
