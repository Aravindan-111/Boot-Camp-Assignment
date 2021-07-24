let palindrome = (array) => {
    let c = [];
    for (i = 0; i < array.length; i++) {
        if (array[i] < 10) {
            c.push(array[i]);
        } else {
            let b = array[i].toString().split("").reverse().join("");
            if (b == array[i]) {
                c.push(array[i]);
            }
        }
    }
    return c;
}
console.log(palindrome([324, 212, 2, 6, 234, 121]));