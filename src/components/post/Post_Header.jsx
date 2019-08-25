import React,{Component} from 'react'
import Body from './body'

class Post_Header extends Component{
    constructor(props){
        super(props)
        this.state ={time:0
            ,second:0
            ,minutes:0
            ,hours:0,
            text:"Segundos"}
    }
    time(){
        const time = {
            second: this.state.second+1,
            minutes: Math.floor(this.state.second/60),
            hours: Math.floor(this.state.minutes/60),
        }
        if(time.second>=60){
            this.setState(()=>({
                time:time.minutes,
                ...time,
                text:'Minutos'
            }))
        }else if(time.minutes>=60){
            this.setState(()=>({
                time:time.hours,
                ...time,
                text:'Horas'
            }))
        }else{
            this.setState(() =>({
                time:time.second,
                ...time,
                text:'Segundos'}))
        }
    }
    componentDidMount(){
        setInterval(()=> this.time(),1000)
    }
    render(){ 
        return(
            <div className="Post">
                <div className="Post_header">
                    {/* <img/> */}
                    <h2>{this.props.name}</h2>
                    <time>Há {this.state.time} {this.state.text}</time>
                </div>
                <Body comment={this.props.comment}/>
            </div>
        )
    }
}

export default Post_Header