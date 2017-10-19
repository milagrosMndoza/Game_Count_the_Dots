import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import ShowCards from './ShowCards';
import './App.css';

const App = (props) => {
 
    const {model} = props;
    console.log('app.props', props)
    return (
      <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" render={() => <Redirect to= {'/showCards'}/>}/>
          <Route  path="/showCards" render={() => <ShowCards model={model} />}/>
          <Route path='/Game_Count_the_Dots' render={() => <Redirect to="/ShowCards"/>}/>
        </Switch>
      </div>
      </BrowserRouter>
    )
}

export default App;
