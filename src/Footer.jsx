import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <footer>
      <p>
        This project was coded by
        <a
          href="https://github.com/jadieclair"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Jade Harris,
        </a>{" "}
        project can be found on{" "}
        <a
          href="https://github.com/jadieclair/react-weather-app-shecodes"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          GitHub{" "}
        </a>{" "}
        and is hosted on{" "}
        <a
          href="https://react-weatherapp-shecodes.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Netlify
        </a>
      </p>
    </footer>
  );
}
