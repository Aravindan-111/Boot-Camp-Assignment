fetch("https://restcountries.eu/rest/v2/all")
    .then((resp) => resp.json())
    .then((result) => {
        let a = result.filter(sd => (sd.currencies[0].code) == "USD");
        let b = a.map(as => (as.name));
        console.log(b);
    })