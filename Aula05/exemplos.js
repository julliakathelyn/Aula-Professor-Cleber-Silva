
//const nome = 'Jullia' //variavel que nao consegue atribuir um novo valor 
var idade = 20 //variavel mais utilizado em funçoes
//let cpf ='123.456.789.10' //mais utilizado em bloco de instruçoes


// javaScript é uma linguagem fracamente tipada 

var linguagem = "JavaScript";
console.log("aprendendo"+ linguagem)

//console.log("OIIII", nome)

//estrutura de decisao

if (idade>= 18){
    console.log("pode tirar CNH") //imprime na tela
}else {
    console.log("nao pode tirar CNH")
}


let x = 5
switch(x){
    case 1:
        console.log("cair no case1")
        break
    case 2:
        console.log("cair no case 2")
    default:
        console.log("cair no default")        
}

const n1 = 2
const n2 = '3'

const n3 = n1+ parseInt (n2);
console.log(n3)

console.log(1 == 1)
console.log(1 == "1")

console.log(1 === 1) //comparação verdadeira poisé o mesmo conteudo e o mesmo tipo de dado
console.log(1 === '1') //comparação falsa pois o é o mesmo conteudo e nao é o mesmo tipo

for(let i = 0;i < 10 ;i++){
    //console.log('OIEEE')
}

let i = 0;

//while(i <5){
    //console.log('OIEEEEEEEEEE')
    //i++;
//}

//do{
  //  console.log('oieeeeeeeeeeeeeeeeeeeeeeeeeee')
    //i++;

//}while (1< 10)

//v1 = []
//v1[0] = 3.4
//v1[1] = "abc"

//console.log(v1.length)

//for(let i = 0; i < v1.length;i++){
  //  console.log(v1[i])
//}


//for (const x of v1){
    //console.log(x)

//}

//function hello(){
  //  console.log("OIEEE galera")
//}
//hello()

//function soma (a,b){
  //  return a+b
//}

//const res = soma(9,2)
//console.log("A soma é " + res)

//podemos criar funcoes anonimas que geralmente sao atribuidas a uma variavel

//const dobro = function(n){
  //  return n*2
//}

//const resposta = dobro(4) //isso é uma função anonima
//console.log(resposta)


//outra função anonima
//const triplo = function(n=5){
    //return 3*n
//}

//console.log(triplo())


//outra forma de declarar funcoes anonimas

const hello = ()=> console.log("Hello")

hello ()

const dobro = (valor) => valor *2;
console.log(dobro(10))

const triplo = (valor) =>{
    return valor *3
}

console.log(triplo(5))
