import * as React from 'react';
import * as pixi from 'pixi.js';
import {Stage, Sprite} from 'react-pixi';
const SPEED = 0.005;
export class App extends React.Component {
  constructor() {
    super();
    this.state = {rotation: 0};
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
        width={600}
        height={800}>

        </Stage>
          
    );
  }
}
