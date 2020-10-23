import React from 'react';
import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomePage from '../Pages/HomePage/HomePage'
import DemoPage from '../Pages/DemoPage/DemoPage'
import ContactPage from '../Pages/ContactPage/ContactPage'
import AppPage from '../Pages/AppPage/AppPage'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'


function App() {
  return (
    <BrowserRouter history={hashHistory} basename={process.env.PUBLIC_URL}>
      <NavBar />
      <div className="App">
        <Switch>
          <Route path='/' component={HomePage} />
          <Route path='/demo' component={DemoPage} />
          <Route path='/contact' component={ContactPage} />
          <Route path='/app' component={AppPage} />
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
