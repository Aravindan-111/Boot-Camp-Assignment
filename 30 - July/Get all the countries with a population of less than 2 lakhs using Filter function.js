fetch("https://restcountries.eu/rest/v2/all")
    .then((resp) => resp.json())
    .then((result) => {
        let Asia_countries = result.filter(re => re.population < 200000);
        console.log(Asia_countries);
    })