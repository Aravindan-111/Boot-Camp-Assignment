let getNthElement = (array, address) => {
    if (array.length > 0) {
        return array[address];
    } else {
        return undefined;
    }
}
let ans = getNthElement([], 1);
console.log(ans);