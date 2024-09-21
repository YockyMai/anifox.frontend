export const selectOnMenuClose = (uniqueId: string) => {
  const menuEl = document.querySelector(`#${uniqueId} .select__menu`)
  const containerEl = menuEl?.parentElement
  const clonedMenuEl = menuEl?.cloneNode(true) as HTMLDivElement

  if (!clonedMenuEl) return

  clonedMenuEl.classList.add('select__menu_close')
  clonedMenuEl.addEventListener('animationend', () => {
    containerEl?.removeChild(clonedMenuEl)
  })

  containerEl?.appendChild(clonedMenuEl!)
}
