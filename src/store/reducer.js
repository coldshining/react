import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_ITEM_VALUE, GET_LIST_DATA } from './actionTypes.js'

const defaultState = {
   inputValue: '',
   list: []

}
// reducer 可以接收state, 但绝不能修改state
export default (state = defaultState, action) => {
   if (action.type === CHANGE_INPUT_VALUE){
      const newState = JSON.parse(JSON.stringify(state))
      newState.inputValue = action.value
      return newState
   }
   if (action.type === ADD_TODO_ITEM){
      const newState = JSON.parse(JSON.stringify(state))
      newState.list.push(newState.inputValue)
      newState.inputValue  = ''
      return newState
   }
   if(action.type === DELETE_ITEM_VALUE){
      const newState = JSON.parse(JSON.stringify(state))
      newState.list.splice(action.index, 1)
      return newState
   }
   if(action.type === GET_LIST_DATA){
      const newState = JSON.parse(JSON.stringify(state))
      newState.list = action.data
      return newState
   }   
   return state;
}