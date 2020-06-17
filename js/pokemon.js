const  poke_container= document.getElementById('poke_container');
const pokemon_number = 150;

const fetchPokemons = async ()=>{
    for (let index = 1; index <= pokemon_number; index++) {
        await getPokemon(index);
    }
}

const getPokemon = async id =>{
    const url= `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const pokemon = await res.json();
    createPokemonCard(pokemon);
}

fetchPokemons();


function createPokemonCard(pokemon){
    const pokemonEl= document.createElement('div');
    pokemonEl.classList.add('pokemon');
    const pokeInnerHTML = `  
        <div class="img-container">
            <img src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png">
        </div>
        <div class="info">
            <span class="number">${pokemon.id}</span>
            <h3 class="name">${pokemon.name}</h3>
            <small class="type">Type:<span>${pokemon.type}</span></small>
        </div>
        
    `;
    pokemonEl.innerHTML = pokeInnerHTML;
    poke_container.appendChild(pokemonEl);
}



