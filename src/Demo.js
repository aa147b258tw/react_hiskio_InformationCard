import React, {Component} from 'react';
import bicycle from './bicycle.png';
import './style.css';

class Demo extends Component{
    state={
        visible:true,
    }
    toggle =()=> {
        this.setState({
            visible: !this.state.visible,
        })
    }

    render(){
        const {visible} = this.state;
        const cn=visible ? 'image' : 'image hide';
        return(
            <div>
               <button onClick={this.toggle}>Toggle</button>
               <hr />
               {/* 三元判斷式 */}
               {/* {visible ? <img src={bicycle} /> : null} */}
               {/* 也可以使用&&作為判斷開關 */}
               {/* {visible && <img src={bicycle}} */}
               {/* <img style={{display: visible ? 'block':'none'}} src={bicycle} /> */}
               <img className={cn} src={bicycle} />
            </div>
        );
    }
}

export default Demo;