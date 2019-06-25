document.querySelector(".get-poke").addEventListener("click", getPoke);

function getPoke(e) {
  const number = randomIntFromRange(1, 151);
  console.log(`Pokémon #${number}`);

  const xhr = new XMLHttpRequest();

  xhr.open("GET", `https://pokeapi.co/api/v2/pokemon/${number}/`, true);

  xhr.onprogress = function() {
    let output = "";
    output = `<img src="images/pokeball.png" id="button-pokeball-icon" />`;
    document.querySelector("#sprite").innerHTML = output;
  };

  xhr.onload = function() {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);
      const pokeName = response.species.name;
      const pokeSprite = response.sprites.front_default;
      console.log(pokeSprite);
      let output = "";

      if (response.id === number) {
        output = `<img class="sprite-image" src="${pokeSprite}" alt="${pokeName}"></img>`;
      } else {
        output = "<p>It's not very effective...</p>";
      }

      document.querySelector("#sprite").innerHTML = output;
    }
  };

  xhr.send();

  e.preventDefault;
}

function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
