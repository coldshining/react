import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_ITEM_VALUE, GET_LIST_DATA } from './actionTypes.js'
import axios from 'axios'
export const getInputChangeAction = value => ({
  type: CHANGE_INPUT_VALUE,
  value
})
export const getAddItemAction = () => ({
  type: ADD_TODO_ITEM
})
export const getdeleteItemAction = index => ({
  type: DELETE_ITEM_VALUE,
  index
})
export const getListDataAction = data => ({
  type: GET_LIST_DATA,
  data
}) 
// export const getInitList = () => {
//   return (dispatch) => {
//     axios.get('/list.json').then((res) => {
//     const data = res.data
//     const action = getListDataAction(data)
//     dispatch(action);
//   })    
//   }
// }