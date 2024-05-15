import { useState,useRef } from "react";
import Todolist from "./Todolist";//同じ階層のTodolist.jsファイルからTodolistコンポーネントをインポートする
import {v4 as uuidv4} from "uuid"

function App() {//Appコンポーネントを定義して実行。おそらく、素のJSと違ってわざわざ実行するための関数を書かなくてもfunctionで定義したらそのまま実行してくれるのかな
  const [todos,setTodos] = useState([]);//useStateは状態を管理するAPI。todosとその状態を更新するsetTodosという変数（状態）を定義する。そして初期値は空の配列
  const todoNameRef =useRef();//useRefで要素に対する参照を保持する。つまり今回はinputタグを参照している。それをtodoNameRefと定義する

  const handleAddTodo = () => {//これなんで関数なのにfunctionで定義しないんだろう。なぜ変数として定義しているんだろう。コンポーネントを定義する時はfunctionで関数を定義する時はconstにしているのか？
    //タスクを追加する処理を定義
    const name = todoNameRef.current.value;//参照したinputのcurrentの中身のvalueをnameと定義
    if(name === "")return;//もし空文字だったら何も返さない
    setTodos((prevTodos) => {//現在存在しているタスクをprevTodosとする
      return[...prevTodos,{ id: uuidv4(), name:name, completed:false }];//prevTodosの後に{}の情報を持ったオブジェクトを追加する
    });
    todoNameRef.current.value = null;//追加した後、input属性の値を空にする
  };


  //全体的にこのtoggleTodoで行われていることがマジで意味わからない。
  const toggleTodo = (id) => {
    const newTodos = [...todos];//todosは状態変数の状態だから、それをいじるのはあまり好ましくないため、todosをnewTodosという変数にコピーする。（インスタンスを作成しているようなものかな？）
    const todo = newTodos.find((todo) => todo.id === id);//（toggleTodo関数においての）todoはnewTodosの中からfind関数に適合したものとする。（ここが結構意味わからない）
    todo.completed = !todo.completed;//todoがcompletedだった場合（つまりfalseであり、チェックがついていない状態）、反転させる（つまりcheck状態にする）。
    setTodos(newTodos);//newTodosをsetTodosに入れてあげる
  };

const handleClear = () =>{
  const newTodos = todos.filter((todo) => !todo.completed);
  setTodos(newTodos);
}


  return (
    <div>
      {
      //コンポーネントは一つのタグをreturnすることしかできない。だから複数返したいときは、divタグだったり、React.fragmentタグで囲う必要がある
      //{}内のtodosがconstで定義している変数
      //それをTodolist.jsファイルにtodosという名前で渡しますよという処理
      //以下のような記法（JSの中にHTMLがある記法）をJSXという

      //Todolist.jsファイルのTodolistコンポーネントを実行している
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
//あと、エイリアスでインポートすることができる