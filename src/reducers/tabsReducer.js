import deepClone from 'helpers/deepClone'

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
      const nextTabs = deepClone(state)
      const tab = findActiveTab(nextTabs)
      Object.keys(action.payload).forEach(key => {
        tab[key] = action.payload[tab[key]]
      })
      return nextTabs
    }
    default:
      return state
  }
}
