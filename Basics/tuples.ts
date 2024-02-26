//Array
let user: (string | number)[] = [1, 2, 3, "Paul"]; //Here string & number can be in any order

//Tuples
let user2: [string, number] = ["Paul", 69]; //Here string & number needs to be in a specific order and must follow a strict sequence

let rgb: [number, number, number] = [255, 22, 21];

type User = [number, string];

const newUser: User = [123, "Abhishek"]; //Must follow User type in order

newUser.push[1] = "call me";//This is okay

//Issue with tupple is that we can use array methods like push and pop to insert any type we want, but it shouldnt be allowed
// newUser.push(true);// Looks like it got fixed now

export{}
