import { useState,useRef } from "react";
import Todolist from "./Todolist";
import {v4 as uuidv4} from "uuid"

function App() {
  const [todos,setTodos] = useState([]);
  const todoNameRef =useRef();

  const handleAddTodo = () => {
    //タスクを追加する
    const name = todoNameRef.current.value;
    if(name === "")return;
    setTodos((prevTodos) => {
      return[...prevTodos,{ id: uuidv4(), name:name, completed:false }];
    });
    todoNameRef.current.value = null;
  };

  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  };

const handleClear = () =>{
  const newTodos = todos.filter((todo) => !todo.completed);
  setTodos(newTodos);
}


  return (
    <div>
      {
      //コンポーネントは一つのタグをreturnすることはできない。だから複数返したいときは、divタグだったり、React.fragmentタグで囲う必要がある
      //{}内のtodosがconstで定義している変数
      //それをTodolist.jsファイルにtodosという名前で渡しますよという処理
      //以下のような記法（JSの中にHTMLがある記法）をJSXという
      }
      <Todolist todos={todos} toggleTodo = {toggleTodo} /> 
      <input type="text" ref={todoNameRef}/>
      <button onClick={handleAddTodo}>追加</button>
      <button onClick={handleClear}>完了済みの削除</button>
      <div>残りのタスク:{todos.filter((todo) => !todo.completed).length}</div>
    </div>
  );
}

export default App;
//export defaultとexportの違いはコンポーネントを一つだけエクスポートするのか、複数エクスポートするのかという違い。書き方も違いがあり、defaultの場合は一つしかエクスポートしないので{}で囲む必要がない