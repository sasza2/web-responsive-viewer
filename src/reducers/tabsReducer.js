import assign from 'lodash/assign'
import cloneDeep from 'lodash/cloneDeep'

import { PREDEFINED_PAGES } from 'consts'

export const TAB_ADD = 'TAB_ADD'
export const TAB_ADD_EMPTY = 'TAB_ADD_EMPTY'
export const TAB_UPDATE_ACTIVE = 'TAB_UPDATE_ACTIVE'
export const TAB_UPDATE_URL = 'TAB_UPDATE_URL'
export const TAB_SELECT = 'TAB_SELECT'
export const DEVICE_UPDATE = 'DEVICE_UPDATE'

let TAB_LAST_ID = 0

export const addEmptyTab = () => ({
  type: TAB_ADD_EMPTY,
})

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

export const selectTab = (payload) => ({
  type: TAB_SELECT,
  payload,
})

const initialState = {
  list: [
    {
      id: TAB_LAST_ID,
      name: 'New cart', // TODO: add translation
      devices: [],
      url: PREDEFINED_PAGES.WELCOME,
    },
  ],
  selected: 0,
}

export const findActiveTab = (tabs) => tabs.list.find(tab => tab.id === tabs.selected)

const findTabById = (tabs, tabId) => tabs.list.find(tab => tab.id === tabId)

const findDevice = (tabs, { tabId, deviceName }) => {
  const tab = findTabById(tabs, tabId)
  const device = tab.devices.find(item => item.type.name === deviceName)
  return device
}

export const tabsReducer = (state = initialState, action) => {
  switch(action.type){
    case TAB_ADD:
      return action.payload
    case TAB_ADD_EMPTY: {
      const nextTabs = cloneDeep(state)
      TAB_LAST_ID += 1
      nextTabs.list.push({
        id: TAB_LAST_ID,
        name: 'New cart',
        devices: [],
        url: PREDEFINED_PAGES.WELCOME,
      })
      nextTabs.selected = TAB_LAST_ID
      return nextTabs
    }
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
    case TAB_SELECT: {
      const nextTabs = cloneDeep(state)
      nextTabs.selected = action.payload.selected
      return nextTabs
    }
    default:
      return state
  }
}
