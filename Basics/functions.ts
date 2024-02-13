function addTwo(num:number):number{
    return num +2;
    // return "string"---> not possible 
}

function getUpper(val:string){
    return val.toUpperCase();
}

function signUp(name:string,email:string,isPaid:boolean){}

let login=(name:string,email:string,isPaid:boolean=false)=>{}

addTwo(5);

getUpper("Paul");

signUp("Paul","abc@gmail.com",true);

login("Paul","abc@gmail.com");


// This is a special case, we cant return two different types, it needs extra learning
// function getValue(myVal:number):boolean{
//     if(myVal>5){
//         return true
//     }
//     return "200 OK"
// }

const getHello=(s:string):string=>{
    return "Hello";
}

const heros=["Thor","Ironman","Ironman"]
heros.map((hero):string=>{
    return `Hero is ${hero}`;
})

function consoleError(errMsg:string):void{
    console.log();
}

function handleError(errMsg:string):never{
    throw new Error(errMsg);
}

export{};