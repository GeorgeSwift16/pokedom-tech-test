import {pokemonArray} from "./data/pokemon.js";
// data format is {id:1, name: "bulbasaur", types: ["grass", "poison"], sprite: ""}
// we have an array within our object so will need element.type[0] and element.type[1]
// the data is an array of objects - foreach
// we have the main container but no other html element - insert
// we need to dom the container to appear on load and make a variable for it to be able to edit it
// we need to use a for each loop to populate the fields

// steps to follow
// done. import the main container, make variable, make dom listener "load"
// done. We need to set the listener to trigger our foreach function
// 3. use innerhtml on maincontent to change this property
// 4. Need to tell the foreeach function to change the innerhtml of card-container 
// 5. need to get the foreach setup to use this format for each card 
/* <div card class>
<img card__image class src="insert sprite:" alt="An image showing the pokem "insert name">
<div card__content class>
<h2 card__heading class (name)></h2>
<p card__text class></p>`(insertname)insert(#id) is a (insert type[0]) insert("&"type[1]) pokemon.</p>
</div>
</div>
*/
//          lets code

// importing cardcontainer
const cardContainer = document.querySelector(".card-container");
console.log(cardContainer);

const renderPokemonCards = (event) => {
    let cardshtml = "";

    pokemonArray.forEach((element) => {

        cardshtml += 
        `<div class="card">
        <img class="card__image" src=${element.sprite} alt="An image showing the pokemon ${element.name}.">
        <div class="card__content">
        <h2 class="card__heading">${element.name} has anyhting rendered?</h2>
        <p class="card__text">${element.name} (#${element.id}) is a        ${element.types}  ()()need to look at type[1](()) pokemon.</p>
        </div>
        </div>`;
        return cardshtml;
    });
    cardContainer.innerHTML = cardshtml;
};








// dom element for cardcontainer
cardContainer.addEventListener(`load`, renderPokemonCards);
