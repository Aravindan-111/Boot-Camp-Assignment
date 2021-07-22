var obj1 = { age: 5, name: "Person 1" };
var obj2 = { age: 5, name: "Person 1" };
if (JSON.stringify(obj1) == JSON.stringify(obj2)) {
    console.log("yes");
} else {
    console.log("no");
}