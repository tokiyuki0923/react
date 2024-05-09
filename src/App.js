import { useState,useRef } from "react";
import Todolist from "./Todolist";

function App() {
  const [todos,setTodos] = useState([{id:1,name:"Todo1",completed:false}]);

  const todoNameRef =useRef();

  const handleAddTodo = () => {
    //タスクを追加する
  }
  return (
    <div>
      {//{}内のtodosがconstで定義している変数
      //それをTodolist.jsファイルにtodosという名前で渡しますよという処理
      }
      <Todolist todos={todos}/> 
      <input type="text" ref={todoNameRef}/>
      <button onClick={handleAddTodo}>追加</button>
      <button>完了済みの削除</button>
      <div>残りのタスク:0</div>
    </div>
  );
}
export default App;