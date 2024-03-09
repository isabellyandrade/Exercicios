"use strict";
//Exercicio 1
class Carro {
    constructor(marca, modelo, anoLançamento) {
        this.marca = marca;
        this.modelo = modelo;
        this.anoLançamento = anoLançamento;
    }
    idadeCarro() {
        let idade = 2024 - this.anoLançamento;
        return "A idade do carro é: " + idade.toString();
    }
    get getMarca() {
        return this.marca;
    }
    get getModelo() {
        return this.modelo;
    }
    get getAnoLançamento() {
        return this.anoLançamento;
    }
}
let carro = new Carro("Fiat", "Argo", 2022);
console.log("\n1)");
console.log(carro.idadeCarro());
//Exercicio 2
class Calculadora {
    constructor(valor1, valor2) {
        this.valor1 = valor1;
        this.valor2 = valor2;
    }
    soma() {
        let soma = this.valor1 + this.valor2;
        return "Resultado da soma é: " + soma.toString();
    }
    sub() {
        let sub = this.valor1 - this.valor2;
        return "Resultado da subtração é: " + sub.toString();
    }
    mult() {
        let mult = this.valor1 * this.valor2;
        return "Resultado da multiplicação é: " + mult.toString();
    }
    div() {
        let div = this.valor1 / this.valor2;
        return "Resultado da divisão é: " + div.toString();
    }
    porcent() {
        let porcent = (this.valor1 * this.valor2) / 100;
        return "Resultado da porcentagem é: " + porcent.toString();
    }
    set setValor1(valor1) {
        this.valor1 = valor1;
    }
    get getValor1() {
        return this.valor1;
    }
    get getValor2() {
        return this.valor2;
    }
}
let calculadora = new Calculadora(0, 50);
console.log("\n2)");
console.log(calculadora.soma());
console.log(calculadora.sub());
console.log(calculadora.mult());
console.log(calculadora.div());
console.log(calculadora.porcent());
calculadora.setValor1 = 2;
console.log(calculadora.div());
//Exercicio 3
class Produto {
    constructor(nome, preço, quantidadeEmEstoque) {
        this.nome = nome;
        this.preço = preço;
        this.quantidadeEmEstoque = quantidadeEmEstoque;
    }
    calcularValorTotalEmEstoque() {
        let total = this.preço * this.quantidadeEmEstoque;
        return "O total é: " + total.toString();
    }
    reporEstoque(quantidade) {
        let i;
        this.quantidadeEmEstoque += quantidade;
        return "Estoque adicionado com sucesso! Estoque atual: " + this.quantidadeEmEstoque;
    }
    vender(quantidade) {
        if (this.quantidadeEmEstoque < quantidade) {
            return "Estoque insuficiente";
        }
        else {
            this.quantidadeEmEstoque -= quantidade;
            return "Removido com sucesso! Estoque atual: " + this.quantidadeEmEstoque;
        }
    }
    get getNome() {
        return this.nome;
    }
    get getPreço() {
        return this.preço;
    }
    get getQuantidadeEmEstoque() {
        return this.quantidadeEmEstoque;
    }
    set setQuantidadeEmEstoque(quantidadeEmEstoque) {
        this.quantidadeEmEstoque = quantidadeEmEstoque;
    }
}
let produto = new Produto("Rimel", 20, 10);
console.log("\n3)");
console.log(produto.calcularValorTotalEmEstoque());
console.log(produto.reporEstoque(10));
console.log(produto.vender(2));
console.log(produto.calcularValorTotalEmEstoque());
