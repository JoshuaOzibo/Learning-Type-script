//Examples 1

let manName: string = 'joshua';

const newMan = manName.charAt(2)
console.log(newMan)

let number:number = 10.45;

let newNumber = Math.round(number);
console.log(newNumber);

const isRainning:boolean = false;

isRainning ? console.log('yes its rainning') : console.log('error in code...');

//union types 
let itemtype: string | number = 10;
itemtype = '100';

//any type 
let sureType: any = 5;
sureType = 'sam';

let orderStatus: 'processing' | 'shiped' | 'delevered' = "processing";
orderStatus = 'shiped';

// orderStatus ='delete'; // error because delete is not among the type


//Arrays in typescript;
const pricesArray: string[] =  ['100', '20', '50']

let prices: (number | string )[] = [100, 20, 400, 'jhg'];

let emptyArray:[] = []; // empty array in typedscript
let emptyNumberArray: number[] = []; // empty number array in typedscript

//Arrays in typescript;

let objectTyped: {name: string}= {name: '10'};

//for optional object u can use "?" if its avaliable or not;
let book1 = {title: 'book', cost : 20};
let book2 = {title: 'newBoook'};

//using "?" in the below example;
let bookItems: {title: string, cost?: number}[] = [book1, book2]; //{}[] means object of array

//functions in typescript;
function sayName(name: string){

    console.log(name.toUpperCase());
};

sayName('Joshua');

//Arror func typed tith the return typed
const NumberType =(num1: number): number=> {
    console.log(num1 + 5)
    return num1 + 3
}
NumberType( 10)

let charNames: string[] = ['joshua', 'michael', 'ozibo'];

function newName(name: string): boolean{
    if(charNames.includes(name)){
        return true;
    }else{
        return false;
    }
}
console.log(newName('ozibo'))

//union types as func parameters and type guard

function processInput(str: string | number){

    if(typeof str === 'number' ){
        console.log(str * 5)
    }else{
        console.log(str.toUpperCase());
    }
};
processInput(10)
processInput('yes');

type User = {id: number; name: string; isActive: boolean};

const johnName: User = {
    id: 1,
    name: 'john',
    isActive: true,
};
const success: User = {
    id: 1,
    name: 'success',
    isActive: false,
};

console.log(success, johnName);

//challange;
type Employee = {id: number; name: string; department: string};
type manager = {id: number; name: string; employee: Employee[]}

type staff = Employee | manager;

function condition(staff: staff): void{
    if('employee' in staff){
        console.log('this is an manager')
    }else{
        console.log('this is the employee')
    }

}

let josh = {id: 1, name: 'joshua', department: 'sales'}
let sarah = {id: 2, name: 'sarah', department: 'HR'}

condition(josh)
condition(sarah)