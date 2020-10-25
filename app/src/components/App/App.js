import React from 'react';
import './App.scss';
import { Switch, Route, HashRouter } from 'react-router-dom'
import HomePage from '../Pages/HomePage/HomePage'
import DemoPage from '../Pages/DemoPage/DemoPage'
import ContactPage from '../Pages/ContactPage/ContactPage'
import AppPage from '../Pages/AppPage/AppPage'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'


function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <NavBar />
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/demo" component={DemoPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/app" component={AppPage} />
        </Switch>
      </div>
      <Footer />
    </HashRouter>
  );
}

export default App;
