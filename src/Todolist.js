import React from 'react';
import Todo from "./Todo";//Todo.jsからTodoコンポーネントを受け取っている
const Todolist = ({todos,toggleTodo}) => {
    {
        //todosというpropsを受け取り、その中身をmap関数で処理してTodoというコンポーネントに入れている
        //大文字で始めたらコンポーネントとして自動的に認識してくれる
        //map関数で定義したtodoもいちいちコンポーネントにpropsとして渡さないといけないのか
    }
    return todos.map((todo)=><Todo todo={todo} key={todo.id} toggleTodo={toggleTodo}/>);
}
export default Todolist
