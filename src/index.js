import React from 'react';
import ReactDOM from 'react-dom';

import TodoList from './TodoList';
import AntDesignToDoList from './AntDesignToDoList'

ReactDOM.render(
  <React.StrictMode>
    <AntDesignToDoList />
    {/* <TodoList /> */}
  </React.StrictMode>,
  document.getElementById('root')
); 