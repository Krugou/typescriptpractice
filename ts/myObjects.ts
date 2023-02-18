// const User = {
//     name: "Aleksi",
//     email: "aleksi.nokelainen@gmail.com",
//     isActive: true,
// }
// function createUser({ name: string, isPaid: boolean }) {
    
// }
// createUser({ name: "aleksi", isPaid: false })

// function createCourse(): { name: string, price: number } {
//     return { name: "React", price: 100 }
// }


type CarDetails = {
    name: string;
    price: number;
    maker: string;
    tyres: number;
    fuel: string;
}

function createCar(carDetails: CarDetails) {
    return carDetails;
}

createCar({ name: "BMW", price: 100000, maker: "BMW", tyres: 4, fuel: "diesel" });


type User = {
    name: string;
    email: string;
    isActive: boolean;
}

function createUser(user: User) {
    return user;
}
export {};