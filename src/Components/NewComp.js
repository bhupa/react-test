import React,{ Component} from "react"; 

import BellA from './bell1.png';
import BellB from './bell2.png';


export class NewComp extends Component{
    constructor(props){
        super(props);
        this.state ={
            message:'Subscribe to nepal',
            sub:"Subscribe",
            imageUrl:BellA
        }
    }
    styles = {
        fontStyle : "italic",
        color : "purple"
      };
      ButtonChange=()=>{
        this.setState({
            message:"Hit the bell icon to never miss the update ",
            sub:"Subscibed"
        })
      }
      imageChange=()=>{
        this.setState({
            imageUrl:BellB,
            message:"Happy Learning"
        })
      }
    render(){
        return  <div className="App"> 
        <h3 style={this.styles}>{this.state.message}</h3>
        <button className="btn btn-sm btn-primary" onClick={this.ButtonChange }>{this.state.sub}</button>
        <p />
        <img onClick={this.imageChange} style={{width:"30px",height:"30px"}} src={this.state.imageUrl} alt="" />
        </div>
    }
}