export type WeatherType =
  | {
      location: {
        name: string;
        region: string;
        country: string;
        localtime: string;
      };
      current: {
        last_updated: string;
        temp_c: number;
        condition: {
          text: string;
          icon: string;
        };
      };
      wind_kph: string;
    }
  | undefined;
