const personas = [
    { nombre: 'Juan', edad: 18 },
    { nombre: 'María', edad: 16 },
    { nombre: 'Pedro', edad: 20 },
    { nombre: 'Pablo', edad: 15 },
    { nombre: 'Laura', edad: 19 },
];

const result = personas.filter(mayorEdad);
function mayorEdad(personas) {
    return personas.edad >= 18;
}
console.log(result)


var resultado;
var ix;
function menor(personas) {
    resultado= personas[0].edad;
    for (let i = 0; i < personas.length; i++) {
        if (personas[i].edad < resultado) {
            resultado=personas[i].edad;
            ix=personas[i];
        }
    }
    console.log(ix)
}
menor(personas);

var res;
var index;
function mayor(personas) {
    res= personas[0].edad;
    for (let i = 0; i < personas.length; i++) {
        if (personas[i].edad > res) {
            res=personas[i].edad;
            index= personas[i];
        }
    }
    console.log(index)
}
mayor(personas)