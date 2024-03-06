"use strict";
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
