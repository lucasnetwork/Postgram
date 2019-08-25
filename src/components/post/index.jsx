import React,{Component} from 'react'
import PostFull from './Post_Header'
import './index.css'
class Post extends Component{
    //renderizará o post com o header e o comment atraves do map
    render(){
        return(
            <PostFull name={this.props.name} comment={this.props.comment}/>
        )
    }
}

export default Post