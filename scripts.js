const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues(){
   const inputCurrencyValue = document.querySelector(".input-currency").value 
   const currencyValueToConvert = document.querySelector(".currency-value-to-convert")// Valor em Real
   const currencyValueConverted = document.querySelector(".currency-value")// Outras Moedas

   console.log(currencySelect.value)
 
    const dolarToday = 5.2
    const euroToday = 6.2
    const libraToday = 6.06
    const boliviaToday = 1.0
  

    if(currencySelect.value == "bolivia"){
      currencyValueConverted.innerHTML = new Intl.NumberFormat("de-BS",{
        style:"currency",
        currency:"BOB"
      }).format(inputCurrencyValue/boliviaToday)
    }



    if(currencySelect.value == "libra"){
      currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB",{
        style:"currency",
        currency:"GBP"
      }).format(inputCurrencyValue/libraToday)
    }


    if(currencySelect.value == "dolar"){
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style:"currency",
        currency:"USD"
      }).format(inputCurrencyValue / dolarToday)
  }


    if(currencySelect.value == "euro"){
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE",{
     style:"currency",
     currency:"EUR"
    }).format(inputCurrencyValue/euroToday)
  

     
   
  
  currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency:"BRL"
    }).format(inputCurrencyValue)
}

   
}

function changeCurrency(){
const currencyName = document.getElementById("currency-name")
const currencyImage = document.querySelector((".currency-img"))

if(currencySelect.value == "dolar"){
  currencyName.innerHTML = "Dólar americano"
  currencyImage.src = "./assets/dolar.png"
}

if(currencySelect.value == "euro"){
  currencyName.innerHTML = "Euro"
  currencyImage.src = "./assets/euro.png"
}

if(currencySelect.value == "libra"){
  currencyName.innerHTML = "Libra"
  currencyImage.src = "./assets/libra.png"
}

if(currencySelect.value == "bolivia"){
  currencyName.innerHTML = "Bolivia"
  currencyImage.src = "./assets/bolivia.png"
}


convertValues()
 
}
currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)
