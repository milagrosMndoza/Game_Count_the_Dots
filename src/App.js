import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import ShowCards from './ShowCards';
import './App.css';

const App =({model})=> {
 
    return (
      <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" render={() => <Redirect to= {'/ShowCards'}/>}/>
          <Route pacth= "/showCards" render={() =><ShowCards model={model} />}/>
          <Route path='/Game_Count_the_Dots' render={() => <Redirect to="/ShowCards"/>}/>
        </Switch>
      </div>
      </BrowserRouter>
    );
  }


export default App;
