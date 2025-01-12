import React from 'react'

import { TextWithBreaksProps } from './text-with-breaks.interface'

export const TextWithBreaks = ({
  text,
  separator,
  ...other
}: TextWithBreaksProps) => {
  const sentences = text
    .split(separator)
    .filter((sentence) => sentence.trim() !== '')

  return (
    <p {...other}>
      {sentences.map((sentence, index) => (
        <React.Fragment key={index}>
          {sentence.trim()}
          {separator}
          {index < sentences.length - 1 && <br />}
        </React.Fragment>
      ))}
    </p>
  )
}
