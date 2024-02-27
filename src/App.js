import Search from "./Search";
import Weather from "./Weather";
import Footer from "./Footer";
import "./app.css";

export default function App() {
  return (
    <div className="main-container">
      <div className="weather-app">
        <Search />
        <Weather />
      </div>
      <Footer />
    </div>
  );
}
