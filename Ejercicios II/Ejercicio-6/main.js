var pokemons = [{
    nombre: 'pikachu',
    tipoDePokemon: 'Electrico'
},

{
    nombre: 'bulbasaur',
    tipoDePokemon: 'agua'
},
{
    nombre: 'charizard',
    tipoDePokemon: 'fuego'
}
];

function nombre(pokemons) {
    pokemons.forEach(pokemons => {
        console.log(pokemons.nombre)
    });
}
nombre(pokemons);

function tipo(pokemons) {
    const tipo=pokemons.find(pokemons => pokemons.tipoDePokemon=='fuego');
    console.log(tipo)

}
tipo(pokemons);