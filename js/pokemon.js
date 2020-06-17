const  poke_container= document.getElementById('poke_container');
const pokemon_number = 150;

const getPokemon = async id =>{
    const url= `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const pokemon = await res.json();
    console.log(pokemon);
}

getPokemon(1);