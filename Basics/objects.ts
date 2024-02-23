// const user={
//     name:"Paul",
//     email:"abc@gamil.com",
//     isActive:true
// }

// function createUser({name:string,isPaid:boolean}){}

// let newUser={
//     name:"Paul",
//     email:"abc@gamil.com",
//     isPaid:false
// }

// createUser(newUser);

// function createCourse():{name:string,price:number}{
//     return {name:'react.js',price:499}
// }

//Type Alias
// type User={
//     name:string;
//     email:string;
//     isActive:boolean
// }

// function createUser(user:User):User{
//     return {name:"",
//         email:"",
//         isActive:false}
// }

// createUser({name:"Paul",email:"abc@gmail.com",isActive:true});

type User={
    readonly _id:string;
    name:string;
    email:string;
    isActive:boolean;
    cardDetails?:number
}

let myUser:User={
    _id:"",
    name:"abc",
    email:"abc@gmail.com",
    isActive:true
}

myUser.name="xyz";
// myUser._id='s'--->Cannot be done


type cardNumber={
    cardnumber:string
}
type cardDate={
    cardDate:string
}

//Concating types
type cardDetails=cardNumber & cardDate &{
    cvv:number;
}

export{}