"use strict";
//Class Introduction
Object.defineProperty(exports, "__esModule", { value: true });
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
var User = /** @class */ (function () {
    function User(email, name) {
        this.email = email;
        this.name = name;
        this.city = "Delhi";
    }
    return User;
}());
var Paul = new User("Ap@.com", "Paul");
