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
