// Union in TS 
let score:number | string=33

//Both are valid
score=69
score="Paul"

type User={
    name:string;
    id:number
}

type admin={
    username:string;
    id:number
}

let paul:User | admin ={name:"Paul",id:69};
paul={username:"paul07",id:96}

// function getDbId(id:string | number){
//     console.log(`DB Id is ${id}`)
// }
// getDbId(69);
// getDbId("69abc");

function getDbId(id:string | number){
    if(typeof id==="string"){
        id.toUpperCase()
    }
}
getDbId(69);
getDbId("69abc");

// Union of Array
const data:number[]=[1,2,3];
const data2:string[]=["1","2","3"];
const data3:number[] | string[]=["1","2","3"];// This means array can be either fully string or fully numbered,no combination allowed

const data4:(string | number | boolean)[]=[1,"Paul",3,true];//Combination is allowed

let seatAllotment:"Aisle" | "Middle" | "Window"

seatAllotment="Aisle"//--> Allowed
// seatAllotment="crew" ---> Not allowed
