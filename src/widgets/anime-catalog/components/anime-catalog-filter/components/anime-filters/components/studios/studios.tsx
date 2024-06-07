import { useUnit } from "effector-react"
import React from "react"

import { animeFilterModel } from "~features/anime-filter"

import { getAnimeStudios } from "~shared/api"
import { Select } from "~shared/components"

type Props = {
  inExtraFilter?: boolean
}

export const Studios = ({ inExtraFilter }: Props) => {
  const { data, pending } = useUnit(getAnimeStudios)
  const studio = useUnit(animeFilterModel.$studio)

  const studioOptions = data
    ? data.map((studio) => ({
        value: studio.name,
        label: studio.name,
      }))
    : []

  return (
    <div>
      <Select
        value={studio || ""}
        onValueChange={(value) =>
          animeFilterModel.setStudio({
            studio: value ? value : null,
          })
        }
        searchable
        isLoading={pending}
        options={studioOptions}
        placeholder={"Любой"}
        label={"Студия"}
        color={inExtraFilter ? "slateDark" : undefined}
      />
    </div>
  )
}
