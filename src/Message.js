import React, { Component } from 'react';

//第四章 React 組件基本
class Message extends Component {
    //定義狀態
    state={
        title:'Message',
        text:'meiyi',
    }
    sayhi = ()=>{
        //使用箭頭可以保證裡面this是組件
        this.setState({
            text:'Hi',
        });
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <h3>{this.state.text}</h3>
                <button onClick={this.sayhi}>Say hi</button>
            </div>
        );
    }
}

export default Message;