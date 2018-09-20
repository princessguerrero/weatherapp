import React, { Component } from "react";

class WeeklyWeather extends Component {
  render() {
    const { days, tempScale } = this.props;
    return (
      <div>
        <div className="header">New York City, NY 7-Day Weather </div>
        <div className="weather-box">
          {days.map((day, index) => {
            let weather = day.weather
            let maxTemp = day.maxTempF;
            let minTemp = day.minTempF;
            let date = new Date(day.dateTimeISO);
            let dayName = date.toLocaleDateString("en-US", { weekday: "long" });
            if (tempScale === "°C") {
              maxTemp = day.maxTempC;
              minTemp = day.minTempC;
            }
            return (
              <div className="main-container">
              <div >
                <div className="day-name">{dayName}</div>
                <div>{weather}</div>
                </div>
                <div className="bottom-box">
                  <div classname="icon">
                    <img src={`icons/${day.icon}`} alt={day.icon} />
                  </div>
                  <div className="maxTemp">{maxTemp}°</div>
                  <div className="minTemp">{minTemp}°</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default WeeklyWeather;
