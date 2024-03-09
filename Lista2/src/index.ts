//Exercicio 1
class Carro{
    private marca: string;
    private modelo: string;
    private anoLançamento: number;

    constructor(marca:string, modelo:string, anoLançamento:number){
        this.marca = marca;
        this.modelo = modelo;
        this.anoLançamento = anoLançamento;
    }

    idadeCarro():string{
        let idade:number = 2024 - this.anoLançamento;

        return "A idade do carro é: " + idade.toString();
    
    }

    get getMarca():string{
        return this.marca
    }
    get getModelo():string{
        return this.modelo
    }
    get getAnoLançamento():number{
        return this.anoLançamento
    }
}

let carro = new Carro("Fiat", "Argo", 2022);

console.log("\n1)")
console.log(carro.idadeCarro());


//Exercicio 2

class Calculadora
{
    private valor1: number;
    private valor2: number;

    constructor(valor1: number, valor2:number){
        this.valor1 = valor1;
        this.valor2 = valor2;
    }

    soma():string{
        let soma:number = this.valor1 + this.valor2;

        return "Resultado da soma é: " + soma.toString();
    }

    sub():string{
        let sub:number = this.valor1 - this.valor2;

        return "Resultado da subtração é: " + sub.toString();
    }
    mult():string{
        let mult:number = this.valor1 * this.valor2;

        return "Resultado da multiplicação é: " + mult.toString();
    }
    div():string{
        let div:number = this.valor1 / this.valor2;
         
        return "Resultado da divisão é: " + div.toString();
    
    }
    porcent():string{
        let porcent:number = (this.valor1 * this.valor2) / 100;

        return "Resultado da porcentagem é: " + porcent.toString();
    }
    set setValor1(valor1:number){
        this.valor1 = valor1;
    }
    get getValor1():number{
        return this.valor1
    }
    get getValor2():number{
        return this.valor2
    }

}


let calculadora = new Calculadora(0, 50);

console.log("\n2)")
console.log(calculadora.soma());
console.log(calculadora.sub());
console.log(calculadora.mult());
console.log(calculadora.div());
console.log(calculadora.porcent());
calculadora.setValor1 = 2;
console.log(calculadora.div());


//Exercicio 3

class Produto
{
    nome:string;
    preço:number;
    quantidadeEmEstoque: number;

    constructor(nome: string, preço:number, quantidadeEmEstoque:number){
        this.nome = nome;
        this.preço = preço;
        this.quantidadeEmEstoque = quantidadeEmEstoque;
    }

    calcularValorTotalEmEstoque(){
        let total:number = this.preço * this.quantidadeEmEstoque;

        return "O total é: " + total.toString();
    }

    reporEstoque(quantidade: number){
        let i;

            this.quantidadeEmEstoque += quantidade;

        return "Estoque adicionado com sucesso! Estoque atual: " + this.quantidadeEmEstoque;
    }
    vender(quantidade: number){
        
        if(this.quantidadeEmEstoque < quantidade){
            return "Estoque insuficiente";
        } else {
            this.quantidadeEmEstoque -= quantidade;
            return "Removido com sucesso! Estoque atual: " + this.quantidadeEmEstoque;
        }
    }
    get getNome():string{
        return this.nome;
    }
    
    get getPreço():number{
        return this.preço;
    }
    get getQuantidadeEmEstoque():number{
        return this.quantidadeEmEstoque;
    }
    set setQuantidadeEmEstoque(quantidadeEmEstoque:number){
        this.quantidadeEmEstoque = quantidadeEmEstoque;
    }
}

let produto = new Produto("Rimel", 20, 10);

console.log("\n3)");
console.log(produto.calcularValorTotalEmEstoque());
console.log(produto.reporEstoque(10));
console.log(produto.vender(2));
console.log(produto.calcularValorTotalEmEstoque());