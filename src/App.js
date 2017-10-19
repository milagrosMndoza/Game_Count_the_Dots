import React, { Component } from 'react';
import { BrowserRouter, Router, Switch, Redirect} from 'react-router-dom';
import ShowCards from './ShowCards';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" render={() => <Redirect to= {'/ShowCards'}/>}/>
          <Route path='/Game_Count_the_Dots' render={() => <Redirect to="/ShowCards"/>}/>
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
