let title = document.getElementById("title");
let composers = document.getElementById("composers");
let year = document.getElementById("year");
let performers = document.getElementById("performers");

let save = document.getElementById("save");
let tunesDisplayed = document.getElementById("tunesDisplayed");



let properties = [title, composers, year, performers]

let tunes = [];
let tune = {};


function createTune() {
  tune = {
    name: title.value,
    composers: composers.value,
    year: year.value,
    performers: performers.value,
  }

  for (var i = 0; i < properties.length; i++) {
    properties[i].value = "";
  }

  tunes.push(tune);

  displayTunes()
}





function displayTunes() {

  while (tunesDisplayed.firstChild) {
    tunesDisplayed.removeChild(tunesDisplayed.firstChild);
  }


  for (var i = 0; i < tunes.length; i++) {
    let tuneWrap = document.createElement("p");

    //let textnode = document.createTextNode(Object.entries(tune));

    let textnode = document.createTextNode(tune.name);
    tuneWrap.appendChild(textnode);
    let br = document.createElement("br");
    textnode = document.createTextNode(tune.composers);
    tuneWrap.appendChild(textnode);


    for (const property in tune) {
      if (tune.hasOwnProperty(property)) {

        let txt = document.createTextNode(`${property}: ${tune[property]}`);
        let br = document.createElement("br")

        tuneWrap.appendChild(txt);
        tuneWrap.appendChild(br);
      }
    }

    tunesDisplayed.appendChild(tuneWrap);

  }

}






save.addEventListener("click", createTune);
