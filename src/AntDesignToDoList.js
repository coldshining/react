import React, { Component } from 'react';
import 'antd/dist/antd.css';
import axios from 'axios'

import store from './store'
import { getInputChangeAction, getAddItemAction, getdeleteItemAction, getListDataAction  } from './store/actionCreators.js'

import AntDesignToDoListUI from './AntDesignToDoListUI'

class AntDesignToDoList extends Component{
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleDeleteItem = this.handleDeleteItem.bind(this)
    store.subscribe(this.handleStoreChange)
  }
  render() {
    return (
      <AntDesignToDoListUI
        value={this.state.inputValue}
        list={this.state.list} 
        handleChangeInput={this.handleChangeInput}
        handleBtnClick={this.handleBtnClick}
        handleDeleteItem={this.handleDeleteItem}
      /> 
    )
  }
componentDidMount() {
  axios.get('/list.json').then((res) => {
    const data = res.data
    const action = getListDataAction(data)
    store.dispatch(action);
  })
}
  handleChangeInput(e) {
    const action = getInputChangeAction(e.target.value);
    store.dispatch(action);
  }
  handleStoreChange() {
    this.setState(store.getState());
  }
  handleBtnClick() {
    const action = getAddItemAction();
    store.dispatch(action)
  }
  handleDeleteItem(index) {
    const action = getdeleteItemAction(index)
    store.dispatch(action)
  }
}

export default AntDesignToDoList; 