import Country from "./allcontries.js";

// Creating Elements

// creating a main div
let mainContainer = document.createElement('div');
// class name to main container
mainContainer.className = 'main-container';
// creating heading in main container
let heading = document.createElement('h2');
// class name to heading
heading.className = 'heading';
// create text in heading
heading.innerText = 'Currency Converter';
// create a paragraph
let paragraph = document.createElement('p');
// class name to paragraph 
paragraph.className = 'paragraph';
// create text in paragraph
paragraph.innerText = 'Enter Amount';
// create input in main container
let inputCurrency = document.createElement('input');
// create type & value in input
inputCurrency.type = 'text';
inputCurrency.value = '1';
// create country converter div
let countryConverter = document.createElement('div');
// class name for country div
countryConverter.className = 'country-converter';
// create a div into country converter for paragraph
let paragraphContainer = document.createElement('div');
// class name for paragraph container
paragraphContainer.className = 'paragraph-container';
// create a 2 div into paragraph container
// create div from container
let fromContainer = document.createElement('div');
// class name for from container
fromContainer.className = 'from-container';
//create  paragraph in from container
let fromPara = document.createElement('p');
// class name for from paragraph
fromPara.className = 'from-para';
// create text in from para
fromPara.innerText = 'From';
// create div To
let toContainer = document.createElement('div');
// class name for To container
toContainer.className = 'to-container';
//create paragraph in To container
let toPara = document.createElement('p');
// class name for To Paragraph
toPara.className = 'to-para';
// create text in To Paragraph
toPara.innerText = 'To';
// create a 2nd div into country converter for select country
let selectCountryContainer = document.createElement('div');
// class name for select country container
selectCountryContainer.className = 'select-country-container';
// create div for selection country
let selectCountry = document.createElement('div');
// class name to selectCountry
selectCountry.className = 'select-country';
// create image in select country
let countryImage = document.createElement('img');
// create src for country image
countryImage.src = '';
// create select for country name
let countryName = document.createElement('div');
let displayFrom = document.createElement('div');
displayFrom.classList.add('disp-none');
let inputElm = document.createElement('input');
inputElm.id = 'input-from';
inputElm.placeholder = 'select country';
countryName.appendChild(inputElm);
countryName.appendChild(displayFrom);
// create arrow between two country
let arrow = document.createElement('i');
// set icon in arrow
arrow.innerHTML = '<i class="fa-solid fa-arrow-right-arrow-left"></i>';
// create div for selection country for to
let selectCountryTo = document.createElement('div');
// class name to selectCountry To
selectCountryTo.className = 'select-country';
// create image in select country To
let countryImageTo = document.createElement('img');
// create src for country image TO
countryImageTo.src = '';
// create select for country name To
let countryNameTo = document.createElement('div');
let displayTo = document.createElement('div');
displayTo.classList.add('disp-none');
let inputElmTo = document.createElement('input');
inputElmTo.id = 'input-to';
inputElmTo.placeholder = 'select country';
countryNameTo.appendChild(inputElmTo);
countryNameTo.appendChild(displayTo);
// amount message container
let amountMsg = document.createElement('div');
// class name to amount message
amountMsg.className = 'amount-msg';
// create a button for exchange rate
let exchangeRate = document.createElement('button');
// create text for button
exchangeRate.innerText = 'Get Exchange Rate';


// Appending Elements

// append main container into body
document.body.appendChild(mainContainer);
// append heading into main container
mainContainer.appendChild(heading);
// append paragraph in main container
mainContainer.appendChild(paragraph);
// append input in  main container
mainContainer.appendChild(inputCurrency);
// append country converter div in main container
mainContainer.appendChild(countryConverter);
// append paragraph container in country converter
countryConverter.appendChild(paragraphContainer);
// append from container in paragraph container
paragraphContainer.appendChild(fromContainer);
// append from paragraph in from container
fromContainer.appendChild(fromPara);
// append To container in paragraph container
paragraphContainer.appendChild(toContainer);
// append to paragraph in tocontainer
toContainer.appendChild(toPara);
// append select country container into country converter
countryConverter.appendChild(selectCountryContainer);
// append select country in country converter
selectCountryContainer.appendChild(selectCountry);
// append country image in select country
selectCountry.appendChild(countryImage);
// append country name in selectcountry container
selectCountry.appendChild(countryName);
// append arrow in country converter container
selectCountryContainer.appendChild(arrow);
// append select country To in country converter
selectCountryContainer.appendChild(selectCountryTo);
// append country image in select country To
selectCountryTo.appendChild(countryImageTo);
// append country name To in selectcountry container To
selectCountryTo.appendChild(countryNameTo);
// append amount message to main container
mainContainer.appendChild(amountMsg);
// append exchange rate in main container
mainContainer.appendChild(exchangeRate);


let dropdowns = document.querySelectorAll('.country-converter select');
let button = document.querySelector('button');
let fromCurr = document.querySelector('.from-container select');
let toCurr = document.querySelector('to-container select');
let msg = document.querySelector('.amount-msg');



