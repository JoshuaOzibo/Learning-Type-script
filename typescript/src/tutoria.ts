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
// eg: Array<string> <> is called generics

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

type Staff = Employee | manager;

function condition(staff: Staff): void{
    if('Employee' in staff){
        console.log('this is a manager')
    }else{
        console.log('this is the employee')
    }
}

let josh = {id: 1, name: 'joshua', department: 'sales'}
let sarah = {id: 2, name: 'sarah', department: 'HR'}

const samsung: manager = {id: 1, name: 'sam', employee: [josh, sarah]}

condition(josh)
condition(samsung)

// combining multiple types

type Book = {id: number; name: String; price: number};
type DiscountedBook = Book & {discount: number};

const books1: Book = {
    id: 1, 
    name: 'hello world',
    price: 15,
}

const books3: DiscountedBook ={
    id: 3,
    name: 'Gabrel book',
    price: 10,
    discount: 5,
}

//computed property in type alias
const propName = "age";

type Animal = {
    [propName]: number;
};

let tiger: Animal = {[propName]: 5};


type params = {a: number, b: number};

const logo = (params: {a: number, b: number}):number => {
    return params.a + params.b
};

let StrandNum: Array<string> =[];

// interface fundamental
interface DeepBook {
    readonly isbn: number;
    title: string;
    author: string;
    genere? : string;
    printauthor(someValue: string): void;
}

const deepWork: DeepBook ={
    isbn: 123,
    title: 'deep work',
    author: 'cal network',
    // printauthor: function (someValue) {
    //    return someValue
    // }
    printauthor: () => {
        console.log(deepWork.author)
    }
}

console.log(deepWork.printauthor('hello world'));
interface Computer {
    readonly id: number,
    brand: string,
    ram: number,
    storage?: string,
    upgradeRam(item: number): number,
};

const compObj: Computer = {
    id: 2,
    brand: 'samsung',
    ram: 10,
    storage: '50gig',
    upgradeRam: (item) =>{
        return compObj.id + compObj. ram + item
    }
}

console.log(compObj);


interface deltaPerson {
    name: string;
    getDetaild(): string;
}

interface DogOwner{
    dogName: string,
    getDog(): string;
}

interface deltaPerson {
    age: number;
};

const newDelta: deltaPerson = {
    name: 'joshua',
    age: 10,
    getDetaild(){
        return `name: ${this.name} , age: ${this.age}`;
    },
};

//merging interfaces 
interface deltaEmployee extends deltaPerson, DogOwner{
    newAge: number;
}

const personEmployed: deltaEmployee ={
    name: 'sam',
    age: 10,
    newAge: 15,
    dogName: 'bingo',
    getDetaild(){
        return `${this.name}, ${this.age}`
    },
    getDog() {
        return `${this.dogName}`
    },
};


console.log(personEmployed);


interface playing {
    name: string;
};

interface DogOwners extends playing {
    dogOwnerDg: string;
}

interface manageItems extends playing {
    managePeopls(): void;
    delefateTasks():void;
}

function getEmployeeFunc(): playing | DogOwner | manageItems{
    let randomNum = Math.random() * 1;

    if(randomNum <= 0.33){
        return {
            name: 'joshua'
        };
    }else if(randomNum <= 0.66){

        return {
            name: "samuel",
        }

    }else{
        return {
            name: 'manager',
            managePeopls(){
                console.log('manager')
            },
            delefateTasks(){
                console.log('delegetor')
            }
        }
    }
}

let newEmployee: playing | DogOwner | manageItems = getEmployeeFunc();

console.log(newEmployee);


// Tuples & Enums in TS
// Tuples helps us to set up an array with fixed length or with fixed types ;
// its importsnt when we want to group different types of values together;

//Tuples: 
// examples:
let tuplesPerson:[string, number] =['sam', 10];

let date: readonly [number, number, number] = [14, 6, 2024];
// console.log(date.push(7)) cannot push because of the readonly; readonly hepls to set either a string , number or a boolean to a static form;

function tuplesForm(): [string, number] {
    return ['josh', 49];
};

//Enums
//this allow us to define a set of named constant

enum statusCode{
    success,
    error
};

Object.values(statusCode).forEach((value) => {
    if(typeof value === 'number'){
        console.log(value)
    }
})

interface codeResponse{
    result: statusCode,
    data: string[];
}

function getCodeResponse():codeResponse {
    return {
        result: statusCode.success,
        data: ['item one', 'item two']
    }
}

const responseResult: codeResponse = getCodeResponse();

// console.log(responseResult)

//challenge
enum UserRole {
    Admin,
    Manager,
    Employee
};

type AliasUser = {id: number, name: string, role: UserRole, contact:[string, string] }

function createUser(user: AliasUser): AliasUser{
    return user;
};

const createdUser:AliasUser = createUser({
    id: 1,
    name: 'michael',
    role: UserRole.Admin,
    contact: ['josh@hmail.com', '1234'],
});

console.log(createdUser);

//type as;

type brd = {
    name: string;
}

let stringVal:any = "this is a string";
let strLth: number = (stringVal as string).length;

let animalStr = '{"Name" : "Eagle"}';
let animalDogStr = '{"breed" : "rott"}';

const parse = JSON.parse(animalStr);
const parseDog = JSON.parse(animalDogStr);

const animalAs = parse as brd;
const DogAs = parseDog as brd;
console.log(animalAs)
console.log(DogAs)

// console.log(parse)

//modules in typescript
// use "moduleDectection": "force", // in the tsconfig.json file to prevent module name repeation errors
// newGit = pick<gitItem, "item", "id", "inde
// x_id">
// newGitItem = Omit<newGit, "index_id">

//Generics
let arr1: Array<string | number> = ['hey', 'hello', 10]

//Generics func
function genericFunc<T>(arg: T): T { // the T can be replaced with anything . and it stands for any type and will be placed later
    return arg
};

const GenFuc = genericFunc<string>('hello world');
genericFunc<number>(10);

interface GenericInterface<B> {
    value: B,
    getValFunc: () => B;
};

const interString: GenericInterface<string> ={
    value: 'h',
    getValFunc(){
        return this.value;
    }
}

async function genFuc<GA> (SAM: GA): Promise<GA>{
    return SAM
}
const getGenFunc = genFuc<string>('');

function genCha(length: number, value: string): string[]{
    let result: string[] = [];
    result = Array(length).fill(value);
    return result;
};

console.log(genCha(6, 'pastor'))

// Generics
function ChaGen<T>(length: number, value: T): Array<T>{
    let linda: T[] = [];
    linda = Array(length).fill(value);
    return linda;
};

console.log(ChaGen<string>(10, '50'));

type Student ={
    name: string,
    age: number
}

const stud: Student ={
    name: 'samuel',
    age: 7
}
type AnimalGen ={
    name: string,
    age: number
}

const animalGen:AnimalGen ={
    name: 'ram',
    age: 10
}

function geno<T extends {name: string; age: number}>(data: T): void{
    console.log(data.name)
    console.log(data.age)
};
geno(stud);