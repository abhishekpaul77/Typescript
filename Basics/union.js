// Union in TS 
var score = 33;
//Both are valid
score = 69;
score = "Paul";
var paul = { name: "Paul", id: 69 };
paul = { username: "paul07", id: 96 };
// function getDbId(id:string | number){
//     console.log(`DB Id is ${id}`)
// }
// getDbId(69);
// getDbId("69abc");
function getDbId(id) {
    if (typeof id === "string") {
        id.toUpperCase();
    }
}
getDbId(69);
getDbId("69abc");
// Union of Array
var data = [1, 2, 3];
var data2 = ["1", "2", "3"];
var data3 = ["1", "2", "3"]; // This means array can be either fully string or fully numbered,no combination allowed
var data4 = [1, "Paul", 3, true]; //Combination is allowed
var seatAllotment;
seatAllotment = "Aisle"; //--> Allowed
// seatAllotment="crew" ---> Not allowed
