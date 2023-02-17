const User = {
    name: "Aleksi",
    email: "aleksi.nokelainen@gmail.com",
    isActive: true,
}
function createUser({ name: string, isPaid: boolean }) {
    
} 
createUser({ name: "aleksi", isPaid: false })

function createCourse(): { name: string, price: number } {
    return { name: "React", price: 100 }
}



export {};