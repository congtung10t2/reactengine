export type AnimatorOptions = {
  maxSpeed: number,
  startSpeed: number,
  stopSpeed: number,
  acceleration: number,
  deceleration?: number,
}
enum AnimatorState { Spin, ReadyToStop, Stopping, Stopped }
export class Animator {
    currentState = AnimatorState.Stopped;
    constructor(private maxSpeed: number,private startSpeed: number, stopSpeed: number, acceleration: number, deceleration: number){

    }
    update(){

    }
}