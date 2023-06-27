//1)
//a)Crie uma classe chamada Forma que tenha o atributo público "altura", 
//com seu construtor que recebe o valor da altura como parâmetro.
class Forma {
    constructor(altura) {
    this.altura = altura
    }
//b)  Crie as funcoes "calcularArea" e "calcularVolume" para esta classe,
// e para cada uma delas mostre apenas uma frase no console.log, indicando que o usuário acessou a função da classe-mãe.
    calcularArea() {
    console.log("Acessou a função calcularArea da classe-mãe.")
    }

    calcularVolume() {
    console.log("Acessou a função calcularVolume da classe-mãe.")
    }
}
//2)
//a)  Crie a classe "FormaPlana" como herdeira da classe Forma, que tenha os 
//atributos privados próprios "tipo", "base" e "comprimento".
//b)  Crie o construtor desta classe invocando o construtor 
//da classe mãe e receba como parâmetro os valores dos atributos próprios.
//c)  Crie os métodos getters e setters para cada um dos atributos próprios.

class FormaPlana extends Forma {
    constructor(altura, tipo, base, comprimento) {
    super(altura)
    this.tipo = tipo
    this.base = base
    this.comprimento = comprimento
    }

    getTipo() {
    return this.tipo;
    }

    setTipo(tipo) {
    this.tipo = tipo.tipo()
    }

    getBase() {
    return this.base
    }

    setBase(base) {
    this.base = base
    }

    getComprimento() {
    return this.comprimento
    }

    setComprimento(comprimento) {
    this.comprimento = this.comprimento
    }

//3)
//a)  Sobrescreva o método "calcularArea" da classe FormaPlana para que faça a seguinte verificação:
//-   Se o valor do atributo "tipo" for igual a "retangular", retorne o resultado da expressão: area = base*comprimento
//-   Se o valor do atributo "tipo" for igual a "triangular", retorne o resultado da expressão: area = (base*comprimento) / 2
//b)  Sobrescreva o método "calcularVolume" para que faça a seguinte verificação: 
//-   Se o valor do atributo "tipo" for igual a "retangular", capture o retorno do método
// "calcularArea" na variável "areabase" e retorne o resultado da expressão: volume = areabase * altura
//-   Se o valor do atributo "tipo" for igual a "triangular", capture o retorno do método 
//"calcularArea" na variável "areabase" e retorne o resultado da expressão: volume = (areabase * altura)/2

    calcularArea() {
    if (this.tipo === "retangular") {
        const area = this.base * this.comprimento
        return area.toFixed(2)
    } else if (this.tipo === "triangular") {
        const area = (this.base * this.comprimento) / 2
        return area.toFixed(2)
    } else {
        console.log("Tipo inválido!")
        return -1
    }
    }

    calcularVolume() {
        if (this.tipo === "retangular") {
            const areabase = this.calcularArea()
            const volume = areabase * this.altura
            return volume.toFixed(2)
        } else if (this.tipo === "triangular") {
            const areabase = this.calcularArea()
            const volume = (areabase * this.altura) / 3
            return volume.toFixed(2)
        } else {
            console.log("Tipo inválido!")
            return -1
        }
    }
}
//Exercício 4
//a)  Crie a classe FormaCircular como herdeira da classe Forma, que tenha os atributos privados próprios #pi e #raio.
//b)  Implemente o método construtor, que receba raio como parâmetro e atribua o valor fixo 3.14 ao atributo pi.
//c)  Implemente os métodos get e set para o atributo raio.

class FormaCircular extends Forma {
    #pi
    #raio

    constructor(raio, altura) {
        super(altura)
        this.#raio = raio
        this.#pi = 3.14
    }

    // Getters e setters para o atributo próprio
    getRaio() {
    return this.#raio
    }

    setRaio(raio) {
    this.#raio = raio
    }
    getPi() {
    this.#pi = pi
    }


//Exercício 5
//a)  Na classe FormaCircular, crie o método "calcularArea" retornando a variável "area" com o resultado da fórmula: area = pi * raio²
//b)  Na classe FormaCircular, crie o método  "calcularVolumeCilindro" retornando o resultado da fórmula: volume = (areabase * h)
//c)  Na classe FormaCircular, crie o método "calcularVolumeCone" retornando  o resultado da fórmula: volume = (areabase * h)/3
//d)  Na classe FormaCircular, crie o método "calcularVolumeEsfera" retornando o resultado da fórmula: volume = areabase * raio * 1.33

    calcularArea() {
        const area = this.#pi * Math.pow(this.#raio, 2)
        return area.toFixed(2)
    }
    
    calcularVolumeCilindro(h) {
        const areabase = this.calcularArea()
        const volume = areabase * h
        return volume.toFixed(2)
    }
    
    calcularVolumeCone(h) {
        const areabase = this.calcularArea()
        const volume = (areabase * h) / 3
        return volume.toFixed(2)
    }
    
    calcularVolumeEsfera() {
        const areabase = this.calcularArea();
        const volume = areabase * this.#raio * 1.33
        return volume.toFixed(2)
    }

//Exercício 6
//a)  Modifique o retorno de todas as funções de cálculo de área e volume para que o resultado seja retornado com apenas duas casas decimais.
//b)  Modifique o atributo "tipo" da classe "FormaPlana" para que transforme o valor recebido como parâmetro em caracteres minúsculos, evitando erros de digitação por parte do usuário.
//c)  Modifique os métodos "calcularArea" e "calcularVolume" da classe FormaPlana para que emitam uma mensagem de erro caso o tipo da forma seja diferente de "retangular" ou "triangular".


}

//Exercício 7
//a)  Instancie um objeto para cada classe, tanto da classe mãe quanto das classes filhas, e execute todos os métodos, registrando as saídas obtidas.
//b)  Explique a razão pela qual a invocação do método "calcularVolume" por uma instância da classe "FormaCircular" produz a saída padrão da classe mãe.

const forma = new Forma(5);
console.log(forma.altura);
forma.calcularArea(); // Saída: Acessou a função calcularArea da classe-mãe.
forma.calcularVolume(); // Saída: Acessou a função calcularVolume da classe-mãe.

const formaPlana = new FormaPlana(4, "retangular", 8, 10);
console.log(formaPlana.altura);
console.log(formaPlana.tipo);
console.log(formaPlana.base);
console.log(formaPlana.comprimento);
formaPlana.calcularArea(); // Saída: 80.00
formaPlana.calcularVolume(); // Saída: 200.00

const formaCircular = new FormaCircular(3,3);
console.log(formaCircular.altura);
console.log(formaCircular.getRaio());
let area = formaCircular.calcularArea(); // Saída: 28.26
console.log(area)
let circulo = formaCircular.calcularVolumeCilindro(6); // Saída: 169.56
console.log(circulo)
let volume = formaCircular.calcularVolumeCone(6); // Saída: 84.78
console.log(volume)
let esfera = formaCircular.calcularVolumeEsfera(); // Saída: 112.20
console.log(esfera)

