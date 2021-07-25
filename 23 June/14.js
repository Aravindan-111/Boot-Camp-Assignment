function isEven(num) {
    if (num % 2 == 0 && Number.isInteger(num)) {
        console.log(true);
    } else if (num % 2 != 0 && Number.isInteger(num)) {
        console.log(false);
    } else {
        console.log(-1);
    }
}

isEven(1.1);