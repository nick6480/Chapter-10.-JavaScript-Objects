"use strict";

const planetsForm = document.getElementById("planetsForm");
const planetInfoDiv = document.getElementById("planetInfoDiv");




class Planet {
    constructor(distance, sidereal_Period, synodic_Period, eccentricity, orbital_Inclination) {
        this.Distance = distance;
        this.Sidereal_Period = sidereal_Period;
        this.Synodic_Period = synodic_Period;
        this.Eccentricity = eccentricity;
        this.Orbital_Inclination = orbital_Inclination;
    }


    toString() {
        return `${this.distance} ${this.sidereal_Period} ${this.synodic_Period} ${this.eccentricity} ${this.orbital_Inclination}`;
    }
}

// Planet info
let thesun = new Planet("0 AU", "0 y", "0 d", "0", "0°");
let mercury = new Planet("0.3871 AU", "0.2408 y", "115.88 d", "0.206", "7.00°");
let venus = new Planet("0.7233 AU", "0.6152 y", "583.92 d", "0.007", "3.39°");
let earth = new Planet("1.0000 AU", "1.0000 y", "----", "0.017", "0.00°");
let mars = new Planet("1.5237 AU", "1.8809 y", "779.94 d", "0.093", "1.85°");
let jupiter = new Planet("5.2028 AU", "11.862 y", "398.9 d", "0.048", "1.31°");
let saturn = new Planet("9.5388 AU", "29.458 y", "378.1 d", "0.056", "2.49°");
let uranus = new Planet("19.1914 AU", "84.01 y", "369.7 d", "0.046", "0.77°");
let neptune = new Planet("30.0611 AU", "164.79 y", "367.5 d", "0.010", "1.77°");
let pluto = new Planet("39.5294 AU", "248.5 y", "366.7 d", "0.248", "17.15°");


let planets = [thesun, mercury, venus, earth, mars, jupiter, saturn, uranus, neptune, pluto];
let planetsStr = ["thesun", "mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune", "pluto"];

console.log(planets);
console.log(planetsStr);


function planetInfo(selected) {

  let indexNr = planetsStr.indexOf(selected.value); // Finder indexnr for den valgte radio knap
  let planetObj = planets[indexNr]; // Finder objectet fra indexnr


  clearElem(planetInfoDiv); // fjerner alle elementer


  const entries = Object.entries(planetObj); // laver et array med arrays

  for (const [planetObj, count] of entries) { // Looper igennem objektet
    let element = document.createElement("p");
    let text = document.createTextNode(`${planetObj} = ${count}`.replace(/_/g, " "));
    element.appendChild(text);
    planetInfoDiv.appendChild(element);
  }
}



function clearElem(elem) {
  while (elem.firstChild) {
    elem.removeChild(elem.firstChild)
  }
}
