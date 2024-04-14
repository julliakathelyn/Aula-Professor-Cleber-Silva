/*const nomes = ["Ana Maria ", "Antonio","Rodrigo", "Alex", "Cristina"] //imprime os nomes
console.log(nomes)

const apenasComA = nomes.filter((n) => n.startsWith("A")) //imprime os nomes que começam com A
console.log(apenasComA)

const res = nomes.map((nome) => nome.charAt(3)) //imprime a letra em tal posição
console.log(res)

const todosComecamComA = nomes.every((n) => n.startsWith("A")) //confere se todos os nome que começam com a letra a e fala se é verdadeiro ou falso
console.log(todosComecamComA)

const valores = [1,2,3,4];
const soma = valores.reduce((ac,v) => ac + v) //ac acumulador que armazena o resultado
console.log(soma)

let umaFuncao = function() {
    console.log("Fui armazenada em uma variavel")
}

 umaFuncao()

 function f(funcao){
    funcao ()
 }

 f(function(){console.log('Estou sendo passada para F')})


 function g(){
    function outraFuncao(){
        console.log("Fui criada por g")
    }
    return outraFuncao
 }

 const gResult = g()
 gResult()

 function saudacoesFactory(saudacao, nome){
    return function(){
        console.log(saudacao + ','+ nome)
    }

 }

 let olaJoao = saudacoesFactory("Ola", "Joâo")
 olaJoao()
*/
 let pessoa = {
    nome: "João",
    idade: 17,
 }

 console.log("Me chamo " + pessoa.nome)
 console.log("Tenho " + pessoa["idade"]+ " anos")

 let pessoaComEndereco = {
    nome: "Maria",
    idade: 21,
    endereco:{
        logradouro: "Rua B",
        numero: 121,
    },
 }

 console.log(
 `Sou ${pessoaComEndereco.nome},
 tenho ${pessoaComEndereco.idade}anos
 e moro na rua ${pessoaComEndereco.endereco["logradouro"]}
 numero ${pessoaComEndereco["endereco"]["numero"]}
 `
 
 
 )


 let concessionaria = {
    cnpj: "123.456.789/001-85",
    endereco: {
        logradouoro: "Rua A",
        numero: 10,
        bairro: "Vila J"
    },
    veiculos:[
        {
            marca: "Ford",
            modelo: "Ecosport",
            anoDeFabricacao: 2018,
        },
        {
            marca: "Chevrolet",
            modelo: "Onix",
            anoDeFabricacao: 2020,
        },
        {
            marca: "Volkswagem",
            modelo: "Nivus",
            anoDeFabricacao: 2020,
        }
    ]
 }

 for (let veiculo of concessionaria.veiculos){
    console.log(`Marca: ${veiculo.marca}`)
    console.log(`Modelo:${veiculo.modelo}`)
    console.log(`Ano de fabricação: ${veiculo.anoDeFabricacao}`)
 }

 let calculadora = {
    soma: (a,b) => a + b,
    subtracao: function (a,b){
        return a - b
    },
 }

 console.log(`2+3= ${calculadora.soma(2,3)}`)
 console.log(`2-3= ${calculadora.subtracao(2,3)}`)
 
