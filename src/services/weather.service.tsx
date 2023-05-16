import { WeatherType } from '../types';
import { pathURL } from '../urls/urls';
import axiosService from './axios.service';

export const weatherService = {
  getWeatherByQuery: async (value: string) =>
    await axiosService
      .get<WeatherType>(pathURL.key.concat(pathURL.search_term, value, pathURL.air_quality))
      .then((value) => value.data)
};
