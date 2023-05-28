type DadosConta ={
    numero:string,
    saldo:number,
    endereco?:string
}

abstract class ContaBanco{
    dados:DadosConta;
    abstract abrirConta(dados: DadosConta):boolean;
}

class PessoaFisica extends ContaBanco{
    nome_pai:string;
    nome_mae:string;
    cpf:string;
    constructor(nome_pai:string,nome_mae:string,cpf:string){
        super(),
        this.nome_pai = nome_pai,
        this.nome_mae = nome_mae,
        this.cpf = cpf
    }
    abrirConta(dados: DadosConta): boolean {
        this.dados = dados;
        console.log('conta fisica criada com sucesso!')
        return true;
    }
    saldo():number{
        return this.dados.saldo;
    }
    deposito(d:number){
        this.dados.saldo +=d;
    }
    saque(s:number){
        this.dados.saldo -=s;
    }
}
type TipoE = "SA"|"ME"|"LTDA";
class PessoaJuridica extends ContaBanco{
    cnpj:string;
    nome_empresa:string;
    tipo_empresa: TipoE;
    constructor(cpnj:string,nome_empresa:string,tipo:TipoE){
        super();
        this.cnpj = cpnj;
        this.nome_empresa = nome_empresa;
        this.tipo_empresa = tipo;
    }
    abrirConta(dados: DadosConta): boolean {
        this.dados = dados;
        console.log('conta juridica criada com sucesso!')
        return true
    }
    saldo():number{
        return this.dados.saldo;
    }
    deposito(d:number){
        this.dados.saldo +=d;
    }
    saque(s:number){
        this.dados.saldo -=s;
    }
}

class ClientePF extends PessoaFisica{
    nome:string;
    n_telefone:string;

    constructor(nome:string,n_telefone:string,nome_mae:string,nome_pai:string,cpf:string){
        super(nome_mae,nome_pai,cpf);
        this.nome = nome;
        this.n_telefone = n_telefone;
    }
}
class ClientePJ extends PessoaJuridica{
    nome:string;
    n_telefone:string;
    constructor(nome:string,n_telefone:string,cnpj:string,nome_empresa:string,tipo:TipoE){
        super(cnpj,nome_empresa,tipo);
        this.nome = nome;
        this.n_telefone = n_telefone;
    }
}
const joao = new ClientePF("joao","(92)99533-9842","maria","jorge","674.098.032-21");
joao.abrirConta({
    numero:"1020-2",
    saldo:100
})

console.log(joao.saldo())