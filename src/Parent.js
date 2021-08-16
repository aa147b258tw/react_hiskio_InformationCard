import React,{Component, createRef} from 'react';
import Child from './Child'

class Parent extends Component {
    //使用 createRef() 來創建一個ref
  childRef = createRef();
  state = {
    count:0,
    //增加一個變數 childCount 作為子層的 count 資料
    childCount:0,
  };
  addCount = () => {
    this.setState({
        count: this.state.count+1,
    });
  };
  addChildCount = () => {
      this.setState({
        childCount:this.state.childCount+1,
      })
  };
  render(){
    return (
      <div>
        <h3>Parent:{this.state.count}</h3>
        <button onClick={this.addCount}>+Parent</button>
        <button onClick={this.addChildCount}>+Child</button>
        {/* 由父親告知小孩數值 */}
        <Child 
            count={this.state.childCount} 
            addParentCount={this.addCount} 
            addChildCount={this.addChildCount}
        />
      </div>
    );
  }
}

export default Parent;