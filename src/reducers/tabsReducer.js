import assign from 'lodash/assign'
import cloneDeep from 'lodash/cloneDeep'

import { PREDEFINED_PAGES, PREDEFINED_PAGES_LIST } from 'consts'
import { DEVICES_UPDATE } from './devicesReducer'

export const TAB_ADD = 'TAB_ADD'
export const TAB_REMOVE = 'TAB_REMOVE'
export const TAB_ADD_EMPTY = 'TAB_ADD_EMPTY'
export const TAB_UPDATE_ACTIVE = 'TAB_UPDATE_ACTIVE'
export const TAB_UPDATE_URL = 'TAB_UPDATE_URL'
export const TAB_SELECT = 'TAB_SELECT'
export const TAB_UPDATE_LOADER = 'TAB_UPDATE_LOADER'
export const TAB_OPEN_DEVICES = 'TAB_OPEN_DEVICES'

let TAB_LAST_ID = 0

export const addEmptyTab = () => ({
  type: TAB_ADD_EMPTY,
})

export const removeTab = (payload) => ({
  type: TAB_REMOVE,
  payload,
})

export const updateTabs = (payload) => ({
  type: TAB_ADD,
  payload,
})

export const updateActiveTab = (payload) => ({
  type: TAB_UPDATE_ACTIVE,
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

export const updateTabLoader = (payload) => ({
  type: TAB_UPDATE_LOADER,
  payload,
})

export const openDevices = () => ({
  type: TAB_OPEN_DEVICES,
})

const initialState = {
  list: [
    {
      id: TAB_LAST_ID,
      name: 'Welcome', // TODO: add translation
      url: PREDEFINED_PAGES.WELCOME,
      loaded: 0, // Loaded WebViews
      about: true,
    },
    {
      id: ++TAB_LAST_ID, // eslint-disable-line no-plusplus
      name: 'Select devices',
      url: PREDEFINED_PAGES.DEVICES,
      loaded: 0,
      about: true,
    }
  ],
  selected: 0,
}

export const findActiveTab = (tabs) => tabs.list.find(tab => tab.id === tabs.selected)

const findTabIndexById = (tabs, tabId) => tabs.list.findIndex(tab => tab.id === tabId)

const findTabById = (tabs, tabId) => tabs.list.find(tab => tab.id === tabId)

export const tabsReducer = (state = initialState, action) => {
  switch(action.type){
    case TAB_ADD:
      return action.payload
    case TAB_ADD_EMPTY: {
      const nextTabs = cloneDeep(state)
      TAB_LAST_ID += 1
      nextTabs.list.push({
        id: TAB_LAST_ID,
        name: 'Welcome', // TODO: translation
        loaded: 0,
        url: PREDEFINED_PAGES.WELCOME,
        about: true,
      })
      nextTabs.selected = TAB_LAST_ID
      return nextTabs
    }
    case TAB_OPEN_DEVICES: {
      const nextTabs = cloneDeep(state)
      TAB_LAST_ID += 1
      nextTabs.list.push({
        id: TAB_LAST_ID,
        name: 'Select devices', // TODO: translation
        loaded: 0,
        url: PREDEFINED_PAGES.DEVICES,
        about: true,
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
    case TAB_UPDATE_URL: {
      const nextTabs = cloneDeep(state)
      const tab = findActiveTab(nextTabs)
      tab.url = action.payload.url
      tab.about = PREDEFINED_PAGES_LIST.includes(tab.url)
      tab.loaded = 0 // Loaded WebViews
      return nextTabs
    }
    case TAB_SELECT: {
      const nextTabs = cloneDeep(state)
      nextTabs.selected = action.payload.selected
      return nextTabs
    }
    case TAB_REMOVE: {
      // There need to be at least one tab
      if (state.list.length < 2) return state
      const nextTabs = cloneDeep(state)
      const tabIndex = findTabIndexById(nextTabs, action.payload.tabId)
      const tab = nextTabs.list[tabIndex]
      // Remove tab from array
      nextTabs.list.splice(tabIndex, 1)
      // If removed tab is current tab
      if (tab.id === nextTabs.selected) nextTabs.selected = nextTabs.list[0].id
      return nextTabs
    }
    case TAB_UPDATE_LOADER: {
      const nextTabs = cloneDeep(state)
      const tab = findTabById(nextTabs, action.payload.tabId)
      tab.loaded += 1 // Increase loaded WebViews count
      return nextTabs
    }
    case DEVICES_UPDATE: {
      const nextTabs = cloneDeep(state)
      nextTabs.list = nextTabs.list.map(tab => ({
        ...tab,
        loaded: 0,
      }))
      return nextTabs
    }
    default:
      return state
  }
}
