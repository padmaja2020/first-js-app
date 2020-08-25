var pokemonList = [
  { name: "Bulbasaur", height: 0.7, type: ["grass", "poison"] },
  { name: "Charizard", height: 1.7, type: ["fire", "flying"] },
  { name: "Butterfree", height: 1.1, type: ["bug", "flying"] },
];

document.write("<h1> forEach Loop</h1><br>");
pokemonList.forEach(function (list) {
  document.write(
    "<p>" + list.name + "  " + list.height + "   " + list.type + "<br>   </p> "
  );
});

document.write("<br><h1> for Loop</h1><br>");
for (var i = 0; i < pokemonList.length; i++) {
  var pokemonHeight = pokemonList[i].height;
  var pokemonName = pokemonList[i].name;
  if (pokemonHeight > 1.5) {
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
