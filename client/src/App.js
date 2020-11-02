import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import React from 'react'
import Login from './components/accounts/Login';
import SignUp from './components/accounts/SignUp';
import FreeSignUp from './components/accounts/FreeSignUp';
import Home from './components/home/Home';
import Main from './Main';

const dotenv = require('dotenv')

function App() {
  dotenv.config()
  return (
    <Router>
      <div className="App">
          <Navbar />
            <Switch>
              <Route exact path="/about">I am About Page</Route>
              <Route exact path="/contact">I am Contact Page</Route>W
              <Route exact path="/signUp" component={SignUp} />
              <Route exact path="/freelancer/signUp" component={FreeSignUp} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/main" component={Main} />
              <Route exact path="/search/:string" component={Login} />
              <Route exact path="/" component={Home} /> 
            </Switch>
      </div>
    </Router>
  );
}

export default App;
