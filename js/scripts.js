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

  return {
    add: add,
    getAll: getAll,
  };
})();

pokemonRepository.add({
  name: "pikachoo",
  height: "2",
  type: ["fire", "air"],
});
var newRepository = pokemonRepository.getAll();
document.write("<h1> forEach Loop</h1><br>");
newRepository.forEach(function (list) {
  document.write(
    "<p>" + list.name + "  " + list.height + "   " + list.type + "<br>   </p> "
  );
});

document.write("<br><h1> for Loop</h1><br>");
for (var i = 0; i < newRepository.length; i++) {
  var pokemonHeight = newRepository[i].height;
  var pokemonName = newRepository[i].name;
  if (pokemonHeight > 1.9) {
    document.write(
      "<h3>" +
        pokemonName +
        "(Height: " +
        pokemonHeight +
        ")   " +
        " - Wow this is big<br></h3>"
    );
  } else {
    document.write(
      "<h3>" + pokemonName + "(Height: " + pokemonHeight + ")<br>   </h3> "
    );
  }
}
