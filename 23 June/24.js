function arr(a) {
    // let count = 0;
    // let sum = 0;
    let c = [];
    for (i = 1; i <= a; i++) {
        c.push(Math.pow(2, i));
    }
    //     } else if (a[i] < 0) {
    //         sum = sum + a[i];
    //     }
    // }

    // c.push(sum);
    return c;
}
let z = arr(4);
console.log(z);