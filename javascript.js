/*
console.log("hi hello");
var a=2;
a=a+1;
a+=2;
console.log(a);

var mystr="hi ";
mystr+="srikanth";
console.log(mystr);

var b=2.5;
b=b+1;
b=b*2.5;
console.log(b);

var firstletter="";var sec="";
var str="pavan";
firstletter=str[0];
console.log(firstletter);
sec=str[0+1];
console.log(sec);

// ARRAYS AND PUSH ,POP AND SHIFT , UNSHIFT
var arr=[1,2,3,4];
arr[0]=5;
console.log(arr);
var arr1=["hi",2,"hello",4];
var len=arr1[2].length;
console.log(arr1); console.log(arr1[2]); console.log(arr1[2][2]); console.log(len);

var my=["hi","hello"];
my.push(["welcome","to"]);
my.push("wel","tom");
console.log(my);
my.pop();
console.log(my);
my.shift();
console.log(my);
my.unshift("hell with");
console.log(my);

function pushing(arr,item){
    arr.push(item);
    return arr;
}
array=[1,2,3,4];
console.log(pushing(array,6));

function find(arri,item){
    var c=0;
    for(var i=0;i<arri.length;i++){
        if(arri[i]==item){
            c++;
        }
       
    }
    return c;
}
var mi=[1,2,3,4];
console.log(find(mi,4));
// objects in javascript
var dogClass= {
    "name of":"jimme",
    "legs":4,
    "bark":"bow bow",
    "owner name":"gowtham"
};
dogClass.tail=1

console.log(dogClass.tail);
console.log(dogClass);
delete dogClass.bark;
console.log(dogClass);
var nam=dogClass["name of"];
console.log(nam);
dogClass.legs="four";
console.log(dogClass.legs);
console.log(dogClass["owner name"]);

////// instead of switch the below code makes user work easy;
function lookingup(val){
    var result="";
    var lookup={
        "city":"town",
        "person":"own choices",
        "critical situation":"simple solution",
        "fi card":"coming soon",
        "slice card":"arriving today"
    };
    result=lookup[val];
    return result;
}
console.log(lookingup("person"));
console.log(lookingup("slice card"));
console.log(dogClass.hasOwnProperty("tail"));

var nestedArr=[
    "Hello","Welcome","Basar",["insider","outsider","welcome"],"high tech"
]
console.log(nestedArr[3][2].length);

var likes ={
    "pandu":"reading",
    "tharun":"twitter",
    "gowtham":"BTS band",
    "pavan":"electricity",
    "combined likes":[
        "Biryani","IceCream","Drink"
    ]
};
console.log(likes["combined likes"]);
// nested arrays
var plants=[
    {
        "type":"flowers",
        list:[ "rose","jasmine","tulip"]
    },
    {
        "type":"trees",
        list:[
            "mango","coconut","Guava"
        ]
    }
];
var secondplant=plants[0].list[0];
console.log(secondplant);

var friends=[
    {
        "fname":"Ajay",
        "lname":"kanduru",
        "likes":["reading novel","studying","games"]
    },
    {
        "fname":"tharun",
        "lname":"nagella",
        "likes":["surfing internet","studying books","playing games"]
    },
    {
        "fname":"Pavan",
        "lname":"Lalugani",
        "likes":["fast food","skating","solitaire"]
    },
];

function finder(fn,item){
    for(var i=0;i<friends.length;i++){
        if(friends[i].fname==fn){
            return friends[i][item] || "no such item";
        }
    }
    return "no such friend object";
}
console.log(finder("Ajay","likes"));
console.log(finder("sai","lname"));
console.log(finder("Ajay","dis likes"));
console.log(finder("Pavan","lname"));

var r=Math.floor(Math.random()*20);
console.log(r);
console.log(Math.random());

function toint(str){
    return parseInt(str,2);
}
console.log(toint('10011'));

function scope(){
    let i=1;
    if(1){
        let i=2;
        console.log("block scope is ",i);
    }
    console.log("function scope is ",i);
}
scope();
function scope(){
    var i=1;
    if(1){
        var i=3;
        console.log("block scope is ",i);
    }
    console.log("function scope is ",i);
}
scope();

const READ="this"+"read only";

function repeat(str){
    "use strict";
    const use=str+"read only";
   // use=str +" amazing";//returns error because const cannot be updated;
    for(var i=0;i<str.length;i+=2){
        console.log(use);
    }
   
}
repeat("freecodecamp");
// Anonymous Functions
var yes=()=> yes;
console.log(yes);

var strConcat=function(str1,str2) {
    return str1+str2;
};
console.log(strConcat('str',' imp'));

var strConcat=(str1,str2) => str1+str2;

console.log(strConcat('str2',' is imp'));

// Assigning variables of a object;
var voxel={x:12,y:45,z:67};
var x=voxel.x;
var y=voxel.y;
var z=voxel.z;
console.log(x,y,z);
//another way is 
const {x:a1,y:b2,z:c3}=voxel;
console.log(a1,b2,c3);

var weather= {
    today:25,
    tom:24
};
const {today:td,tom:tm}=weather;
console.log(td,tm);
// nested Objects;
const localforecast={
    today:{min:12,max:23},
    tomorrow:{min:13,max:24.7}
};
function maxOfTomWeather(forecast){
    const {tomorrow:{ max: tomweather }}=forecast;
    return tomweather;
}
console.log(maxOfTomWeather(localforecast));
// using arrays
const [z1,x11, ,y12]=[1,2,3,4,5];
console.log(z1,x11,y12);
// creating strings using Template Literals
const person={
    name:"srikanth",
    age:22
};

const greeting=`Hi my name is ${person.name}!
and I am ${person.age} years old`;
console.log(greeting);

const createperson=(name,age,gender)=>{
    return {
        name:name,
        age:age,
        gender,gender
    };
};
console.log(createperson("dike",23,"male"));

const createperson1=(name,age,gender)=>({name,age,gender});
console.log(createperson1("dike",23,"male"));

// Write concise Declarative Functions;

.......//classes.......
class space{
    constructor(name){
        this.name=name;
    }
}
var na=new space('jupiter');
console.log(na);

export function capital(str) {
    return str.toUpperCase();
}
*/
function makeclass(){
    class ther{
        constructor(temp){
            this._temp=5/9*(temp-32);
        }
        get temperature(){
            return this._temp;
        }
        set temperature(updatedtemp){
            this._temp=updatedtemp;
        }
    }
    return ther;
}
const ther=makeclass();
const t=new ther(45);
let temp=t.temperature;
t.temperature=34;
temp=t.temperature;
console.log(temp);