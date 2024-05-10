import { useState,useRef } from "react";
import Todolist from "./Todolist";
import {v4 as uuidv4} from "uuid"

function App() {
  const [todos,setTodos] = useState([{id:1,name:"Todo1",completed:false}]);

  const todoNameRef =useRef();

  const handleAddTodo = () => {
    //タスクを追加する
    const name = todoNameRef.current.value;
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

  return (
    <div>
      {//{}内のtodosがconstで定義している変数
      //それをTodolist.jsファイルにtodosという名前で渡しますよという処理
      }
      <Todolist todos={todos} toggleTodo = {toggleTodo} /> 
      <input type="text" ref={todoNameRef}/>
      <button onClick={handleAddTodo}>追加</button>
      <button>完了済みの削除</button>
      <div>残りのタスク:0</div>
    </div>
  );
}
export default App;