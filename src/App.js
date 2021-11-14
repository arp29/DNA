import react, { Component } from 'react';
import './App.css';
import Clarifai from 'clarifai';
import Navigation from './components/navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Particles from "react-tsparticles";
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import "tachyons";

const app = new Clarifai.App({
 apiKey: 'b40c664dadc647fa9436abc566258864'
});

const ParticleOptions={
  particles: {
    color: {
      value: "#ffffff",
    },
    links: {
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    collisions: {
      enable: false,
    },
    move: {
      direction: "none",
      enable: true,
      outMode: "bounce",
      bounce: false,
      random: false,
      speed: 2,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        value_area: 800,
      },
      value: 80,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      random: true,
      value: 5,
    }
  }
}

class App extends Component{

  //to define state
  constructor(){
    super();
    this.state={
      input:'',
      imageURL:'',
      box:{},
      route:'SignIn'
    }
  }

  //event listener on input change

  onInputChange=(event)=>
  {
      //console.log(event.target.value);
      this.setState({input:event.target.value});
  }

  //on clicking detect
  onButtonSubmit=()=>
  {
    this.setState({imageURL:this.state.input});
    app.models.predict(Clarifai.FACE_DETECT_MODEL,this.state.input).then(

          response=>
          this.displayFaceBox(this.calculateFaceLocation(response)))
          .catch(err=> console.log("error!!"));

  }

  calculateFaceLocation=(response)=>{
    const clarifaiFace= response.outputs[0].data.regions[0].region_info.bounding_box;
    console.log(clarifaiFace.left_col);
    const Image=document.getElementById('inputImage');
    const width=Number(Image.width);
    const height=Number(Image.height);
    return{
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width-(clarifaiFace.right_col*width),
      bottomRow: height-(clarifaiFace.bottom_row * height)
  };
  }

  displayFaceBox=(box)=>{
    this.setState({box: box});
    console.log(this.state.box);
  }

  onRouteChange=(route)=>
  {
    this.setState({route:route});
  }
  render(){
  return (
    <div className="App">
      <Particles
      params={ParticleOptions}
      />
      
      {
      this.state.route==='home'?
          <div>
          <Navigation onRouteChange={this.onRouteChange}/> 
          <Logo/>
          <Rank/>
          <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
          <FaceRecognition imageURL={this.state.imageURL} box={this.state.box}/>
        </div>
         :(
           this.state.route==='SignIn'?
           <div>
              <SignIn onRouteChange={this.onRouteChange}/>
          </div>
          :<div>
             <Register onRouteChange={this.onRouteChange}/>
            </div>
         )
          
          
       }
    </div>
  );
  }
}

export default App;
