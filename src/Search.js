import React from "react";

export default function Search() {
  return (
    <div>
      <br />
      <span>
        {" "}
        <h1 id="city">Your city</h1>
        <form id="search-form">
          <input
            type="search"
            placeholder="Type a city.."
            id="city-input"
            autocomplete="off"
          />
        </form>
      </span>
    </div>
  );
}
