const { rejects } = require("assert");
const fs = require("fs");
const color = require("colors")

const crearArchivo = async(base, lista, hasta) => {
    try {
        let salida;
        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
        }
        if (lista) {
            console.log(salida.green)
        }
        fs.writeFileSync(`tabla-${base}.txt`, salida)

        return `tabla-${base}.txt creado correctamente`
    } catch (error) {
        throw error
    }

}

module.exports = {
    crearArchivo
}