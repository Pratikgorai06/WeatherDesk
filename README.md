🌤️ WeatherDesk

A simple and modern weather application built using React (Vite) and Material UI (MUI).
It fetches real-time weather data from the OpenWeatherMap API and displays temperature, humidity, and weather conditions with icons and images.

🛠️ Tech Stack

⚛️ React (Vite) — for fast frontend development

🎨 Material UI (MUI) — for elegant components and icons

🌐 OpenWeatherMap API — to fetch live weather data

💅 Custom CSS — for layout and card styling

🔑 .env variables — to secure API keys and URLs

⚙️ Features

Search weather by city name

Displays temperature, humidity, feels like, max/min

Dynamic weather icons (sunny, rainy, cold)

Responsive Material UI design

Environment variables for secure API key storage

🚀 How to Run Locally

Clone this repository

git clone https://github.com/<your-username>/weather-app.git
cd weather-app

Install dependencies

npm install

Create a .env file in the root folder and add:

VITE_API_KEY=your_openweathermap_api_key
VITE_API_URL=https://api.openweathermap.org/data/2.5/weather
VITE_INITIAL_URL=https://cdn-icons-png.flaticon.com/512/7133/7133364.png
VITE_HOT_URL=https://www.shutterstock.com/image-vector/summer-theme-image-2-vector-600w-81370717.jpg
VITE_COLD_URL=https://thumbs.dreamstime.com/b/winter-scene-kids-1-21843359.jpg
VITE_RAINY_URL=https://www.eurokidsindia.com/blog/wp-content/uploads/2023/08/rainy-season-precautions.jpg

Start the development server

npm run dev

Open the app in your browser at:

http://localhost:5173

🧩 Project Structure
src/
├── components/
│ ├── InfoBox.jsx
│ ├── SearchBox.jsx
│ └── WeatherApp.jsx
├── App.jsx
└── main.jsx

💻 Deployment

Deployed easily on Vercel or Netlify — just set your .env variables in the hosting environment.
