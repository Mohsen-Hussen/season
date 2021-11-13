import React, { Component } from 'react';
import SeasonDisplay from './Components/SeasonDisplay';
import Spinner from './Components/Spinner';

class App extends Component {
  state = {lat: null , long: null , errMsg: ''};

  componentDidMount() {
    console.log("hello from did mount");
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        this.setState({lat: position.coords.latitude});
        this.setState({long: position.coords.longitude});
      },
      (err) => {this.setState({errMsg: err.message});}
    );
  }

  render() {
    if (this.state.errMsg && !this.state.lat && !this.state.long) {
      return (
        <div>
          Error: {this.state.errMsg}
        </div>
        )
    }

    if (this.state.lat && this.state.long && !this.state.errMsg) {
      return (
        <div>
          <SeasonDisplay lat={this.state.lat} long={this.state.long}/>
        </div>
        )
    }

    return (
        <Spinner msg="please accept location request"/>
    )
  }
}

export default App;