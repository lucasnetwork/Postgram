import React,{Component} from 'react'

class Body extends Component{
    render(){
        return(
            <p>{this.props.comment}</p>
        )
    }
}
export default Body