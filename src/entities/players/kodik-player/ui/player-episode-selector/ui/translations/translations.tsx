import { useUnit } from "effector-react"
import { motion } from "framer-motion"
import React, { useEffect, useState } from "react"
import { BiChevronDown } from "react-icons/all"

import { kodikPlayerHudModel } from "~entities/kodik-player"
import { EpisodeTranslationCard } from "~entities/translation"

import { SoundWave } from "~shared/components"
import { getUserDeviceType } from "~shared/helpers"
import { useHover } from "~shared/hooks"

import { episodeSelectorModel } from "../../model"
import styles from "./styles.module.pcss"
import { listVariants, chevronVariants } from "./variants"

export const Translations = () => {
  const translations = useUnit(episodeSelectorModel.$translations)
  const selectedTranslation = useUnit(episodeSelectorModel.$selectedTranslation)

  const device = getUserDeviceType()
  const { isHovered, hoverProps } = useHover()
  const [isOpened, setIsOpened] = useState(isHovered)

  useEffect(() => {
    if (device === "desktop") {
      setIsOpened(isHovered)
    }
  }, [isHovered])

  useEffect(() => {
    if (isOpened) {
      kodikPlayerHudModel.hudElementInteracted()
    } else {
      kodikPlayerHudModel.hudStoppedInteracting()
    }
  }, [isOpened])

  const toggleTranslationListOpened = () => {
    if (device !== "desktop") setIsOpened((prev) => !prev)
  }

  return (
    <div {...hoverProps} className={styles.translations}>
      <div
        onClick={toggleTranslationListOpened}
        className={styles.selectedTranslation}
      >
        <SoundWave />
        {selectedTranslation ? (
          <p>{selectedTranslation.title}</p>
        ) : (
          <p>Озвучки</p>
        )}
        <motion.div
          variants={chevronVariants}
          animate={isOpened ? "opened" : "closed"}
        >
          <BiChevronDown className={"text-2xl text-white"} />
        </motion.div>
      </div>
      <motion.div
        initial={false}
        variants={listVariants}
        animate={isOpened ? "opened" : "closed"}
      >
        {translations?.map((translation) => (
          <div
            key={translation.id}
            onClick={() => {
              episodeSelectorModel.translationSelected(translation)
            }}
          >
            <EpisodeTranslationCard
              isSelected={translation.id === selectedTranslation?.id}
              translation={translation}
            />
          </div>
        ))}
      </motion.div>
    </div>
  )
}
