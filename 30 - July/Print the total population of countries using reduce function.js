fetch("https://restcountries.eu/rest/v2/all")
    .then((resp) => resp.json())
    .then((result) => {
        let a = result.map(po => po.population);
        //[population];
        let b = a.reduce(function(a, c) {
            return a + c;
        })
        console.log(b);
    })