export const TAB_ADD = 'TAB_ADD'
let TAB_LAST_ID = 0

export const updateTabs = (payload) => ({
  type: TAB_ADD,
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

export const tabsReducer = (state = initialState, action) => {
  switch(action.type){
    case TAB_ADD:
      return action.payload
    default:
      return state
  }
}
