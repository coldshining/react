import React, { Component } from 'react'

import { Input, Button, List, } from 'antd';

// // 无状态组件的性能更好
// const AntDesignToDoListUI = (props) => {
//   <div>
//     <div style={{marginTop: '10px', marginLeft: '10px'}}>
//       <Input 
//         value={props.inputValue}
//         placeholder="todo_info" 
//         style={{width: '300px',marginRight:'10px'}}
//         onChange={props.handleChangeInput}
//       ></Input>
//       <Button type="primary" onClick={props.handleBtnClick}>提交</Button>
//     </div>
//       <List
//         style={{marginTop: '10px',marginLeft: '10px',width: '300px'}}
//         bordered 
//         dataSource={props.list}
//         renderItem={(item,index) => <List.Item onClick={(index) => {{props.handleDeleteItem(index)}}}>{item}</List.Item>}
//       />
//   </div>  
// }
class AntDesignToDoListUI extends Component{
  render() {
    return(
      <div>
        <div style={{marginTop: '10px', marginLeft: '10px'}}>
          <Input 
            value={this.props.inputValue}
            placeholder="todo_info" 
            style={{width: '300px',marginRight:'10px'}}
            onChange={this.props.handleChangeInput}
          ></Input>
          <Button type="primary" onClick={this.props.handleBtnClick}>提交</Button>
        </div>
          <List
            style={{marginTop: '10px',marginLeft: '10px',width: '300px'}}
            bordered
            dataSource={this.props.list}
            renderItem={(item,index) => (<List.Item onClick={() => {this.props.handleDeleteItem(index)}}>{item}</List.Item>)}
          />
      </div>
    )
  }
}

export default AntDesignToDoListUI