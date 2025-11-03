import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

export default function InfoBox({ info }) {
  const INITIAL_URL = import.meta.env.VITE_INITIAL_URL;
  const HOT_URL = import.meta.env.VITE_HOT_URL;
  const COLD_URL = import.meta.env.VITE_COLD_URL;
  const RAINY_URL = import.meta.env.VITE_RAINY_URL;

  return (
    <div>
      <div className="box">
        <Card
          sx={{
            width: 300,
          }}
        >
          <CardMedia
            sx={{
              height: 200,
            }}
            image={
              info.humidity > 80
                ? RAINY_URL
                : info.temp > 15
                ? HOT_URL
                : COLD_URL
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
              {info.humidity > 80 ? (
                <ThunderstormIcon />
              ) : info.temp > 15 ? (
                <WbSunnyIcon />
              ) : (
                <AcUnitIcon />
              )}
            </Typography>
            <Typography
              variant="body2"
              component="p"
              sx={{ color: "text.secondary" }}
            >
              🌤️ Weather: {info.weather}
            </Typography>
            <Typography
              variant="body2"
              component="p"
              sx={{ color: "text.secondary" }}
            >
              🌡️ Temperature: {info.temp}°C
            </Typography>
            <Typography
              variant="body2"
              component="p"
              sx={{ color: "text.secondary" }}
            >
              🤒 Feels Like: {info.feelsLike}°C
            </Typography>
            <Typography
              variant="body2"
              component="p"
              sx={{ color: "text.secondary" }}
            >
              🔼 Max Temp: {info.tempMax}°C
            </Typography>
            <Typography
              variant="body2"
              component="p"
              sx={{ color: "text.secondary" }}
            >
              🔽 Min Temp: {info.tempMin}°C
            </Typography>
            <Typography
              variant="body2"
              component="p"
              sx={{ color: "text.secondary" }}
            >
              💧 Humidity: {info.humidity}%
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
