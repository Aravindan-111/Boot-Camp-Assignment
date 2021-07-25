function arr(a) {
    // let count = 0;
    // let sum = 0;
    let c = [];
    for (i = 0; i < a.length; i++) {
        if (a[i] > 0) {
            c.push(a[i]);
        }
    }
    //     } else if (a[i] < 0) {
    //         sum = sum + a[i];
    //     }
    // }

    // c.push(sum);
    return c;
}
let z = arr([-5, 10, -3, 12, -9, 5, 90, 0, 1]);
console.log(z);