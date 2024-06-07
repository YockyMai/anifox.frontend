import { useUnit } from "effector-react"
import React from "react"

import { animeFilterModel } from "~features/anime-filter"

import { AnimeStatuses } from "~shared/api"
import { Select } from "~shared/components"

const options: { value: AnimeStatuses; label: string }[] = [
  {
    value: "Released",
    label: "Выпущен",
  },
  {
    value: "Ongoing",
    label: "Онгоинг",
  },
]

type Props = {
  inExtraFilter?: boolean
}

export const Status = ({ inExtraFilter }: Props) => {
  const status = useUnit(animeFilterModel.$status)
  return (
    <div>
      <Select
        value={status || ""}
        onValueChange={(value) =>
          animeFilterModel.setStatus({
            status: value ? (value as AnimeStatuses) : null,
          })
        }
        options={options}
        label={"Статус"}
        placeholder={"Любой"}
        color={inExtraFilter ? "slateDark" : undefined}
      />
    </div>
  )
}
