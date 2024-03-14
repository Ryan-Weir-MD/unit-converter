/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")

const lengthEl = document.getElementById("length")
const volumeEl = document.getElementById("volume")
const massEl = document.getElementById("mass")

convertBtn.addEventListener("click", function(){
    const inputVal = inputEl.value
    lengthEl.textContent = getLength(inputVal)
    volumeEl.textContent = getVolume(inputVal)
    massEl.textContent = getMass(inputVal)
})

function getLength(num) {
    const inFeet = num * 3.281
    const inFeetTrim = inFeet.toFixed(3)
    const inMeters = num * 0.304
    const inMetersTrim = inMeters.toFixed(3)
    const statement = `
        ${num} Meters = ${inFeetTrim} Feet | ${num} Feet = ${inMetersTrim} Meters
    `
    return statement
}

function getVolume(num) {
    const inGallons = num * 0.264
    const inGallonsTrim = inGallons.toFixed(3)
    const inLiters = num * 3.785
    const inLitersTrim = inLiters.toFixed(3)
    const statement = `
        ${num} Liters = ${inGallonsTrim} Gallons | ${num} Gallons = ${inLitersTrim} Liters
    `
    return statement
}

function getMass(num) {
    const inPounds = num * 2.204
    const inPoundsTrim = inPounds.toFixed(3)
    const inKilograms = num * 0.453
    const inKilogramsTrim = inKilograms.toFixed(3)
    const statement = `
        ${num} Kilograms = ${inPoundsTrim} Pounds | ${num} Pounds = ${inKilogramsTrim} Kilograms
    `
    return statement
}

