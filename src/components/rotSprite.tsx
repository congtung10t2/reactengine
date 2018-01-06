import * as React from 'react';
import * as pixi from 'pixi.js';
import {Stage, Sprite,SpritePropsType} from 'react-pixi';

export class RotSprite extends React.Component<{rotSpeed:number, x:number, y:number}> {
  state = {
    active: false,
    rotation: 0
  }
  constructor(props:any) {
    super(props);
  }
  componentDidMount() {

    var tick = ()=>{
      let rotation = this.state.active?this.props.rotSpeed:0;
      this.setState({
        active: this.state.active,
        rotation: this.state.rotation + rotation
      })
      requestAnimationFrame(tick);
    }
    tick();
  }
  callback = () =>{
    this.setState({
      active: true
    })
  }
  
  render() {
    
    return (
      
        <Sprite
            interactive = {true}
            rotation={this.state.rotation}
            click={this.callback}
            image={'../assets/cupcake.png'}
            x={this.props.x}
            y={this.props.y}
            scale={'0.5,0.5'}
            anchor={'0.5,0.5'}/>
    );
  }
}