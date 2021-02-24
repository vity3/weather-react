import React from "react";
import SearchForm from "./SearchForm";
import Forecast from "./Forecast";
import Weather from "./Weather";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <SearchForm />
        <h1>Rīga</h1>
        <div className="row">
          <div className="col-6">
            <Forecast />
          </div>
          <div className="col-6">
            <Weather />
          </div>
        </div>
      </div>
    <div>
      <small>
        <a
          href="https://github.com/vity3/my-wonderful-weather-app" target="_blank"
        >
          Open-source code
        </a>
        by Vita Bleidere
        </small>
      </div>
    </div>
  );
}


// import React from 'react';
// import Weather from "./Weather";
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//         <Weather />
//     </div>
//   );
// }

// export default App;
