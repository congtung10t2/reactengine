import * as React from 'react';
import * as pixi from 'pixi.js';
import {Stage, Sprite,SpritePropsType} from 'react-pixi';
import {Reels} from './reels'
export class App extends React.Component {
  state ={
    sprites: [],
    state: "stop"
  };
  
  constructor(props:any) {
    super(props);
  }
  spin = ()=>{
    console.log("abc");
    this.setState({
      state:"spin"
    });
  }
  componentDidMount() {
  }

  render() {
    return (
        <Stage
        width={1200}
        height={800}>
            <Sprite
            interactive = {true}
            image={'../assets/spin.png'}
            click={this.spin}
            x={1000}
            y={300}
            scale={'0.3,0.3'}
            anchor={'0.3,0.3'}/>
          <Reels
          col={3}
          row={3}
          state={this.state.state}
          >
          </Reels>

        </Stage>
    );
  }
}
