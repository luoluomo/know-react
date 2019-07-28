import React, { Component } from 'react';
// JSX语法里面， 有两类型的标签
// 1. html标签 首字母小写
// 2. 组件标签 首字母大写 (若小写无法渲染)
class App extends Component {
  
  render(){
    return (
      <div>
        Hello React!
      </div>
    );
  }
}

export default App;
