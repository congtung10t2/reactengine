import * as React from 'react';
import * as pixi from 'pixi.js';
import {Stage, Sprite} from 'react-pixi';
const SPEED = 0.005;
const element = {
}
export class App extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {
    var tick = () => {
      requestAnimationFrame(tick);
    };
    tick();
  }

  render() {
    return (
        <Stage
        width={1200}
        height={800}>
        <Sprite
            image={'../assets/cupcake.png'}
            x={100}
            y={300}
            scale={new pixi.Point(0.25,0.25)}
            pivot={new pixi.Point(640/2, 577/2)}/>
        </Stage>
          
    );
  }
}
