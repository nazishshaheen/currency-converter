class Country {
    static countriesList = [];
    static promise;
    constructor(name, currencyName, currency, flag) {
        this.name = name;
        this.currencyName = currencyName;
        this.currency = currency;
        this.flag = flag;
        this.addCountryToList()
    }
    addCountryToList = function () {
        Country.countriesList.push(this);
    }

}


async function getCountries() {
    let result = await fetch("https://restcountries.com/v3.1/all");
    let response = await result.json();
    return response;
}

let promise;
getCountries()
    .then((response) => {

        for (let country of response) {
            let currency = (country.currencies) ? Object.keys(country.currencies)[0]: null;

            if (currency) {
                // console.log(country.currencies[currency].name); 
            }
            
            if (country.name.common.toUpperCase().includes('IND')) {
                // console.log(country.currencies);
            }
            
            if (currency) {
                 new Country(country.name.common, country.currencies[currency].name,currency, country.flags.png);
            }
        }
    }).finally(
        ()=>{
            // Country.promise = new Promise((resolve) => {
            //     if (Country.countriesList.length) {
            //         console.log(Country.countriesList.length);
            //         resolve();
            //     }
            // })

            let script  = document.createElement("script");
            script.src = "currency.js";
            script.type = "module";
            document.body.append(script);
        }
    )
    
export default Country;