if (Country.countriesList.length) {

    for (let country of Country.countriesList) {
        // console.log(country);
        let newOptionFrom = document.createElement('p');
        if (country.name.length > 10) {
            newOptionFrom.innerText = ` ${shortForm(country.name)}, ${(country.currency.length > 6) ? currencyShortForm(country.currency) : country.currency}`;
        } else {
            newOptionFrom.innerText = ` ${country.name},${(country.currency.length > 6) ? currencyShortForm(country.currency) : country.currency}`;
        }
        newOptionFrom.value = country.currency;
        newOptionFrom.id = country.name;

        if (country.name.toLowerCase().includes("saudi arabia")) {
            inputElm.value = country.currency;

            setFlag(country.name, "from");
        }

        newOptionFrom.addEventListener('click', (e) => {
            setFlag(e.target.id, "from");
            addValue(e.target.value, 'from');
        })

        let newOptionTo = document.createElement('p');
        if (country.name.length > 10) {
            newOptionTo.innerText = ` ${shortForm(country.name)}, ${(country.currency.length > 6) ? currencyShortForm(country.currency) : country.currency}`;
        } else {
            newOptionTo.innerText = ` ${country.name},${(country.currency.length > 6) ? currencyShortForm(country.currency) : country.currency}`;
        }
        newOptionTo.value = country.currency;
        newOptionTo.id = country.name;

        if (country.name.toLowerCase().includes("india") && !country.name.includes("British")) {
            inputElmTo.value = country.currency;
            setFlag(country.name, "to");
        }

        newOptionTo.addEventListener('click', (e) => {
            setFlag(e.target.id, "to");
            addValue(e.target.value, 'to');
        })

        displayFrom.append(newOptionFrom);
        displayTo.append(newOptionTo);

    }
    if (inputCurrency.value.length && !isNaN(Number(inputCurrency.value))) {
        exchangeRate.addEventListener('click', () => {
            let response = currencyExchanger(inputElm.value, inputElmTo.value)
            response.then((data) => {
                setValues(Number(inputCurrency.value), Number(data.conversion_rate))
            })
        })
    }
    inputElm.addEventListener('click', (e) => {
        displayFrom.classList.toggle("disp-none");
    });
    
    inputElm.addEventListener('keyup',(e) =>{
        inputCapitalizer(e);
    })

    inputElmTo.addEventListener('click', (e) => {
        displayTo.classList.toggle("disp-none");
    });
    inputElm.addEventListener('change', (e) => {
        displayFrom.classList.toggle("disp-none");
    });

    inputElmTo.addEventListener('change', (e) => {
        displayTo.classList.toggle("disp-none");
    });
    inputElmTo.addEventListener('keyup',(e) =>{
        inputCapitalizer(e);
    })

    arrow.addEventListener("click", (e) => {
        swap(inputElm.value, inputElmTo.value);
        displayTo.classList.toggle("disp-none");
        displayFrom.classList.toggle("disp-none");
        e.stopPropagation();
    })
}

function setFlag(name, caller) {
    Country.countriesList.forEach((country) => {
        if (country.name.includes(name)) {
            if (caller === 'from') {
                countryImage.src = country.flag;
                return;
            } else {
                countryImageTo.src = country.flag;
                return;
            }
        }

    });
}

function shortForm(name) {
    return name.split(' ')
        .map((word) => {
            return word[0];
        })
        .join(' ')
        .toUpperCase()
}

function currencyShortForm(name) {
    let arr = name.split(' ');
    return arr[arr.length - 1].toUpperCase();
}

async function currencyExchanger(base, target) {
    let url = `https://v6.exchangerate-api.com/v6/374f4e9c894ee9fe7b353efa/pair/${base}/${target}`
    let result = await fetch(url);
    return await result.json();
}
function setValues(base, exRate) {
    let total = calculator(base, exRate);
    amountMsg.innerText = total;
}

function calculator(base, exRate) {
    if(1 > exRate){
        return (base * exRate);
    }else{
        return (base * exRate).toFixed(2);
    }
}

function removeEvents(event) {
    for (let country of Country.countriesList) {
        country.removeEventListener(event);
    }
}

function addValue(value, caller) {
    if (caller === "from") {
        displayFrom.classList.toggle("disp-none");
        inputElm.value = value;
    } else {
        displayTo.classList.toggle("disp-none");
        inputElmTo.value = value;
    }
}
function swap(from, to) {
    addValue(to, 'from');
    addValue(from, "to");
    let temp = countryImage.src;
    countryImage.src = countryImageTo.src;
    countryImageTo.src = temp;
}

function inputCapitalizer(e){
    e.target.value = e.target.value.toUpperCase();
}


// amountMsg.innerHTML = `${inputCurrency} ${newOptionFrom.id} = ${calculator} ${newOptionTo.id}`;