import React from 'react';
import ReactDOM from 'react-dom/client';//react-domパッケージのclient.jsファイルを読み込んでいるのかなと思ったが違った。
import './index.css';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {
      //ここでApp.jsの関数Appをstrictmodeで起動している
    }
  </React.StrictMode>
);

