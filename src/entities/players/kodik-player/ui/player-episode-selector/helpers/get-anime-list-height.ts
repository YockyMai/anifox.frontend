export const getAnimeListHeight = (
  episodesAired: number,
  screenHeight: number
) =>
  episodesAired * 96 <= screenHeight ? episodesAired * 96 : screenHeight * 0.8
