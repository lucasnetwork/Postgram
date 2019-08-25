import React,{Component} from 'react';
import Header from './components/Header'
import Post from './components/post/index'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      Posts:[
        {name:"lucas",comment:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel est imperdiet, bibendum nisi vel, pellentesque mi. Curabitur pulvinar efficitur tortor sed placerat. Nunc aliquet mauris ut eros mollis, vitae lacinia arcu cursus. Duis eget mauris vitae leo fringilla fermentum. Sed dapibus tempus pharetra. Donec nec orci eu erat fermentum pulvinar. Etiam a orci vel sem venenatis tristique eu vel ante. Nam a metus vitae mauris gravida euismod at eu diam. Vivamus at consectetur ex. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque sit amet fermentum urna. Pellentesque non dui tempus, aliquam orci eget, eleifend odio. Nunc massa nulla, ultricies vitae magna at, cursus sodales tortor."},
        {name:"julio",comment:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel est imperdiet, bibendum nisi vel, pellentesque mi. Curabitur pulvinar efficitur tortor sed placerat. Nunc aliquet mauris ut eros mollis, vitae lacinia arcu cursus. Duis eget mauris vitae leo fringilla fermentum. Sed dapibus tempus pharetra. Donec nec orci eu erat fermentum pulvinar. Etiam a orci vel sem venenatis tristique eu vel ante. Nam a metus vitae mauris gravida euismod at eu diam. Vivamus at consectetur ex. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque sit amet fermentum urna. Pellentesque non dui tempus, aliquam orci eget, eleifend odio. Nunc massa nulla, ultricies vitae magna at, cursus sodales tortor."},
        {name:"alexandre",comment:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel est imperdiet, bibendum nisi vel, pellentesque mi. Curabitur pulvinar efficitur tortor sed placerat. Nunc aliquet mauris ut eros mollis, vitae lacinia arcu cursus. Duis eget mauris vitae leo fringilla fermentum. Sed dapibus tempus pharetra. Donec nec orci eu erat fermentum pulvinar. Etiam a orci vel sem venenatis tristique eu vel ante. Nam a metus vitae mauris gravida euismod at eu diam. Vivamus at consectetur ex. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque sit amet fermentum urna. Pellentesque non dui tempus, aliquam orci eget, eleifend odio. Nunc massa nulla, ultricies vitae magna at, cursus sodales tortor."}
      ]
    }
  }
  get_post(){
  return this.state.Posts.map((post,id)=>{
    return(
      <Post key={id} name={post.name} comment={post.comment}/>
    )
  })
  }
  render(){
    return(
      <div className="body">
        <Header/>
        {this.get_post()}
       </div>
    )
  }
}
export default App;
