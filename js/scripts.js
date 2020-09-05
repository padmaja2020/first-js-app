var pokemonRepository = (function () {
  var pokemonList = [];
  var apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150";
  let modalContainer = document.querySelector("#modal-container");
  var unOrderedList = document.querySelector(".pokemon-list");
  function getAll() {
    return pokemonList;
  }

  function add(pokemon) {
    return pokemonList.push(pokemon);
  }
  //Function to add pokemon names

  function addListItem(pokemon) {
    var listItem = document.createElement("li");
    listItem.classList.add("list-item");
    var button = document.createElement("button");
    button.innerText = pokemon.name;

    button.classList.add("pokemon-name");
    listItem.appendChild(button);
    unOrderedList.appendChild(listItem);
    eventListener(button, pokemon);
  }

  //Function to console log the name of pokemon when clicked
  function showDetails(pokemon) {
    pokemonRepository.loadDetails(pokemon).then(function () {
      //show modal with pokemon details;

      let name = pokemon.name;
      let height = pokemon.height;
      let img = pokemon.image;
      showModal(name, height, img);
    });
  }
  //function to add eventlistener to the buttons
  function eventListener(button, pokemon) {
    button.addEventListener("click", function () {
      showDetails(pokemon);
    });
  }
  // function to load the pokemon using pokemon api
  function loadList() {
    return fetch(apiUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        json.results.forEach(function (item) {
          var pokemon = {
            name: item.name,
            detailsUrl: item.url,
          };
          add(pokemon);
        });
      })
      .catch(function (e) {
        console.error(e);
      });
  }
  //function to fetch the details each pokemon
  function loadDetails(item) {
    var url = item.detailsUrl;
    return fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (details) {
        item.image = details.sprites.front_default;
        item.height = details.height;
        item.type = details.types;
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  //Function to show modal with Pokemon details
  function showModal(name, height, img) {
    modalContainer.innerHTML = "";
    let modal = document.createElement("div");
    modal.classList.add("modal");
    let pokemonName = document.createElement("h1");
    pokemonName.innerText = name;
    let closeButton = document.createElement("button");
    closeButton.innerText = "Close";
    closeButton.classList.add("close-button");
    // Eventlistener to hide modal

    closeButton.addEventListener("click", function () {
      hideModal();
    });

    let pokemonHeight = document.createElement("p");
    pokemonHeight.innerText = "Height: " + height;

    let pokemonImg = document.createElement("img");
    pokemonImg.classList.add("pokemon-img");
    pokemonImg.setAttribute("alt", "Pokemon Image");
    pokemonImg.src = img;

    modal.appendChild(closeButton);
    modal.appendChild(pokemonName);

    modal.appendChild(pokemonHeight);

    modal.appendChild(pokemonImg);
    modalContainer.appendChild(modal);
    modalContainer.classList.add("is_visible");
  }
  //function to hide modal

  function hideModal() {
    modalContainer.classList.remove("is_visible");
  }

  // hide modal when user presses the escape key

  window.addEventListener("keydown", (e) => {
    let key = e.key;
    if (key === "Escape" && modalContainer.classList.contains("is_visible")) {
      hideModal();
    }
  });
  //hide modal when user clicks outside the modal
  modalContainer.addEventListener("click", (e) => {
    var target = e.target;
    if (target === modalContainer) {
      hideModal();
    }
  });

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showModal: showModal,
    hideModal: hideModal,
  };
})();

pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
