let sum = (a) => {
    let count = 0;
    for (i = 0; i < a.length; i++) {
        count = count + a[i];
    }
    console.log(count);
}
sum([1, 5, 67, 54, 98, 78]);