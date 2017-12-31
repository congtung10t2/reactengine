import * as React from 'react';
import * as pixi from 'pixi.js';
import {Stage, Sprite} from 'react-pixi';
const SPEED = 0.005;
const element = {
}
let state: any;
export class App extends React.Component {
  isClick = false;
  rotation = 0;
  constructor() {
    super();
    this.state = {rotation: 100};


  }
  componentDidMount() {
    var tick = () => {
      let alpha = 0.1
      this.setState({rotation: (this.state as any).rotation + alpha})
      
      requestAnimationFrame(tick);
    };
    tick();
  }

  callback(){
    this.isClick = true;
    console.log("success " + this.isClick);

  }

  render() {
    return (
        <Stage
        width={1200}
        height={800}>
        <Sprite
            interactive = {true}
            click ={this.callback}
            rotation ={(this.state as any).rotation}
            image={'../assets/cupcake.png'}
            x={100}
            y={300}
            scale={new pixi.Point(0.25,0.25)}
            pivot={new pixi.Point(640/2, 577/2)}/>
        </Stage>
          
    );
  }
}
