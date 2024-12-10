import React from 'react';
class Counter extends React.Component{
     constructor(){
        super();
        this.state={
            count : 0
        }
     }
     increment =()=>{
        this.setState({
            count: this.state.count + 1
        })
     }
     decrement =()=>{
        this.setState({
            count: this.state.count - 1
        })
     }
     reset =()=>{
        this.setState({
            count :0
        })
     }
     render(){
        return(
            <>
            <div style={styles.container}>
                <h1>Counter App</h1>
            <h1>{this.state.count}</h1>
            <button style={styles.button1} onClick={ this.decrement }>Decrease</button>
            <button style={styles.buttonR} onClick={ this.reset }>Reset</button>
            <button style={styles.button2} onClick={ this.increment }>Increase</button>
            
            </div>
            </>
        )
     }
}
const styles={
    container: {
        textAlign :'center',
        marginTop : '50px',
        backgroundcolor:"black"
    },
    button1: {
        margin: '20px',
        padding: '25px 35px',
        fontSize: '25px',
        backgroundColor: "aquamarine",
        color: "blue"
    },
    button2: {
        margin: '20px',
        padding: '25px 35px',
        fontSize: '25px',
        backgroundColor: "aquamarine",
        color:"red" 
    },
    buttonR: {
        margin: '20px',
        padding: '25px 35px',
        fontSize: '25px',
        backgroundColor: "aquamarine",
        color: "green"
    }
    
}
export default Counter;