import * as React from 'react';
import * as pixi from 'pixi.js';
import {Stage, Sprite,SpritePropsType, DisplayObjectContainer} from 'react-pixi';

export class Reels extends React.Component<{col:number, row:number}>{
  state = {
    reels: [],
    rotation: 0
  }
  constructor(props:any) {
    super(props);
  }
  componentDidMount() {

  }
  callback = () =>{

  }
  
  render() {
    
    return (
      <DisplayObjectContainer
      children={this.state.reels}/>
    );
  }
}