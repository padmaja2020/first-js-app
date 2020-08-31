var pokemonRepository = (function () {
  var pokemonList = [
    { name: "Bulbasaur", height: 0.7, type: ["grass", "poison"] },
    { name: "Charizard", height: 1.7, type: ["fire", "flying"] },
    { name: "Butterfree", height: 1.1, type: ["bug", "flying"] },
  ];

  function getAll() {
    return pokemonList;
  }

  function add(pokemon) {
    return pokemonList.push(pokemon);
  }
  //Function to add pokemon names

  function addListItem(pokemon) {
    var unOrderedList = document.querySelector(".pokemon-list");
    var listItem = document.createElement("li");
    var button = document.createElement("button");
    button.innerText = pokemon;
    button.classList.add("pokemon-name");
    listItem.appendChild(button);
    unOrderedList.appendChild(listItem);
    eventListener(button, pokemon);
  }

  //Function to console log the name of pokemon when clicked
  function showDetails(pokemon) {
    console.log(pokemon);
  }
  //function to add eventlistener the buttons
  function eventListener(button, pokemon) {
    button.addEventListener("click", function () {
      showDetails(pokemon);
    });
  }
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
  };
})();

pokemonRepository.add({
  name: "pikachoo",
  height: "2",
  type: ["fire", "air"],
});
var newRepository = pokemonRepository.getAll();

newRepository.forEach(function (list) {
  pokemonRepository.addListItem(list.name);
});
