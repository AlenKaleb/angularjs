const ob = {cor: 'Azul'};
console.log(ob);
for(let i = 0; i < 1; i++){
    console.log(ob.cor);
}

let f = []; // Array
let a = 1; // Number
let b = 2.5; // Number
let c = "a2"; // String
let d = true; // Bollean
let h = {}; // Object
console.log(typeof f);

/**
 * Function named
 */

console.log(pesquisar());

/**
 * Funções atribuidas a uma variavel não pode ser chamada antes da variavel.
 */
//console.log(an);

function pesquisar(){}

// Cria um object
let novafunc = new pesquisar();
// Retorna um object
console.log(typeof novafunc);

/**
 * Function anonymous
 */

let an = function(){}

/**
 * Function expressed
 */

let obter = function obter(){
    console.log("Função expressa, variavel recebe função nomeada");
}

/**
 * Function arrow function
 */

let arrow = () => {
    console.log("Função arrow function, variavel recebe função arrow.");
}

/**
 * Function constructor
 */

function Pessoa(){
    console.log("Function constructor, função com a primeira letra maiscula");
    return {};
}


// Função de callback - função que retorna outra função de retorno
function inserir(){
    let p = new Pessoa();

    return function (){
        console.log(p);
    }
}

console.log(inserir());

function calcular(valor, imposto){
    console.log(imposto(valor));
}

function impostoIR(valor){
    return valor * 1.2;
}

function impostoIOR(valor){
    return valor * 0.27;
}

console.log(calcular(100,impostoIR))
console.log(calcular(100,impostoIOR))

function deletar(){
    console.log(this);
}

//deletar();

let carro = {
    modelo: "cruze",
    marca: "chevrolet",
    imprimir: function(){
        console.log(this.modelo);
    }
}

console.log(carro.imprimir());

let carros = [];
carros.push("Cruze");
carros.push("Uno");
carros.unshift("Fiat");
// Remove o ultimo elemento
//carros.pop();
// Remove o primeiro elemento
//carros.shift();

// Remove e adiciona itens da lista (informa a posicao/quantidade de elementos)
console.log(carros.splice(1,1))

//console.log(carros.slice(1,1))
console.log(carros);



//Pessoa();
//arrow();
//obter();
//an();
//pesquisar();
//console.log(pesquisar());
