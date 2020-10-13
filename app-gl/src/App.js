import React from 'react';
import logo from './logo.svg';
import './App.css';
import Ui from './Ui.js';
import Mui from './Mui.js';
import Fui from './Fui.js';
function App() {
  return (
    
      <div className="App">
          <h1 className = 'Title'>How Our App Works</h1>
          <p className = 'Summary'>The app calculates the amount to be paid to each housekeeper based on the number of rooms cleaned, with a scaling factor from the customer cleanliness rating. The rate per room and scaling factor is customized by each individual hotel.</p>
          <div className = "Buttons">
            <button>Learn More</button>
            <button >Sign Up</button>
          </div>
          <Ui />
          <Mui />
          <Fui />
      </div>
    
 
      
    
    
    
  );
}

export default App;
