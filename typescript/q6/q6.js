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
var ContaBanco = /** @class */ (function () {
    function ContaBanco() {
    }
    return ContaBanco;
}());
var PessoaFisica = /** @class */ (function (_super) {
    __extends(PessoaFisica, _super);
    function PessoaFisica(nome_pai, nome_mae, cpf) {
        var _this = this;
        _this = _super.call(this) || this,
            _this.nome_pai = nome_pai,
            _this.nome_mae = nome_mae,
            _this.cpf = cpf;
        return _this;
    }
    PessoaFisica.prototype.abrirConta = function (dados) {
        this.dados = dados;
        console.log('conta fisica criada com sucesso!');
        return true;
    };
    PessoaFisica.prototype.saldo = function () {
        return this.dados.saldo;
    };
    return PessoaFisica;
}(ContaBanco));
var PessoaJuridica = /** @class */ (function (_super) {
    __extends(PessoaJuridica, _super);
    function PessoaJuridica() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PessoaJuridica.prototype.abrirConta = function (dados) {
        console.log('conta juridica criada com sucesso!');
        return true;
    };
    PessoaJuridica.prototype.saldo = function () {
        return this.dados.saldo;
    };
    return PessoaJuridica;
}(ContaBanco));
var ClientePF = /** @class */ (function (_super) {
    __extends(ClientePF, _super);
    function ClientePF(nome, n_telefone, nome_mae, nome_pai, cpf) {
        var _this = _super.call(this, nome_mae, nome_pai, cpf) || this;
        _this.nome = nome;
        _this.n_telefone = n_telefone;
        return _this;
    }
    return ClientePF;
}(PessoaFisica));
var ClientePJ = /** @class */ (function (_super) {
    __extends(ClientePJ, _super);
    function ClientePJ() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ClientePJ;
}(PessoaJuridica));
var joao = new ClientePF("joao", "(92)99533-9842", "maria", "jorge", "674.098.032-21");
joao.abrirConta({
    numero: "1020-2",
    saldo: 100
});
console.log(joao.saldo());
