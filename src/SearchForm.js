import React from "react";
import "./SearchForm.css";

export default function SearchForm() {
  return (
    <div>
      <form className="search-form">
        <div className="row">
          <div className="col-6">
            <input
              type="search"
              id="city-input"
              class="form-control"
              placeholder="Type a city..."
              autofcous="on"
              autocomplete="off"
            />
          </div>
          <div className="col-3">
            <button type="submit" class="btn btn-success" id="search-button">
              Search <i class="fas fa-search"></i>
            </button>
          </div>
          <div className="col-3">
            <button type="click" class="btn btn-success" id="current-button">
              Current <i class="fas fa-map-marker-alt"></i>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
