class Despesa{
    constructor(ano, mes, dia, descricao, valor){
        this.ano = ano
        this.mes = mes
        this.dia = dia
        this.descricao = descricao
        this.valor = valor
    }
}
function cadastrarDespesa(){
let ano= document.getElementById('ano').value
let mes= document.getElementById('mes').value
let dia= document.getElementById('dia').value
let descricao= document.getElementById('descricao').value
let valor= document.getElementById('valor').value

let despesa = new Despesa(ano, mes, dia, descricao, valor)
console.log(despesa)
}