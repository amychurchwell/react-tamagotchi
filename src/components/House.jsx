import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Tamagotchi from './Tamagotchi';

function House(){
  return (
    <div>
      <h1>House</h1>
      <Switch>
        <Route exact path='/' component={Tamagotchi}/>
      </Switch>
    </div>
  );
}

export default House;
