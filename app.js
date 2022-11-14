const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
const ulEl = document.getElementById("ul-el")
const meterEl = document.getElementById("meter-el")
const litreEl = document.getElementById("litre-el")
const kilogramEl = document.getElementById("kilogram-el")

const meter = {
    unit: "meter(s)",
    convert: "feet(s)",
    value: 3.281
}
const litre = {
    unit: "litre(s)",
    convert: "gallon(s)",
    value: 0.264
}
const kilogram = {
    unit: "kilogram(s)",
    convert: "pound(s)",
    value: 2.204
}

function generateUnit(obj, el) {
    let value = obj.value * inputEl.value
    let secondValue = inputEl.value / obj.value
    let string = ""
    
if (! inputEl.value === false) {
    string = `${inputEl.value} ${obj.unit} = ${value.toFixed(2)} ${obj.convert} | ${inputEl.value} ${obj.convert} = ${secondValue.toFixed(2)} ${obj.unit}`
} else {
    string = ""
    
}
    return el.innerHTML = string
}

function renderUnits() {
    generateUnit(meter, meterEl)
    generateUnit(litre, litreEl)
    generateUnit(kilogram, kilogramEl)
}

convertBtn.addEventListener("click", renderUnits)

inputEl.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      inputEl.click();
      renderUnits()
    }
      

})








