export const getWeekDays = (currentDate: Date) => {
  const week = []

  currentDate.setDate(currentDate.getDate() - currentDate.getDay() + 1)

  for (let i = 0; i < 7; i++) {
    week.push(new Date(currentDate))
    currentDate.setDate(currentDate.getDate() + 1)
  }

  return week
}
