import { Component } from "react";


export default class ChildToProps extends Component{
    constructor(){
        super()
        this.state={
            name:"Jack"
        }
    }

    update=(value)=>{
        let newValue=value;
        this.setState({name:newValue})
    }
    render(){
        return(
            <>
            <h1>{this.state.name}</h1>
                <Parent newValue={this.state.name} update={this.update} />
            </>
        )
    }
}

class Parent extends Component{
    constructor(){
        super()
        this.state={
            NEwname:null
        }
    }

    handle=()=>{
        let NEwname="Rose"
        this.setState({newValue:NEwname})
        this.props.update(NEwname)
    }
    render(){
        return(
            <>
            <button onClick={this.handle}>Change Name</button>
            
            </>
        )
    }
}