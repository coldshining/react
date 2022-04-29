import React, {Component} from 'react'
import TodoItem from './TodoItem';
import axios from 'axios';

class TodoList extends Component {

  constructor(props){
    super(props);
    this.state = {
      inputValue: '',
      list: [],
      text: 'hello,world!'
    };
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)
  }
componentWillMount() {
  console.log('render之前执行ComponentWillMount')
}
  render() {
    console.log('render函数') 
    return (
      <div>
        {
          // 下面是一个input框 （单行注释）
        }
        <label htmlFor="insertArea">输入内容：</label>
         <input
          id="insertArea"
          type="text"
          placeholder="todolist"
          value={this.state.inputValue}
          onChange={this.handleInputChange}/>
         <button
          onClick={this.handleBtnClick}
         >
          提交
         </button>
         <ul ref={(ul) => {this.ul = ul}}>
          {this.handleItemList()}
         </ul>
      </div>
    )
  }
  componentDidMount() {
  }
  // 如果 shouldComponentUpdate() 函数返回值为true，则继续执行componentWillUpdate() 函数，如果返回值为false则不继续向下执行。
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate')
    return true
  }
  componentWillUpdate() {
    console.log('componentWillUpdate')
  }
  componentDidUpdate() {
    console.log('componentDidUpdate')
  }
  handleItemList() {
    const {text} = this.state
    return(
      this.state.list.map((item,index) => {
        return(
          <div key={index}>
            <TodoItem
              text={text}
              content={item}
              index={index}
              handleItemDelete={this.handleItemDelete}
            />
            {/*<li key={index} 
            onClick={this.handleItemDelete.bind(this,index)}
            dangerouslySetInnerHTML={{__html: item}}
            >
            </li>*/}
          </div>
        )
      })      
    )
  }

  handleInputChange(e) {
    const value = e.target.value;
    this.setState( () => ({
        inputValue: value
    }))
  }

  handleBtnClick() {
    this.setState( (prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue:''
    }), () =>{console.log(this.ul.querySelectorAll('div').length)})
  }

  handleItemDelete(index){
    this.setState( (prevState) => {
      const list = [...prevState.list]
      list.splice(index,1)
      return {list}
    })
  }
}

export default TodoList