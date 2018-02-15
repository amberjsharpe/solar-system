const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]
console.log(planets);
/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/
const planetEl = document.getElementById("planets");
console.log(planetEl);

planets.forEach(function display(planet){
    planetEl.innerHTML += `<h2>${planet}</h2>`;    
    console.log(planetEl);
})

/*
    Use the map method to create a new array where the 
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/

planets.map(function capitalize(planet){
    var newPlanets = planet.charAt(0).toUpperCase() + planet.slice(1);
    console.log(newPlanets);    
})

/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/


planets.map(function ePlanets(planet){
    var ePlanets = planet.includes("e");
    console.log(ePlanets);
    if (planet === true) {
        var ePlanetsArr = ePlanets.push(planet);
        console.log(ePlanetsArr);
    }
})

// Use the reduce method to create a sentence from the words in the following array
const words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"]

const sentence = words.reduce(
    (currentWord, next) => currentWord + ' ' + next
)
console.log(sentence);