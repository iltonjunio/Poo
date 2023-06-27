class Forma {
    constructor(altura) {
    this.altura = altura
    }
}
class FormaCircular extends Forma {
    static pi = 3.14
    #raio

    constructor(raio, altura) {
        super(altura)
        this.#raio = raio
    }

    getRaio() {
        return this.#raio
    }

    setRaio(raio) {
        this.#raio = raio
    }

    calcularArea() {
        return (FormaCircular.pi * Math.pow(this.#raio, 2)).toFixed(2)
    }

    calcularVolumeCilindro() {
        console.log("Acessou o método calcularVolumeCilindro da classe FormaCircular.")
        const areaBase =  this.calcularArea()
        return (areaBase * this.altura).toFixed(2)
    }

    calcularVolumeCone() {
        const areaBase =  this.calcularArea()
        return ((areaBase *  this.altura) / 3).toFixed(2)
    }

    calcularVolumeEsfera() {
        console.log("Acessou o método calcularVolumeEsfera da classe FormaCircular.")
        const areaBase =  this.calcularArea()
        return (areaBase * this.#raio * 1.33).toFixed(2)
    }
}

let circulo = new FormaCircular(3,5)

const area =  circulo.calcularArea()
console.log(area)
const volumeCilindro = circulo.calcularVolumeCilindro()
console.log(volumeCilindro)
const volumeCone = circulo.calcularVolumeCone()
console.log(volumeCone)
const volumeEsfera = circulo.calcularVolumeEsfera()
console.log(volumeEsfera)

