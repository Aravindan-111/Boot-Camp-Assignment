let getNthElement = (array) => {
    if (array.length > 0) {
        return array[array.length - 1];
    } else {
        return undefined;
    }
}
let ans = getNthElement([]);
console.log(ans);