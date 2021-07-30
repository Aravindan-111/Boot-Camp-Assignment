fetch("https://restcountries.eu/rest/v2/all")
    .then((resp) => resp.json())
    .then((result) => {
        let a = result.forEach((re) => {
            console.log("name:", re.name);
            console.log("capital:", re.capital);
            console.log("flag:", re.flag);
            console.log("---------------------------------")
        })
    })