import React, {Component} from 'react';

class Item extends Component{
    render(){
        return(
            //第三章
            //<li>hello meiyi</li>
            //第四章 props上面傳下來的屬性
            //<li>{this.props.text} ({this.props.price+1})</li>
            <li>{this.props.children}</li>
        )
    }
}

export default Item;