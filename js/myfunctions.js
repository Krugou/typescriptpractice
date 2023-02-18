"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) {
    console.log(name, email, isPaid);
}
let loginUser = (name, email, isPaid = false) => {
    console.log(name, email, isPaid);
};
console.log(addTwo(2));
getUpper("aleksi");
loginUser("aleksi", "aleksi.nokelainen@gmail.com");
// function getValue(myVal: number): boolean {
//     if (myVal > 5) {
//         return true;
//     }
//     return "200 OK";
// }
const getHello = (name) => {
    return ``;
};
const heros = ["thor", "ironman", "hulk", "captain america"];
heros.map((hero) => {
    return `hero is ${hero}`;
});
function consoleError(errmsg) {
    console.log(errmsg);
}
function handleError(errmsg) {
    throw new Error(errmsg);
}
