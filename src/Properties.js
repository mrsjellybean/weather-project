import React from "react";

export default function Properties() {
  return (
    <div class="col-2" id="proper">
      <ul>
        <li>
          Wind:<span id="speed">0</span>m/s
        </li>
        <li>
          Humidity:<span id="humidity">0</span>%
        </li>
      </ul>
    </div>
  );
}
