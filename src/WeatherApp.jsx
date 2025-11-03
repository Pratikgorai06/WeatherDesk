import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
import { Box } from "@mui/material";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feelsLike: 19.68,
    humidity: 60,
    temp: 20.05,
    tempMax: 20.05,
    tempMin: 20.05,
    weather: "haze",
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <Box sx={{ textAlign: "center", mt: 4 }}>
      <div>
        <h2>🌤️ WeatherDesk</h2>
        <div className="container">
          <SearchBox updateInfo={updateInfo} />
          <br />
          <hr />
          <InfoBox info={weatherInfo} />
        </div>
      </div>
    </Box>
  );
}
