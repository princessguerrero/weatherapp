import React, { Component } from "react";
import axios from "axios";

import logo from "./logo.svg";
import "./App.css";
import WeeklyWeather from "./components/WeeklyWeather";

class App extends Component {
  state = {
      weather: null,
      tempScale: "°F",
      message: "Show in Celsius"
    };
  

  getWeather = () => {
    axios
      .get(
        `http://api.aerisapi.com/forecasts/11101?client_id=iGveyoV7ZjqCqJfabRkKk&client_secret=REI1SDlS62Ynhfaxv0COANakMGvp26Rz5wsnaA9q`
      )
      .then(data => {
        this.setState({
          weather: data.data.response[0]
        });
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleToggle = e => {
    console.log(e.target.checked);
    let newScale;
    if (e.target.checked) {
      newScale = "°C";
    } else {
      newScale = "°F";
    }
    this.setState({
      tempScale: newScale,
      message: "Show in Fahrenheit"
    });
  };

  componentDidMount() {
    this.getWeather();
  }

  render() {
    const { weather, tempScale, message } = this.state;
    console.log("this is current weather state", this.state.weather)
     if (weather) {
      return (
        <div className="App">
          <div >
            <WeeklyWeather days={weather.periods} tempScale={tempScale} />
            <div className="toggle">
              
            <label>See the Forecast in Celsius<input type='checkbox' onChange={this.handleToggle} value={true} checked={tempScale === "°C"} /></label>
          </div>
          </div>
          {console.log("this is the tempScale", this.state.tempScale)}
        </div>
      );
    } else {
      return <div className="header"> fetching for weather forecast... </div>;
    }
  }
}

export default App;
