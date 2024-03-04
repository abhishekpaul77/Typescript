"use strict";
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
// class User{
//     readonly city:string="Delhi";
//     constructor(public email:string,private name:string){
//     }
// }
//Getters and Setters
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.city = "Delhi";
        this.course_Count = 1;
    }
    get goodleEmail() {
        return `Your email id is ${this.email}`;
    }
    get courseCount() {
        return this.course_Count;
    }
    // Setters dont have any return type
    set courseCount(courseNumber) {
        if (courseNumber <= 1) {
            throw new Error("Coursenumber should be more than 1");
        }
        else {
            this.course_Count = courseNumber;
        }
    }
    deleteToken() {
        console.log("Token deleted");
    }
}
const Paul = new User("Ap@.com", "Paul");
// Paul.city="Kerela"--> Only readonly
