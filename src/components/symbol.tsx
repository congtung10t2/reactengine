import * as React from 'react';
import * as pixi from 'pixi.js';
import {Stage, Sprite,SpritePropsType} from 'react-pixi';

export class Symbol extends React.Component<{x:number, y:number}> {
  constructor(props:any) {
    super(props);
  }
  render() {
    
    return (
      
        <Sprite
            interactive = {true}
            image={'../assets/cupcake.png'}
            x={this.props.x}
            y={this.props.y}
            scale={'0.3,0.3'}
            anchor={'0.3,0.3'}/>
    );
  }
}