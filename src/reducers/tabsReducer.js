export const TAB_ADD = 'TAB_ADD'

export const updateTabs = (payload) => ({
  type: TAB_ADD,
  payload,
})

const initialState = {
  list: [
    {
      name: 'New cart', // TODO: add translation
    }
  ],
}

export const tabsReducer = (state = initialState, action) => {
  switch(action.type){
    case TAB_ADD:
      return action.payload
    default:
      return state
  }
}
