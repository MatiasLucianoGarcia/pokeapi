const  poke_container= document.getElementById('poke_container');
const pokemon_number = 151;
const colors = {
    fire : '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#F4E7DA',
    rock: '#D5D5D4',
    fairy: '#FCEAFF',
    poison: '#98D7A5',
    bug: '#F8D5A3',
    dragon:'#97B3E6',
    psychic: '#EAEADA1',
    flying:'#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5'
}

const main_types= Object.keys(colors);

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

    const name = pokemon.name[0].toUpperCase()+ pokemon.name.slice(1);
    const poke_types = pokemon.types.map(elem => elem.type.name);
    const type = main_types.find(type=>poke_types.indexOf(type)>-1);
    const color = colors[type];

    pokemonEl.style.backgroundColor=color;

    const pokeInnerHTML = `  
        <div class="img-container">
            <img src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png">
        </div>
        <div class="info">
            <span class="number">#${pokemon.id.toString().padStart(3,'0')}</span>
            <h3 class="name">${name}</h3>
            <small class="type">Type:<span>${type}</span></small>
        </div>
        
    `;
    pokemonEl.innerHTML = pokeInnerHTML;
    poke_container.appendChild(pokemonEl);
}



