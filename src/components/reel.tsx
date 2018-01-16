import * as React from 'react';
import * as pixi from 'pixi.js';
import { Symbol } from './symbol';
import {Stage, Sprite,SpritePropsType, DisplayObjectContainer} from 'react-pixi';
interface props 
{
    symbolCounts: number;
    index: number;
    state: string;
    maxSpeed: number;
    accelerate: number;
    stopSpeed: number;
    startSpeed: number;
}
export class Reel extends React.Component<props>{
  state = {
      baseY: 0,
      speed: 0
  }
  constructor(props:any) {
    super(props);
  }
  renderSymbol() {
    var sprites = [];
    for(let i = 0; i < this.props.symbolCounts; i++){
      let sprite = React.createElement(Symbol, {x:200*this.props.index, 
      y: 200 * i + this.state.baseY, key:i});
      sprites.push(sprite);
    }
    return sprites;
  }

  componentDidMount() {
    var tick = ()=>{
      if(this.props.state == "spin"){
        if(this.state.speed == 0){
            this.state.speed = this.props.startSpeed;
        }
        let speed = this.state.speed + this.props.accelerate;
        let adjustSpeed = speed < this.props.maxSpeed?
                    speed: this.props.maxSpeed;
        this.setState({
            speed:adjustSpeed
        })
      }
      if(this.props.state == "stopping"){
          if(this.state.speed > this.props.stopSpeed){
              this.state.speed -= this.props.accelerate;
          }
      }
      this.setState({
        baseY: this.state.baseY + this.state.speed
      })
      requestAnimationFrame(tick);
    }
    tick();
  }

  render() {
    let rect = new PIXI.Graphics();
    rect.drawRect(100, 40, 800, 600);
    return (
      <DisplayObjectContainer 
      x={300}
      mask={rect}
      y={100}>
      {this.renderSymbol()}
      </DisplayObjectContainer>
    );
  }
}