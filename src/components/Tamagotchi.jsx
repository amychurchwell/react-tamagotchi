import React from 'react';
import Control from './Control';

class Tamagotchi extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      fullnessLvl: 50,
      restedLvl: 50,
      entertainedLvl: 50
    };
  }

  render(){
    return (
      <div>
        <div>{this.state.fullnessLvl}</div>
        <div>{this.state.restedLvl}</div>
        <div>{this.state.entertainedLvl}</div>
        <Control />
      </div>
    );
  }
}

export default Tamagotchi;
