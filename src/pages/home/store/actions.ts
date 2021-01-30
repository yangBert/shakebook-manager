import { CollapsedAction, SIDEBAR_COLLAPSED } from "./types"

export function setCollapsed(collapsed: boolean) {
  const action: CollapsedAction = {
    type: SIDEBAR_COLLAPSED,
    collapsed,
  }

  return action
}