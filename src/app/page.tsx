'use client';
import React from 'react';
import { weatherService } from '../services/weather.service';
import { WeatherType } from '../types';

export default function Home() {
  const [searchValue, setSearchValue] = React.useState('');
  const [weatherInfo, setWeatherInfo] = React.useState<WeatherType | undefined>();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const weatherData = await weatherService.getWeatherByQuery(searchValue);
    console.log(weatherData);
    if (weatherData) {
      setWeatherInfo(weatherData);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} role="search">
        <label htmlFor="search">Search for stuff</label>
        <input
          onChange={handleChange}
          id="search"
          type="search"
          placeholder="Search..."
          autoFocus
          required
        />
        <button type="submit">Go</button>
      </form>
      <div style={{ background: 'white', display: 'flex' }}>
        <div>{weatherInfo?.location.name}</div>
        <div>{weatherInfo?.current.temp_c}</div>
      </div>
    </div>
  );
}
