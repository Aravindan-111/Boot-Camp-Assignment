    fetch("https://restcountries.eu/rest/v2/all")
        .then((resp) => resp.json())
        .then((result) => {
            let Asia_countries = result.filter(re => re.region == "Asia");
            console.log(Asia_countries);
        })