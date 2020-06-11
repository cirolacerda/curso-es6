//Rest

function soma(a, b, ...params){
    return params;
}

console.log(soma(1,2,3,4,5,6,7));


//Spread

const usuario1 = {
    nome: 'Ciro',
    idade: 30,
    empresa:'SirOric'
};

const usuario2 = { ... usuario1, nome: 'Ciro Lacerda'};

console.log(usuario2);