import assign from 'lodash/assign'
import cloneDeep from 'lodash/cloneDeep'

import { DEVICE_TYPES } from 'consts'

export const TAB_ADD = 'TAB_ADD'
export const TAB_UPDATE_ACTIVE = 'TAB_UPDATE_ACTIVE'

let TAB_LAST_ID = 0

export const updateTabs = (payload) => ({
  type: TAB_ADD,
  payload,
})

export const updateActiveTab = (payload) => ({
  type: TAB_UPDATE_ACTIVE,
  payload,
})

const initialState = {
  list: [
    {
      id: TAB_LAST_ID,
      name: 'New cart', // TODO: add translation
      devices: [
        {
          type: DEVICE_TYPES.IPHONE_3GS,
        },
        {
          type: DEVICE_TYPES.IPHONE_4,
        }
      ]
    }
  ],
  selected: TAB_LAST_ID,
}

const findActiveTab = (tabs) => tabs.list.find(tab => tab.id === tabs.selected)

export const tabsReducer = (state = initialState, action) => {
  switch(action.type){
    case TAB_ADD:
      return action.payload
    case TAB_UPDATE_ACTIVE: {
      const nextTabs = cloneDeep(state)
      const tab = findActiveTab(nextTabs)
      assign(tab, action.payload)
      return nextTabs
    }
    default:
      return state
  }
}
