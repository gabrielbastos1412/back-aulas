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
let livraria =[]
const livroA: Livro ={
    nome:"guerra e paz",
    preco:89,
    categoria: categorias.Romance_historico
}
const livroB: Livro={
    nome:"1984",
    preco:25,
    categoria:categorias.Distopia
}
const livroC: Livro={
    nome:"blablabla",
    preco:32,
    categoria:categorias.Auto_ajuda
}
livraria.push(livroA)
livraria.push(livroB)
livraria.push(livroC)

livraria.forEach(elemen =>{
    elemen.nome = elemen.nome.split(' ').length>1 ? elemen.nome: elemen.nome.charAt(0).toUpperCase()+ elemen.nome.slice(1);
})
console.log(livraria)