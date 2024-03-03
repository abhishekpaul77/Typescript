var score = [];
var Heroes = [];
function identityOne(val) {
    return val;
}
//Any---> Should be avoided
function identityTwo(val) {
    return val;
}
//Generics
function identityThree(val) {
    return val;
}
identityThree(69);
identityThree({
    brand: "Bisleri",
    volume: 1,
});
// Array generics
function getsearchProduct(products) {
    //Some DB operations
    var myIndex = 3;
    return products[myIndex];
}
// Arrow declaration
var getMoreProducts = function (products) {
    //Some DB operations
    var myIndex = 7;
    return products[myIndex];
};
function someFunction(valOne, valtwo) {
    return {
        valOne: valOne,
        valtwo: valtwo,
    };
}
// keyof type
function getProperty(obj, key) {
    return obj[key];
}
var x = { a: 1, b: 2, c: 3, d: 4 };
getProperty(x, "a");
// getProperty(x, "m");---> Throws error
var sellable = /** @class */ (function () {
    function sellable() {
        this.cart = [];
    }
    sellable.prototype.addToCart = function (products) {
        this.cart.push(products);
    };
    return sellable;
}());
