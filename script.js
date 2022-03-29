// 1-- recuperando valores dos documentos
// 2-- Criando a classe Despesa
// 3-- Filtrar dados para saber o que pode ou não ser armazenado em webstorage
// 4-- Criar indices dinamicos para implementar bd junto com uma classe
class Despesa{
  constructor(ano, mes, dia, tipo, descricao, valor){
    this.ano = ano
    this.mes = mes
    this.dia = dia
    this.tipo = tipo
    this.descricao = descricao
    this.valor = valor
  }
}

class Bd{
  constructor(){
    let id = localStorage.getItem('id')
    if(id === null){
      localStorage.setItem('id',0)
    }
  }
  getProximoId(){
    let proximoId = localStorage.getItem('id')
    return(parseInt(proximoId) + 1)
  }

  gravar(d){
    let id = this.getProximoId()

    localStorage.setItem(id, JSON.stringify(d))

    localStorage.setItem('id', id)
    alert('Despesa salva com sucesso')
  }


}
let bd = new Bd() //instanciando a classe bd para usar seus metodos

function cadastrarDespesa(){
  let ano =  document.getElementById('ano')
  let mes = document.getElementById('mes')
  let dia = document.getElementById('dia')
  let tipo = document.getElementById('tipo')
  let descricao = document.getElementById('descricao')
  let valor = document.getElementById('valor')

  let despesa = new Despesa(
    ano.value,
    mes.value,
    dia.value,
    tipo.value,descricao.value,
    valor.value)
    
  bd.gravar(despesa)


}   


