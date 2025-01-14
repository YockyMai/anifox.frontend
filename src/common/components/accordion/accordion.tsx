import * as ReactAccordion from '@radix-ui/react-accordion'
import { IconChevronDown } from '@tabler/icons-react'
import clsx from 'clsx'
import React, { ForwardedRef, forwardRef, memo } from 'react'

import { UIColors } from '@/common/types/ui-colors'

import { ACCORDION_TYPE } from './accordion.const'
import './accordion.css'
import { AccordionProps } from './accordion.interface'

const Accordion = (
  {
    items,
    className,
    type = ACCORDION_TYPE.SINGLE,
    defaultValue,
    ...other
  }: AccordionProps,
  ref: ForwardedRef<HTMLDivElement>
) => {
  return (
    <ReactAccordion.Root
      ref={ref}
      className={clsx('accordion', className)}
      type={type as 'multiple'}
      defaultValue={defaultValue as string[]}
      {...other}
    >
      {items.map(({ id, trigger, content, color = UIColors.ORANGE }) => (
        <ReactAccordion.Item
          key={id}
          className={clsx('accordion__item', `accordion__item_${color}`)}
          value={id}
        >
          <span className='accordion__line' />
          <ReactAccordion.Header className='accordion__header'>
            <ReactAccordion.Trigger className='accordion__trigger'>
              {trigger}

              <IconChevronDown className='accordion__chevron' aria-hidden />
            </ReactAccordion.Trigger>
          </ReactAccordion.Header>
          <ReactAccordion.Content className='accordion__content'>
            {content}
          </ReactAccordion.Content>
        </ReactAccordion.Item>
      ))}
    </ReactAccordion.Root>
  )
}

export default memo(forwardRef(Accordion))
