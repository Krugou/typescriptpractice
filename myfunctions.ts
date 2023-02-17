function addTwo(num: number) {
	return num + 2;
}

function getUpper(val:string) {
    return val.toUpperCase();
}
function signUpUser(name: string,email: string, isPaid: boolean) {
    console.log(name, email, isPaid);
}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {
    console.log(name, email, isPaid);
}

console.log(addTwo(2));
getUpper("aleksi")

loginUser("aleksi", "aleksi.nokelainen@gmail.com");
export {};

// function getValue(myVal: number): boolean {
//     if (myVal > 5) {
//         return true;
//     }
//     return "200 OK";
// }

const getHello = (name: string): string => {
    return ``;
}

const heros = ["thor", "ironman", "hulk", "captain america"];

heros.map((hero): string => {
    return `hero is ${hero}`
})

function consoleError(errmsg: string): void {
    console.log(errmsg);
}
function handleError(errmsg: string): never {
	throw new Error(errmsg);
}