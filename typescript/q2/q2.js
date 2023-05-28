var categorias;
(function (categorias) {
    categorias["Romance_historico"] = "Romance Historico";
    categorias["Distopia"] = "Distopia";
    categorias["Auto_ajuda"] = "Auto ajuda";
    categorias["tecnicos"] = "Tecno-cientifico";
})(categorias || (categorias = {}));
var livraria = [];
var livroA = {
    nome: "Guerra e paz",
    preco: 89,
    categoria: categorias.Romance_historico
};
var livroB = {
    nome: "1984",
    preco: 25,
    categoria: categorias.Distopia
};
var livroC = {
    nome: "Blablabla",
    preco: 32,
    categoria: categorias.Auto_ajuda
};
livraria.push(livroA);
livraria.push(livroB);
livraria.push(livroC);
console.log(livraria);
