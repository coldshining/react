import React, {Component} from 'react'
 import PropTypes from 'prop-types'
class TodoItem extends Component{
  constructor(props) {
    super(props)
    this.handleDelete = this.handleDelete.bind(this)
  }
  render(){
    const {content, text} = this.props
    return (
      <div onClick={this.handleDelete}>
        {text} - {content}
      </div>
    )
  }
  handleDelete() {
    const {index, handleItemDelete} = this.props
    handleItemDelete(index)
  }
  // 一个组件从父组件接受参数
  // 如果这个组件第一次存在在父组件中，不会执行
  // 如果这个组件之前已经存在于父组件中，才会执行
  componentWillReceiveProps() {
  console.log('childcomponentWillReceiveProps')
  }
  componentWillUnmount() {
    console.log('childcomponentWillUnmount')
  }
}
  TodoItem.propTypes = {
    text: PropTypes.string.isRequired,
    content: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    handleItemDelete: PropTypes.func,
    index: PropTypes.number
  }
  // TodoItem.defaultProps = {

  // }
export default TodoItem