let aana = (a) => {
    let b = [];
    for (i = 0; i < a.length; i++) {
        if (a[i] % 2 != 0) {
            b.push(a[i]);
            // console.log(b);
        }
    }
    console.log(b);
}
aana([2, 4, 5, 7, 9]);