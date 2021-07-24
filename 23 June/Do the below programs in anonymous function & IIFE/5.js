(function(a) {
    let b = [];
    for (i = 0; i < a.length; i++) {
        if (a[i] < 10) {
            b.push(a[i]);
        } else {
            let c = a[i].toString().split("").reverse().join("");
            if (a[i] == c) {
                b.push(a[i]);
            }
        }
    }
    console.log(b);
})([10, 3, 5, 121]);