type Livro = {
    nome: string,
    preco: number,
    categoria:string
}
const livraria = []
const livroA: Livro ={
    nome:"Guerra e paz",
    preco:89,
    categoria:"Romance Historico"
}
const livroB: Livro={
    nome:"1984",
    preco:25,
    categoria:"Distopia" 
}
livraria.push(livroA)
livraria.push(livroB)

console.log(livraria)