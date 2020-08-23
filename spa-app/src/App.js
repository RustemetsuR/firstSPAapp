import React from 'react';
import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from '../components/Home/Home';
import AboutUs from '../components/AboutUs/AboutUs';
import Contacts from '../components/Contacts/Contacts';

const App = () => {
  return (
    <div className="App">
       <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/aboutUs" component={AboutUs} />
          <Route path="/contacts" component={Contacts} />
        </Switch>
      </BrowserRouter>
      <footer>
        <div className="container">
            <p>Made By Rustem</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
