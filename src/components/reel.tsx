import * as React from 'react';
import * as pixi from 'pixi.js';
import { Symbol } from './symbol';
import {Stage, Sprite,SpritePropsType, DisplayObjectContainer} from 'react-pixi';

export class Reel extends React.Component<{symbolCounts: number, index: number}>{
  state = {
    symbols: []
  }
  constructor(props:any) {
    super(props);
  }
  componentDidMount() {
    var sprites = [];
    for(let i = 0; i < this.props.symbolCounts; i++){
      let sprite = React.createElement(Symbol, {x:200*this.props.index, 
      y: 200 * i});
      sprites.push(sprite);
    }
    this.setState({
      symbols: sprites
    })
    var tick = ()=>{
      requestAnimationFrame(tick);
    }
    tick();
  }
  render() {
    
    return (
      <DisplayObjectContainer 
      x={300}
      y={100}
      children={this.state.symbols}/>
    );
  }
}