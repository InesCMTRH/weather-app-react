import React, { Component } from "react";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }

  _handleChange(event) {
    this.setState({ value: event.target.value });
  }

  _submit(event) {
    event.preventDefault();
    this.props.refresh(this.state.value);
  }

  render() {
    return (
      <form className="float-left" onClick={(event) => this._submit(event)}>
        <input
          type="text"
          placeholder="Enter a city"
          autoComplete="off"
          autoFocus="on"
          onChange={(event) => this._handleChange(event)}
          value={this.state.value}
        />
        <input type="submit" value="Search" className="btn btn-primary" />
      </form>
    );
  }
}

function updateCity(event) {
  setCity(event.target.value);
}

let form = (
  <form onSubmit={handleSubmit}>
    <input type="search" placeholder="Enter a city.." onChange={updateCity} />
    <button type="Submit">Search</button>
  </form>
);

if (loaded) {
  return (
    <div>
      {form}
      <ul>
        <li>Temperature: {Math.round(weather.temperature)}°C</li>
        <li>Description: {weather.description}</li>
        <li>Humidity: {weather.humidity}%</li>
        <li>Wind: {weather.wind}km/h</li>
        <li>
          <img src={weather.icon} alt={weather.description} />
        </li>
      </ul>
    </div>
  );
} else {
  return form;
}
