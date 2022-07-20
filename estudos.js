// Funçoes que retornam objetos
function criaPessoa(nome, sobrenome, altura, peso) {
    return {

        nome,
        sobrenome,

        //getter
        get nomeCompleto() {
            return `${nome} ${sobrenome}`
        },

        //setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            valor.shift();
            valor = valor.join(' ')
            console.log(valor)
        },

        fala(assunto) {
            return `${this.nome} está ${assunto}`
        },

        altura,
        peso,
        imc() {
            const indice = this.peso / this.altura ** this.altura;
            return indice.toFixed(2)
        },
    }
}

//so deu pra usar o metodo fala da funçao
//depois que eu passei a funçao pra constate p1

const p1 = criaPessoa('ricardo', 'machado', 1.70, 60);
const p2 = criaPessoa('maria', 'ribeiro', 1.60, 70)
p2.nomeCompleto = 'maria joaquina da silva';
console.log(p2.fala('falando sobre algo'))

//funçao recursiva;
//simula o for, funçao que se chama novamente.

function recursiva(max) {
    console.log(max)
    if (max >= 10) return;
    max++;
    recursiva(max)
}

recursiva(0)

//funçoes geradoras
//entrega o codigo em partes, pausadamente

function* geradora1() {
    //codigo qualquer
    yield 'valor 1';
    //codigo qualquer
    yield 'valor 2';
    //codigo qualquer
    yield 'valor 3';
}
const g1 = geradora1();
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next().value);
//tambem é possivel iterar sobre a função
for (let valor of g1) {
    console.log(valor)
}

function* geradora2() {
    let i = 0;

    while (true) {
        yield i;
        i++
    }
}

const g2 = geradora2();
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
//gera infinitamente pois o laço nao termina

function* geradora3() {
    yield 0;
    yield 1;
    yield 2;
}
function* geradora4() {
    yield* geradora3();
    yield 3;
    yield 4;
    //...
}
const g4 = geradora4();

for (let valor of g4) {
    console.log(valor)
}

function* geradora5() {


    yield function () {
        console.log('vim do y1');
    };
  //se por return acaba e nao executa o restante

    yield function () {
        consol.log('vim do y2')
    };
}

const g5 = geradora5();
const f1 = g5.next().value;
const f2 = g5.next().value;