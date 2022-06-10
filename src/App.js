import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [input, setinput] = useState("");
  const [data, setdata] = useState([]);
  const updateinput = (event) => {
    const value = event.target.value;
    setinput(value);
  };

  useEffect(() => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=karachi&appid=2a843a88086fe57fbb357be58803b6b6&units=metric"
    ).then((result) => {
      result.json().then((response) => {
        setdata(response);
      });
    });
  }, []);

  const searchWeather = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=2a843a88086fe57fbb357be58803b6b6&units=metric`
    ).then((result) => {
      result.json().then((response) => {
        setdata(response);
      });
    });
  };
  // const bbb = input.map("main.temp, main.feels_like");

  return (
    <div className="App">
      <div className="api"></div>
      <section className="top-banner">
        <div className="container">
          <h1 className="heading">Simple Weather App</h1>
          <form>
            <input
              type="text"
              placeholder="Search for a city"
              value={input}
              onChange={(e) => {
                updateinput(e);
              }}
            />
            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                searchWeather();
              }}
            >
              SUBMIT
            </button>
            <span className="msg"></span>
          </form>
        </div>
        <div>
          {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
          <h4>Temperature : {Math.round(data?.main?.temp)}C</h4>
          <h4>Country : {data?.sys?.country}</h4>
          <h4>Humidity : {data?.main?.humidity}%</h4>
          <h4>Feels like : {Math.round(data?.main?.feels_like)}C</h4>
        </div>
      </section>
      <section className="ajax-section">
        <div className="container">
          <ul className="cities" style={{ color: "white" }}>
            City : {data?.name}
          </ul>
        </div>
      </section>
      <footer className="page-footer">
        <div className="container">
          <small>
            Made by{" "}
            <a href="https://github.com/lordcommander3">
              Zaryab Shaikh <span>❤</span>
            </a>
          </small>
        </div>
      </footer>
    </div>
  );
}

export default App;
