import React, { useState } from 'react';
import { WeatherType } from '../types';
import { weatherService } from '../services/weather.service';

async function Form() {
  const data = await weatherService.getWeatherByQuery('london');
  const [value, setValue] = useState('Kyiv');
  const handleSearch = (e: any) => {
    e.prevent.default;
    setValue(e.target.value);
  };
  return (
    <div>
      <form onSubmit={() => handleSearch(value)} role="search">
        <label htmlFor="search">Search for stuff</label>
        <input id="search" type="search" placeholder="Search..." autoFocus required />
        <button type="submit">Go</button>
      </form>
      <div style={{ background: 'white' }}>{data?.location.name}</div>
    </div>
  );
}

export default Form;
