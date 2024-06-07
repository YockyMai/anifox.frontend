import { useUnit } from "effector-react"
import React from "react"

import { animeFilterModel } from "~features/anime-filter"

import { getAnimeYears } from "~shared/api"
import { MultiSelect } from "~shared/components"

interface Props {
  inExtraFilter?: boolean
}

export const Years = ({ inExtraFilter }: Props) => {
  const years = useUnit(animeFilterModel.$years)

  const onChange = (values: string[]) => {
    animeFilterModel.setYears({ years: values })
  }

  /*Вызов запроса происходит в сторе чтобы загрузить данные сразу*/
  const { data, pending } = useUnit(getAnimeYears)

  return (
    <div>
      <MultiSelect
        searchable
        color={inExtraFilter ? "slateDark" : undefined}
        label={"Года"}
        placeholder={"Любой"}
        values={years}
        onValuesChange={onChange}
        options={data ?? []}
        isLoading={pending}
      />
    </div>
  )
}
