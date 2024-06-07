import { useUnit } from "effector-react"
import React from "react"

import { animeFilterModel } from "~features/anime-filter"

import { getAnimeTranslation } from "~shared/api"
import { MultiSelect } from "~shared/components"

type Props = {
  inExtraFilter?: boolean
}

export const Translations = ({ inExtraFilter }: Props) => {
  const { data, pending } = useUnit(getAnimeTranslation)
  const translations = useUnit(animeFilterModel.$translations)

  const values = translations.map((translation) => translation.id.toString())

  const translationsOptions = data
    ? data.map(({ title, id }) => ({
        value: id.toString(),
        label: title,
      }))
    : null

  const onSelectTranslation = (values: string[]) => {
    if (data) {
      const payload = data
        .filter((translation) => values.includes(translation.id.toString()))
        .map((translation) => ({
          id: translation.id,
          title: translation.title,
          voice: translation.voice,
        }))

      animeFilterModel.setTranslations({ translations: payload })
    }
  }

  return (
    <div>
      <MultiSelect
        searchable
        color={inExtraFilter ? "slateDark" : undefined}
        isLoading={pending}
        label={"Озвучки"}
        placeholder={"Любые"}
        values={values}
        onValuesChange={onSelectTranslation}
        options={translationsOptions || []}
      />
    </div>
  )
}
