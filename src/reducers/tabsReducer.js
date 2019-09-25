import assign from 'lodash/assign'
import cloneDeep from 'lodash/cloneDeep'

import { DEVICE_TYPES } from 'consts'

export const TAB_ADD = 'TAB_ADD'
export const TAB_UPDATE_ACTIVE = 'TAB_UPDATE_ACTIVE'
export const TAB_UPDATE_URL = 'TAB_UPDATE_URL'
export const DEVICE_UPDATE = 'DEVICE_UPDATE'

let TAB_LAST_ID = 0

export const updateTabs = (payload) => ({
  type: TAB_ADD,
  payload,
})

export const updateActiveTab = (payload) => ({
  type: TAB_UPDATE_ACTIVE,
  payload,
})

export const updateDevice = (payload) => ({
  type: DEVICE_UPDATE,
  payload,
})

export const updateUrlTab = (payload) => ({
  type: TAB_UPDATE_URL,
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
      ],
      url: 'welcome',
    }
  ],
  selected: TAB_LAST_ID,
}

export const findActiveTab = (tabs) => tabs.list.find(tab => tab.id === tabs.selected)

const findTabById = (tabs, tabId) => tabs.list.find(tab => tab.id === tabId)

const findDevice = (tabs, { tabId, deviceName }) => {
  const tab = findTabById(tabs, tabId)
  const device = tab.devices.find(device => device.type.name === deviceName)
  return device
}

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
    case DEVICE_UPDATE: {
      const nextTabs = cloneDeep(state)
      const device = findDevice(nextTabs, { tabId: action.payload.tabId, deviceName: action.payload.deviceName })
      assign(device, action.payload.device)
      return nextTabs
    }
    case TAB_UPDATE_URL: {
      const nextTabs = cloneDeep(state)
      const tab = findActiveTab(nextTabs)
      tab.devices = tab.devices.map(device => ({
        ...device,
        loaded: false,
      }))
      tab.url = action.payload.url
      return nextTabs
    }
    default:
      return state
  }
}
