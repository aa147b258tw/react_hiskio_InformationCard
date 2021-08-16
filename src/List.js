import React, {Component} from 'react';
import Item from './Item'

class List extends Component{
    render(){
        return(
        <ol>
            {/* 第三章 */}
            {/* <Item />
            <Item />
            <Item /> */}
            
            {/* 第四章 */}
            <Item text="Learn JavaScript" price={100} />
            <Item text="Learn JavaScript" price="100" />
            <Item text="Learn React"/>
            <Item text="meiyi JavaScript"/>
            <Item>另一種方式</Item>
        </ol>

        )
        
    }
}

export default List;