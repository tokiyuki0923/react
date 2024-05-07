import { useState } from "react";
import Todolist from "./Todolist";

function App() {
  const [todos,setTodos] = useState(["Todo1","Todo2"]);
  return (
    <div>
      {//{}内のtodosがconstで定義している変数
      //それをTodolist.jsファイルにtodosという名前で渡しますよという処理
      }
      <Todolist todos={todos}/> 
      <input type="text" />
      <button>追加</button>
      <button>完了済みの削除</button>
      <div>残りのタスク:0</div>
    </div>
  );
}

export default App;