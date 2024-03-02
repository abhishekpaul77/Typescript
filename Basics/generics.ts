const score: Array<number> = [];
const Heroes: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
  return val;
}

//Any---> Should be avoided
function identityTwo(val: any): any {
  return val;
}

//Generics
function identityThree<Type>(val: Type): Type {
  return val;
}

identityThree(69);

//Implementing your own type
interface Bootle {
  brand: string;
  volume: number;
}

identityThree<Bootle>({
  brand: "Bisleri",
  volume: 1,
});

// Array generics
function getsearchProduct<T>(products: T[]): T {
  //Some DB operations
  const myIndex = 3;
  return products[myIndex];
}

// Arrow declaration
const getMoreProducts = <T>(products: T[]): T => {
  //Some DB operations
  const myIndex = 7;
  return products[myIndex];
};

interface DataBase {
  connection: string;
  userename: string;
  password: string;
}

function someFunction<T, U extends DataBase>(valOne: T, valtwo: U): object {
  return {
    valOne,
    valtwo,
  };
}

// keyof type
function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
  return obj[key];
}
 
let x = { a: 1, b: 2, c: 3, d: 4 };
 
getProperty(x, "a");
// getProperty(x, "m");---> Throws error


class sellable<T>{
  public cart:T[]=[];

  addToCart(products:T){
    this.cart.push(products);
  }
  
}
