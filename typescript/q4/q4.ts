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
type autor ={
    nome_autor:string,
    nacionalidade: string
}
let livraria =[]

type NovosLivros = Livro & autor;
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
const autorA: autor={
    nome_autor:"Tolstoi",
    nacionalidade:"Russo"
}
const autorB: autor ={
    nome_autor:"Aldous Huxley",
    nacionalidade:"Ingles"
}
const autorC: autor ={
    nome_autor:"aleatorio",
    nacionalidade:"Provavelmente brasileiro"
}
const autores = []
livraria.push(livroA);autores.push(autorA);
livraria.push(livroB);autores.push(autorB);
livraria.push(livroC);autores.push(autorC);

let novaLivraria =livraria.map((element,index) =>{
    let livroNovo: NovosLivros={
        nome: livraria[index].nome,
        preco: livraria[index].preco,
        categoria: livraria[index].categoria,
        nome_autor: autores[index].nome_autor,
        nacionalidade: autores[index].nacionalidade,
    }
    return livroNovo
})
console.log(novaLivraria)