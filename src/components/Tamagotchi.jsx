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

  componentDidMount() {
    setInterval(() => {
      let fullness = this.state.fullnessLvl;
      let rested = this.state.restedLvl;
      let entertained = this.state.entertainedLvl;
      fullness -= 1;
      rested -= 1;
      entertained -= 1;
      this.setState({
        fullnessLvl:fullness,
        restedLvl:rested,
        entertainedLvl:entertained
      });
    },1000);
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
