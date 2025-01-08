export const getTabsStyles = (hoverColor?: string, activeTabColor?: string) => {
  return {
    '--hover-color': hoverColor ?? 'rgb(0 0 0 / 0.05)',
    '--active-tab-color': activeTabColor ?? '#fb923c'
  } as React.CSSProperties
}
