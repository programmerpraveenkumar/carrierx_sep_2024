import React from "react";
import { Header } from "./Header";

//creating class component
export default class Home2 extends React.Component{
    //creating state variable
    state={
            "firstName":"sample firstname",
            "lastname":"sample last name",
            "msg":""
    }
    nameRef = React.createRef();
    updatevalue(){  
        if(this.nameRef.current.value == ''){
            alert("pleas eenter the value")
        }else{
            this.setState({'msg':this.nameRef.current.value});
        }
        
    }
    //will load the ui rom the render method
    render(){
        return(
            <>
             <Header/>
            <h1>{this.state.firstName}</h1>
            <h1>{this.state.msg}</h1>
            <input type="text" ref={this.nameRef}/>
            <button onClick={()=>this.updatevalue()}>Click me to get the value</button>
             <h1>this is home2 class component</h1>
             </>
        )
    }
   
}