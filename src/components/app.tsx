import * as React from 'react';
import * as pixi from 'pixi.js';
import {Stage, Sprite,SpritePropsType} from 'react-pixi';
import { RotSprite } from './rotSprite';
export class App extends React.Component {
  state ={
    sprites: []
  };
  
  constructor(props:any) {
    super(props);
  }
    
  componentDidMount() {
    var sprites = [];
    for(let i = 0; i < 10; i++){
      let sprite = React.createElement(RotSprite, {rotSpeed: 10, x:200*i, 
      y: 200});
      sprites.push(sprite);
    }
    this.setState({
      sprites: sprites
    })
  }

  render() {
    return (
        <Stage
        width={1200}
        height={800}
        children={this.state.sprites}/>
    );
  }
}
 /*<Sprite
            interactive = {true}
            click = {this.callback}
            rotation={(this.state as any).rotation}
            image={'../assets/cupcake.png'}
            x={100}
            y={300}
            scale={'0.5,0.5'}
            anchor={'0.5,0.5'}/>*/