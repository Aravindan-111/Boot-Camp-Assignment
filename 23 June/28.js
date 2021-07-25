// This code is working properly
// let revString = (str) => {
//     return str.split("").reverse().join("");
// }
// let temp = revString("aravind");
// console.log(temp);


// This is not. Why isn't it working
let revString = (str) => {
    let c = str.split("").reverse().join("");
    return c;
}
let temp = revString("aravind");
console.log(temp);