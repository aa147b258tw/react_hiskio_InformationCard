import React from 'react';
import ReactDOM from 'react-dom';
import {render} from 'react-dom';
//第三章、第四章
//import List from './List';
//ReactDOM.render(<List />,document.getElementById('root'));

//第四章 React 組件基本
// import Message from './Message';
// ReactDOM.render(<Message />, document.getElementById('root'));

// //第四章 應用練習 計數器
// import Counter from './Counter';
// render(<Counter />, document.getElementById('root'));

//第五章 props進階
// import Counter from './Counter';
// render(<Counter initCount="20"/>, document.getElementById('root'));

// //第五章 ref
// import Input from './Input';
// render(<Input />, document.getElementById('root'));

// //第五章 組件的父子溝通
// import Parent from './Parent';
// render(<Parent />, document.getElementById('root'));

// //第五章 className與style
// import Demo from './Demo'
// render(<Demo />, document.getElementById('root'));

// 第五章練習題 資訊卡
import App from './InformationCard/App';
ReactDOM.render(<App />, document.getElementById('root'));