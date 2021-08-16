import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Counter extends Component{
    // state={
    //     count:0,
    //     step:1,
    // }
    //第四章 應用練習 計數器
    // addCount =() =>{
    //     const {count,step}=this.state;
    //     this.setState({
    //         count: count + step,
    //         step: step+1,
    //     });
    // };
    //第五章 props進階
    //constructor生命週期
    // static defaultProps ={
    //     initCount:0,
    // };
    static propTypes ={
        initCount:PropTypes.number,
    }
    constructor(props){
        super(props);
        this.state={
            count: props.initCount,
        };
    };
    addCount =() =>{
        this.setState({
            count: this.state.count +1,
        });
        
    };
    render(){
        //const {count,step}=this.state;
        return(
            <div>
                <h1>{this.state.count}</h1>
                {/* <button onClick={this.addCount}>+{step}</button> */}
                <button onClick={this.addCount}>+1</button>
            </div>
        )
    }

}
// Counter.defaultProps ={
//     initCount:0,
// };
Counter.propTypes ={
    initCount:PropTypes.number,
}
export default Counter;