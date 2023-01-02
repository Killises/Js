var pokemons = [ pikachu = {
    nombre: 'pikachu',
    tipoDePokemon: 'Electrico'
},

bulbasaur = {
    nombre: 'bulbasaur',
    tipoDePokemon: 'agua'
}
,charizard = {
    nombre: 'charizard',
    tipoDePokemon: 'fuego'
}
];

for (let i = 0; i < pokemons.length; i++) {
    if (pokemons[i].tipoDePokemon == 'fuego'){
        console.log('¡Es un pokemon de fuego!')
    }
}
