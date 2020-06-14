// @target: ES6
// @lib: es6,es2015.symbol

interface IOk1 {
    [Symbol.hasInstance](value: any): boolean;
}

interface IOk2 {
    [Symbol.hasInstance]: any;
}

interface IOk3 {
    [Symbol.hasInstance]: never;
}

interface IArgOk1 {
    [Symbol.hasInstance](): boolean;
}

interface IArgOk2 {
    [Symbol.hasInstance](value: any, value2?: any): boolean;
}

interface IArgOk3 {
    [Symbol.hasInstance](value: any, ...rest: any): boolean;
}

interface IArgOk4 {
    [Symbol.hasInstance](...rest: any): boolean;
}

interface IArgOk5 {
    [Symbol.hasInstance](...rest: [any]): boolean;
}

interface IRetOk1 {
    [Symbol.hasInstance](value: any): true;
}

interface IRetOk2 {
    [Symbol.hasInstance](value: any): false;
}

interface IRetOk3 {
    [Symbol.hasInstance](value: any): any;
}

interface IRetOk4 {
    [Symbol.hasInstance](value: any): never;
}

interface IRetOk5 {
    [Symbol.hasInstance](...rest: [any]): true | false;
}

interface IBad1 {
    [Symbol.hasInstance]?: (value: any) => boolean;
}

interface IBad2 {
    [Symbol.hasInstance]: unknown;
}

interface IBad3 {
    [Symbol.hasInstance]: number;
}

interface IArgBad1 {
    [Symbol.hasInstance](value: any, value2: any): boolean;
}

interface IArgBad2 {
    [Symbol.hasInstance](value: any, ...rest: [any]): boolean;
}

interface IArgBad3 {
    [Symbol.hasInstance](...rest: [any, any]): boolean;
}

interface IRetBad1 {
    [Symbol.hasInstance](value: any): unknown;
}

interface IRetBad2 {
    [Symbol.hasInstance](value: any): number;
}

interface IRetBad3 {
    [Symbol.hasInstance](...rest: [any]): true | number;
}

let x: any;
let iOk1: IOk1;
let iOk2: IOk2;
let iOk3: IOk3;
let iArgOk1: IArgOk1;
let iArgOk2: IArgOk2;
let iArgOk3: IArgOk3;
let iArgOk4: IArgOk4;
let iArgOk5: IArgOk5;
let iRetOk1: IRetOk1;
let iRetOk2: IRetOk2;
let iRetOk3: IRetOk3;
let iRetOk4: IRetOk4;
let iRetOk5: IRetOk5;
let iBad1: IBad1;
let iBad2: IBad2;
let iBad3: IBad3;
let iArgBad1: IArgBad1;
let iArgBad2: IArgBad2;
let iArgBad3: IArgBad3;
let iRetBad1: IRetBad1;
let iRetBad2: IRetBad2;
let iRetBad3: IRetBad3;
const rOk1 = x instanceof iOk1;
const rOk2 = x instanceof iOk2;
const rOk3 = x instanceof iOk3;
const rArgOk1 = x instanceof iArgOk1;
const rArgOk2 = x instanceof iArgOk2;
const rArgOk3 = x instanceof iArgOk3;
const rArgOk4 = x instanceof iArgOk4;
const rArgOk5 = x instanceof iArgOk5;
const rRetOk1 = x instanceof iRetOk1;
const rRetOk2 = x instanceof iRetOk2;
const rRetOk3 = x instanceof iRetOk3;
const rRetOk4 = x instanceof iRetOk4;
const rRetOk5 = x instanceof iRetOk5;
const rBad1 = x instanceof iBad1;
const rBad2 = x instanceof iBad2;
const rBad3 = x instanceof iBad3;
const rArgBad1 = x instanceof iArgBad1;
const rArgBad2 = x instanceof iArgBad2;
const rArgBad3 = x instanceof iArgBad3;
const rRetBad1 = x instanceof iRetBad1;
const rRetBad2 = x instanceof iRetBad2;
const rRetBad3 = x instanceof iRetBad3;