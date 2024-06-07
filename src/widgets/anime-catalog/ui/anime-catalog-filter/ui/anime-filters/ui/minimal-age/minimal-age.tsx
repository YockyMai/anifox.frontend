import { useUnit } from "effector-react"
import React from "react"

import { animeFilterModel } from "~features/anime-filter"

import { AnimeMinimalAge } from "~shared/api"
import { Select } from "~shared/components"

const options = [
  { value: "18", label: "18+" },
  { value: "16", label: "16+" },
  { value: "12", label: "12+" },
  { value: "6", label: "6+" },
  { value: "0", label: "0+" },
]

type Props = {
  inExtraFilter?: boolean
}

export const MinimalAge = ({ inExtraFilter }: Props) => {
  const minimalAge = useUnit(animeFilterModel.$minimalAge)

  return (
    <div>
      <Select
        value={minimalAge ? minimalAge.toString() : ""}
        onValueChange={(value) =>
          animeFilterModel.setMinimalAge({
            minimal_age: value ? (Number(value) as AnimeMinimalAge) : null,
          })
        }
        options={options}
        placeholder={"Любой"}
        label={"Ограничение по возрасту"}
        color={inExtraFilter ? "slateDark" : undefined}
      />
    </div>
  )
}
