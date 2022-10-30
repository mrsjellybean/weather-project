import React from "react";

export default function Data() {
  return (
    <div>
      <p>
        <h1 id="tempe">
          <span className="temperature" id="temperature">
            31
          </span>
          <div className="shown">
            <span className="units celfar">
              <a href="#" id="celsius-link">
                °C
              </a>
              |
              <a href="#" id="fahrenheit-link">
                °F
              </a>
            </span>
          </div>
        </h1>

        <br />
        <smaller id="date">Friday 14th</smaller>
      </p>
    </div>
  );
}
