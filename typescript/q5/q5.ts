type Status = "EM_ESTOQUE" |
"ESGOTADO";
class Produto{
    nome: string;
    categoria: string;
    preco: number;
    code: number;
    status: Status;
    constructor(nome: string, categoria:
    string, preco:number, status: Status){
        this.nome = nome;
        this.categoria = categoria;
        this.preco = preco;
        this.status = status;
        this.code = this.gerarCodigo();
    }
    protected get getCode():number{
        return this.code;
    }
    protected set setPreco(preco:number){
        this.preco = preco;
    }
    protected get getPreco():number{
        return this.preco;
    }
    protected set setStatus(status:Status){
        this.status = status;
    }
    protected get getStatus():Status{
        return this.status;
    }
    protected set setCategoria(categoria:string){
        this.categoria= categoria;
    }
    protected get getCategoria():string{
        return this.categoria;
    }
    protected set setNome(nome:string){
        this.nome = nome;
    }
    protected get getNome():string{
        return this.nome;
    }
    protected adicionar(): void {
        this.mudarStatus("EM_ESTOQUE");
        console.log(`Produto ${this.nome}, categoria:
        ${this.categoria}`)
        }
        mudarStatus(status: Status): void {
        if(status === "EM_ESTOQUE"){
        this.status="EM_ESTOQUE";
        }else{
        this.status="ESGOTADO";
        }
    }
    private gerarCodigo(): number {
        return parseInt(Math.random()*100000+'')
    }  
}
const novoProduto = new
Produto("Shampoo", "Cuidados Pessoais",
30, "ESGOTADO");
console.log(novoProduto.nome);

class ProdutoInfantil extends Produto{
private _faixa_etaria: number;
    constructor(nome: string, categoria: string, preco:number, status:
    Status, faixa_etaria: number){
        super(nome, categoria, preco, status);
        this._faixa_etaria = this.verificaFaixa(faixa_etaria);
    }
    verificaFaixa(faixa_etaria:number){
        if(faixa_etaria> 12) throw new Error('Faixa etaria invalida!')
        return faixa_etaria
    }
    acessarGets(){
        console.log(this.getCode)
    }
}
const novoProdutoInfantil = new ProdutoInfantil("Shampoo", "Cuidados Pessoais", 30, "ESGOTADO", 12)

novoProdutoInfantil.acessarGets()
console.log(novoProdutoInfantil)