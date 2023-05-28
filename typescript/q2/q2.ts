enum categorias {
    Romance_historico = "Romance Historico",
    Distopia = "Distopia",
    Auto_ajuda = "Auto ajuda",
    tecnicos = "Tecno-cientifico"
}

type Livro = {
    nome: string,
    preco: number,
    categoria?:categorias
}
const livraria = []
const livroA: Livro ={
    nome:"Guerra e paz",
    preco:89,
    categoria: categorias.Romance_historico
}
const livroB: Livro={
    nome:"1984",
    preco:25,
    categoria:categorias.Distopia
}
const livroC: Livro={
    nome:"Blablabla",
    preco:32,
}
livraria.push(livroA)
livraria.push(livroB)
livraria.push(livroC)
console.log(livraria)