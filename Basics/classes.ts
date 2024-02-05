//Class Introduction

//  class User{
//     email:string
//     name:string
//     readonly city:string="Delhi"
//     constructor(email:string,name:string){
//         this.email=email;
//         this.name=name;
//     }
// }

//Private & public class

// class User{
//     public email:string;
//     private name:string;
//     //Or you can declare it like this #name ---> Javacript exclusive command but not for typescript
//     readonly city:string="Delhi";
//     constructor(email:string,name:string){
//         this.email=email;
//         this.name=name;
//     }
// }

class User{
    readonly city:string="Delhi";
    constructor(public email:string,private name:string){
       
    }
}

const Paul=new User("Ap@.com","Paul");
// Paul.city="Kerela"--> Only readonly

export{}