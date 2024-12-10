import React from "react";

class Car extends React.Component{
    constructor(){
        super();
        this.state={
            no :1,
            color:"blue"
        };
    }
    render(){
        return(
            <>
            <h1>I am Car {this.state.na}</h1>
            </>
        )
    }
}
export default Car;