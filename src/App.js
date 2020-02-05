import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
// CSS STYLESHEETS
import './App.css';

import HomePage from './pages/homepage/homepage.component';


const HatsPage = (props) => {
  console.log(props);
  return (
    <div>
      <Link to={`${props.match.url}/13`}></Link>
      <h1> Hats Page</h1>
    </div>
  )
}

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
