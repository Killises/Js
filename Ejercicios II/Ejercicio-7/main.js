var num;
const doble = (num) => console.log('El doble del numero es = '+ num*2);
doble(10);

const cuadrado =(num) => console.log('El numero al cuadrado es = '+ num ** 2);
cuadrado(50);

var base;
var altura;
const area=(base, altura) => console.log('El area del rectangulo es = '+ base*altura);
area(40,20)

const par = (num) => {
    if (num == 0) {
        return console.log('El numero es Par');
    } else if (num == 1) {
        return console.log('El numero es Impar');
    } else {
        return par(num%2);
    }
};
par(34)

const personas = [
    { nombre: 'Juan', edad: 18 },
    { nombre: 'María', edad: 16 },
    { nombre: 'Pedro', edad: 20 },
    { nombre: 'Pablo', edad: 15 },
    { nombre: 'Laura', edad: 19 },
];

const mayorEdad = (personas) => personas.edad >= 18;
const result = personas.filter(mayorEdad);
console.log(result)


var resultado;
var ix;
const menor= (personas) => {resultado= personas[0].edad;
    for (let i = 0; i < personas.length; i++) {
        if (personas[i].edad < resultado) {
            resultado=personas[i].edad;
            ix=personas[i];
        }
    }
    return console.log(ix);
}

menor(personas);

var res;
var index;
const mayor= (personas) => {
    res= personas[0].edad;
    for (let i = 0; i < personas.length; i++) {
        if (personas[i].edad > res) {
            res=personas[i].edad;
            index= personas[i];
        }
    }
return console.log(index)
}
mayor(personas)

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

const nombre = (pokemons)=> {
    pokemons.forEach(pokemons => {console.log(pokemons.nombre)});
}
nombre(pokemons);

const tipo = (pokemons)=> {
    const tip=pokemons.find(pokemons => pokemons.tipoDePokemon=='fuego');
    console.log(tip)
}
tipo(pokemons);