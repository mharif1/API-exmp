const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data));
}

const displayCountries = countries =>{
    // for(const country of countries){
    //     console.log(country)
    //     const countriesContainer = document.getElementById('countries-container')
    //     const countriesDiv = document.createElement('div')
    //     countriesDiv.innerHTML = `
    //     <h3>Countries Name : ${country.continents}</h3>
    //     <p>Area : ${country.area}</p>
    //     <p>Capital : </p>

    //     `
    //     countriesContainer.appendChild(countriesDiv)
    // }
    const countriesContainer = document.getElementById('countries-container')
    countries.forEach( country => {
        const countryDiv = document.createElement('div')
        countryDiv.classList.add('country')
        countryDiv.innerHTML=`
        <h3>Country Name : ${country.name.common}</h3>
        <p>Country Area : ${country.area}</p>
        <p>Capital :${country.capital}</p>
        
        `
        countriesContainer.appendChild(countryDiv)
    
    });




}

loadCountries()