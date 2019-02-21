import React, { Component } from 'react';
import Navigation from './Components/Navigation/Navigation'
import Clarifai from 'clarifai'
import Logo from './Components/Logo/Logo'
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm'
import Rank from './Components/Rank/Rank'
import FaceRecognition from './Components/FaceRecognition/FaceRecognition'
import './App.css';
import Particles from 'react-particles-js';


const app = new Clarifai.App({
  apiKey: '1df628c3608c47e094a069af4e7298cb'
 });

const particlesOptions = {
  particles: {
    number: {
      value:80,
      density: {
        enable:true, 
        value_area: 800
      }
    }
}
}
class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl:''
    }
  }

  onInputChange = (event) => {
    this.setState({input:event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});


    app.models.predict(
      Clarifai.COLOR_MODEL, 
      this.state.input).then(
    function(response) {
      // do something with response
      console.log(response)
    },
    function(err) {
      // there was an error
    }
  );

  }

  render() {
    return (
      <div className="App">
      <Particles  className='particles'
              params={particlesOptions}
            />

       <Navigation />
       <Logo />
       <Rank />
       <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit = {this.onButtonSubmit}/>
        <FaceRecognition imageUrl={this.state.imageUrl} />} 
      </div>
    );
  }
}

export default App;