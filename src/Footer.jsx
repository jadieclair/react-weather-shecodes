import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <footer>
      <p>
        This project was coded by
        <a
          href="https://www.linkedin.com/in/jade-harris-b623b9242/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Jade Harris,
        </a>{" "}
        this project can be found on{" "}
        <a
          href="https://github.com/jadieclair/react-weather-shecodes"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          GitHub{" "}
        </a>{" "}
        and is hosted on{" "}
        <a
          href="https://reactweather-app-shecodes.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Netlify
        </a>
      </p>
    </footer>
  );
}
