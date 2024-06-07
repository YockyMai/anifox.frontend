import { useUnit } from "effector-react"
import React from "react"

import { animeFilterModel } from "~features/anime-filter"

import { AnimeSeasons } from "~shared/api"
import { Select } from "~shared/components"

const options: { value: AnimeSeasons; label: string }[] = [
  { value: "Fall", label: "Осень" },
  { value: "Spring", label: "Весна" },
  { value: "Winter", label: "Зима" },
  { value: "Summer", label: "Лето" },
]

type Props = {
  inExtraFilter?: boolean
}

export const Season = ({ inExtraFilter }: Props) => {
  const season = useUnit(animeFilterModel.$season)

  return (
    <div>
      <Select
        value={season || ""}
        onValueChange={(value) =>
          animeFilterModel.setSeason({
            season: value ? (value as AnimeSeasons) : null,
          })
        }
        options={options}
        placeholder={"Любой"}
        label={"Сезон"}
        color={inExtraFilter ? "slateDark" : undefined}
      />
    </div>
  )
}
