import * as React from 'react';
import * as pixi from 'pixi.js';
import {Stage, Sprite,SpritePropsType} from 'react-pixi';
let state: any;

export class App extends React.Component {
  isClick = false;
  rotation = 0;
  allsprite: any[] = [];
  constructor(props:any) {
    super(props);
    this.state = {rotation: 0};
    for(let i = 0; i < 10; i++){
      let sprite = React.createElement(Sprite, {
        interactive: true,
        image: '../assets/cupcake.png',
        x:100+Math.random()*13121231233 % 1000,
        y:300,
        scale:'0.5,0.5',
        rotation:50,
        
      });
      this.allsprite.push(sprite);
    }
    
  }
  componentDidMount() {
    
    setInterval(()=>{
      if(this.isClick) {
        this.rotation++;
        for(let i = 0; i < 10; i++){
          this.allsprite.forEach(element=>{
            element.setState({rotation: this.rotation++})
          })
        }
        this.setState({rotation: this.rotation})
      }
    }, 100)
  }
  
  callback = ()=>{
    this.isClick = !this.isClick;
    
  }
  
  render() {
    return (
        <Stage
        width={1200}
        height={800}
        children={this.allsprite}/>
       
          
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