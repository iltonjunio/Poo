class Forma {
    constructor(altura) {
    this.altura = altura
    }
}
class FormaCircular extends Forma {
    static pi = 3.14
    raio

    constructor(raio, altura) {
        super(altura)
        this.raio = raio
    }

    getRaio() {
        return this.raio
    }

    setRaio(raio) {
        this.raio = raio
    }

    calcularArea(raio) {
        console.log("Acessou o método calcularArea da classe FormaCircular.")
        return (FormaCircular.pi * Math.pow(raio, 2)).toFixed(2)
    }

    calcularVolumeCilindro(raio, h) {
        console.log("Acessou o método calcularVolumeCilindro da classe FormaCircular.")
        const areaBase =  this.raio.calcularArea(raio)
        return (areaBase * h).toFixed(2)
    }

    calcularVolumeCone(raio, h) {
        console.log("Acessou o método calcularVolumeCone da classe FormaCircular.")
        const areaBase =  this.raio.calcularArea(raio)
        return ((areaBase * h) / 3).toFixed(2)
    }

    static calcularVolumeEsfera(raio) {
        console.log("Acessou o método calcularVolumeEsfera da classe FormaCircular.")
        const areaBase =  this.raio.calcularArea(raio)
        return (areaBase * raio * 1.33).toFixed(2)
    }
}

const area =  this.raio.calcularArea(raio)
console.log(area)
const volumeCilindro = FormaCircular.calcularVolumeCilindro(raio, altura)
console.log(volumeCilindro)
const volumeCone = FormaCircular.calcularVolumeCone(raio, altura)
console.log(volumeCone)
const volumeEsfera = FormaCircular.calcularVolumeEsfera(raio)
console.log(volumeEsfera)

