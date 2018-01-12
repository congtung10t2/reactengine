import * as React from 'react';
import * as pixi from 'pixi.js';
import {Stage, Sprite,SpritePropsType} from 'react-pixi';
import {Reels} from './reels'
export class App extends React.Component {
  state ={
    sprites: []
  };
  
  constructor(props:any) {
    super(props);
  }
    
  componentDidMount() {
  }

  render() {
    return (
        <Stage
        width={1200}
        height={800}>
          <Reels
          col={3}
          row={3}>
          </Reels>
        </Stage>
    );
  }
}
