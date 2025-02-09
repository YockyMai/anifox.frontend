import clsx from 'clsx'
import React, { memo, ReactNode } from 'react'

import { TableProps } from './table.interface'

const Table = <T extends Record<string, ReactNode>>({
  columns,
  rows,
  maxHeight,
  rowHeight
}: TableProps<T>) => {
  return (
    <table className='w-full overflow-hidden rounded bg-slate-50 dark:bg-slate-900'>
      <thead className='bg-slate-800 text-slate-200'>
        <tr className='overflow-hidden rounded-t text-left'>
          {Object.keys(columns).map((key) => (
            <th className='px-4 py-2' key={key}>
              {columns[key as keyof T]}
            </th>
          ))}
        </tr>
      </thead>
      <tbody style={{ maxHeight }} className='scrollbar overflow-auto'>
        {rows.map((row, index) => (
          <tr
            key={index}
            className={clsx(
              (index + 1) % 2 === 0 && 'bg-slate-700/10 dark:bg-slate-500/10'
            )}
          >
            {Object.keys(columns).map((key) => (
              <td className='px-4 py-2' key={key}>
                {row[key as keyof T]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default memo(Table)
