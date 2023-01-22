import { Component } from "react";


export default class QualityDiscount extends Component{
    constructor(){
        super()
        this.state={
            quality:0,
            price:0,
            start:0
        }
    }

    update=()=>{
        this.setState({quality:5},()=>{
            if(this.state.quality===5){
                this.setState({price:2000-100})
            }
        })
    }

    updateTimer=()=>{
        this.setState({start:this.state.start+1})
    }


    handle=(e)=>{
        this.interval=setInterval(this.updateTimer,1000)
    }

    render(){
        return(
            <>
                <h1>quaity : {this.state.quality}</h1>
                <h1>quaity : {this.state.price}</h1>
                <button onClick={this.update} >check discount</button>
                <hr/>
                <h1>timer</h1>
                <button onClick={this.handle}>Start</button>
                <h2>{this.state.start}</h2>
            </>
        )
    }
}