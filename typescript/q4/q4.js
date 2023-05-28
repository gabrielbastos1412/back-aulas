var categorias;
(function (categorias) {
    categorias["Romance_historico"] = "Romance Historico";
    categorias["Distopia"] = "Distopia";
    categorias["Auto_ajuda"] = "Auto ajuda";
    categorias["tecnicos"] = "Tecno-cientifico";
})(categorias || (categorias = {}));
var livraria = [];
var livroA = {
    nome: "guerra e paz",
    preco: 89,
    categoria: categorias.Romance_historico
};
var livroB = {
    nome: "1984",
    preco: 25,
    categoria: categorias.Distopia
};
var livroC = {
    nome: "blablabla",
    preco: 32,
    categoria: categorias.Auto_ajuda
};
var autorA = {
    nome_autor: "Tolstoi",
    nacionalidade: "Russo"
};
var autorB = {
    nome_autor: "Aldous Huxley",
    nacionalidade: "Ingles"
};
var autorC = {
    nome_autor: "aleatorio",
    nacionalidade: "Provavelmente brasileiro"
};
var autores = [];
livraria.push(livroA);
autores.push(autorA);
livraria.push(livroB);
autores.push(autorB);
livraria.push(livroC);
autores.push(autorC);
var novaLivraria = livraria.map(function (element, index) {
    var livroNovo = {
        nome: livraria[index].nome,
        preco: livraria[index].preco,
        categoria: livraria[index].categoria,
        nome_autor: autores[index].nome_autor,
        nacionalidade: autores[index].nacionalidade
    };
    return livroNovo;
});
console.log(novaLivraria);
