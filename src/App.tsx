import React from 'react';
import './App.css';
import MapComponent from "./components/map-component";
import Users from "./components/users";

function App() {
  return (
    <div className="App">
        <Users/>
      <MapComponent/>
    </div>
  );
}

export default App;
