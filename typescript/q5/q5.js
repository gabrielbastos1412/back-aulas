var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Produto = /** @class */ (function () {
    function Produto(nome, categoria, preco, status) {
        this.nome = nome;
        this.categoria = categoria;
        this.preco = preco;
        this.status = status;
        this.code = this.gerarCodigo();
    }
    Object.defineProperty(Produto.prototype, "getCode", {
        get: function () {
            return this.code;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Produto.prototype, "setPreco", {
        set: function (preco) {
            this.preco = preco;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Produto.prototype, "getPreco", {
        get: function () {
            return this.preco;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Produto.prototype, "setStatus", {
        set: function (status) {
            this.status = status;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Produto.prototype, "getStatus", {
        get: function () {
            return this.status;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Produto.prototype, "setCategoria", {
        set: function (categoria) {
            this.categoria = categoria;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Produto.prototype, "getCategoria", {
        get: function () {
            return this.categoria;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Produto.prototype, "setNome", {
        set: function (nome) {
            this.nome = nome;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Produto.prototype, "getNome", {
        get: function () {
            return this.nome;
        },
        enumerable: true,
        configurable: true
    });
    Produto.prototype.adicionar = function () {
        this.mudarStatus("EM_ESTOQUE");
        console.log("Produto " + this.nome + ", categoria:\n        " + this.categoria);
    };
    Produto.prototype.mudarStatus = function (status) {
        if (status === "EM_ESTOQUE") {
            this.status = "EM_ESTOQUE";
        }
        else {
            this.status = "ESGOTADO";
        }
    };
    Produto.prototype.gerarCodigo = function () {
        return parseInt(Math.random() * 100000 + '');
    };
    return Produto;
}());
var novoProduto = new Produto("Shampoo", "Cuidados Pessoais", 30, "ESGOTADO");
console.log(novoProduto.nome);
var ProdutoInfantil = /** @class */ (function (_super) {
    __extends(ProdutoInfantil, _super);
    function ProdutoInfantil(nome, categoria, preco, status, faixa_etaria) {
        var _this = _super.call(this, nome, categoria, preco, status) || this;
        _this._faixa_etaria = _this.verificaFaixa(faixa_etaria);
        return _this;
    }
    ProdutoInfantil.prototype.verificaFaixa = function (faixa_etaria) {
        if (faixa_etaria > 12)
            throw new Error('Faixa etaria invalida!');
        return faixa_etaria;
    };
    ProdutoInfantil.prototype.acessarGets = function () {
        console.log(this.getCode);
    };
    return ProdutoInfantil;
}(Produto));
var novoProdutoInfantil = new ProdutoInfantil("Shampoo", "Cuidados Pessoais", 30, "ESGOTADO", 12);
novoProdutoInfantil.acessarGets();
console.log(novoProdutoInfantil);
