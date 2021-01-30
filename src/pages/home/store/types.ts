export const SIDEBAR_COLLAPSED = "SIDEBAR_COLLAPSED"
export type HomeState = {
  collapsed: boolean,
  // siderbarWidth: number,
}

export type CollapsedAction = {
  type: string
  collapsed: boolean
}