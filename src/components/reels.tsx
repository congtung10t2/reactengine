import * as React from 'react';
import * as pixi from 'pixi.js';
import {Stage, Sprite,SpritePropsType, DisplayObjectContainer} from 'react-pixi';
import {Reel} from './reel'

export class Reels extends React.Component<{col:number, row:number, state:string}>{
  state = {
    reels: []
  }
  constructor(props:any) {
    super(props);
  }

  componentDidMount() {

  }

  renderReels():any{
    var reels = [];
    for(let i = 0; i < this.props.col; i++){
       reels.push(<Reel key={i}
                        symbolCounts={this.props.row}
                        maxSpeed={60}
                        startSpeed={-10}
                        accelerate={20}
                        state={this.props.state}
                        index={i}/>);
    }
    return reels;
  }
  

  render() {
    
    return (
      <DisplayObjectContainer>
        {this.renderReels()}
      </DisplayObjectContainer>
    );
  }
}