import React from 'react';
import Todo from "./Todo";
const Todolist = ({todos,toggleTodo}) => {
    {
        //todosというpropsを受け取り、その中身をmap関数で処理してTodoというコンポーネントに入れている
    }
    return todos.map((todo)=><Todo todo={todo} key={todo.id} toggleTodo={toggleTodo}/>);
}
export default Todolist
