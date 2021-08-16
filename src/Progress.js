import React,{Component} from "react";

// Class Component 
class Progress extends Component{
  render(){
    const {value} = this.props;
    return (
      <div className="bar-outer">
        <div 
          className="bar-inner"
          style={{width:`${value}%`}}/>
        <span>{value}%</span>
      </div>
    )
  }
}

export default Progress;

// Functional Component
const ProgressBar= (props) =>{
  
    const {value} = this.props;
    return (
      <div className="bar-outer">
        <div 
          className="bar-inner"
          style={{width:`${value}%`}}/>
        <span>{value}%</span>
      </div>
    )
  
}
// Pure Component
