//else if ladder
//  let salary = 180000
//     if(salary<=19999 && salary>=10000){
//         console.log("You are a E grade employee");
//     }else if(salary<=39999 && salary>=20000){
//         console.log("You are an D Grade Employee");
//     }else if(salary<=59999 && salary>=40000){
//         console.log("You are an c Grade Employee");
//     }else if(salary<=79999 && salary>=60000){
//         console.log("You are an B Grade Employee");
//     }else if(salary<=100000 && salary>=80000){
//         console.log("You are an A Grade Employee");
//     }else if(salary>=100000){
//         console.log("salary not within a desired range")
//     }else{
//      console.log("your salary ${salary} you are a contractor employee");
//     }

let b = "teamlead"
let access;
switch (b) {
    case "manager":
        access = console.log("all access")
        return (access);
    case "teamlead":
        access = console.log("limit access")
        return (access);
    case "developer":
        access = console.log("access for developing")
        return (access);
    case "testing":
        access = console.log("access for Testing")
        return (access);
    case "Maintainence":
        access = console.log("access for maintainence")
        return (access);
    default:
        access = console.log("none")
        return (access);
}