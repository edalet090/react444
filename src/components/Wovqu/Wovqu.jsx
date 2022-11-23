import React,{Component} from "react";
import './Wovqu.css'

class Oglan extends Component{
    clickHandle() {
         console.log("button click!!!!!!!!")
    }
    render(){
        return(
           <div> <button onClick={this.clickHandle}>click!!!</button> </div>
        )
    }
}
export default Oglan