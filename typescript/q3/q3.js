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
livraria.push(livroA);
livraria.push(livroB);
livraria.push(livroC);
livraria.forEach(function (elemen) {
    elemen.nome = elemen.nome.split(' ').length > 1 ? elemen.nome : elemen.nome.charAt(0).toUpperCase() + elemen.nome.slice(1);
});
console.log(livraria);
