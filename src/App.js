import SearchWeather from "./SearchWeather";
import Footer from "./Footer";
import "./main.css";

export default function App() {
  return (
    <div className="main-container container">
      <div className="weather-app">
        <SearchWeather defaultCity="Germany" />
      </div>
      <Footer />
    </div>
  );
}
