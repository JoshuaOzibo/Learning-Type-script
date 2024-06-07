"use strict";
{
    {
        1;
    }
}
// Primitive types
// Note: types in ts includes: 
//string
//number
//bigint
//boolean
//undefined
//null
//symbol
// let unit : number ;
// unit = 5
// let arrValue: object = [1, 3, 5, 7];
// console.log(arrValue)
// let id: number = 5;
// let firstName: string = 'joshua';
// let hasGod: boolean = true;
//Note : A union type is a variable that can be assigned more than one type:
//to specify more than one type to a variable;
// let age: string | number;
// age = 26;
// age = '26';
// let joshHasDog: string | boolean;
// joshHasDog = 'yes'
{
    {
        2;
    }
}
//Reference Types
//Arrays in TypeScript
// let info: (number | boolean | object)[] = [
//     {
//         name: 'hello'
//     },
// ];
// any[] can allow any types;
// any basically reverts TypeScript back into JavaScript
// let arr: any[] = ['hello', 1, true, {name: 'josh'}];
// let person: (string | number | boolean)[] = ['Danny', 1, true];
// person[1] = {name: 'jsh'}
//Note: A tuple is an array with fixed size and known datatypes. They are stricter than regular arrays.
// let person: [string, number, boolean] = ['Danny', 1, true];
// person[1] = 10;
{
    {
        3;
    }
}
//Functions in TypeScript
//We can define what the types the function arguments should be, as well as the return type of the function:
function circle(diam) {
    return 'The circumfrence is ' + Math.PI * diam;
}
circle(10);
//Arrow func;
const math = (num1, num2) => {
    return 'Num1 + num2' + num1 + num2;
};
math(5, 8);
const add = (a, b, c) => {
    console.log(c);
};
add(5, 4, 'I could pass a number, string, or nothing here!');
