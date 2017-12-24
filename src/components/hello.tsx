import * as React from "react";
import * as PIXI from "pixi.js"
export interface HelloProps { compiler: string; framework: string; }

export const Hello = (props: HelloProps) => <h1>Hello from aaa{props.compiler} and {props.framework}!</h1>;