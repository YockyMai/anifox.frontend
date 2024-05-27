import { useUnit } from "effector-react"
import React from "react"

import { animeFilterModel } from "~features/anime-filter"

import { AnimeRatingMpa } from "~shared/api"
import { Select } from "~shared/components"

const options: { value: AnimeRatingMpa; label: string }[] = [
  { value: "PG", label: "PG" },
  { value: "PG-13", label: "PG-13" },
  { value: "R", label: "R" },
  { value: "R+", label: "R+" },
  { value: "G", label: "G" },
]

type Props = {
  inExtraFilter?: boolean
}

export const RatingMpa = ({ inExtraFilter }: Props) => {
  const rating_mpa = useUnit(animeFilterModel.$ratingMpa)

  return (
    <div>
      <Select
        color={inExtraFilter ? "slateDark" : undefined}
        value={rating_mpa || ""}
        onValueChange={(value) =>
          animeFilterModel.setRatingMpa({
            rating_mpa: value ? (value as AnimeRatingMpa) : null,
          })
        }
        options={options}
        placeholder={"Любой"}
        label={"Возрастной рейтинг"}
      />
    </div>
  )
}
