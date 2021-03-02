const { crearArchivo } = require("./helpers/funciones")
const argv = require("./config/yargs")

console.clear()

// const [, , base] = process.argv;
// const [, baseN] = base.split("=")

// const base = 2;

crearArchivo(argv.b, argv.l, argv.h)
    .then(msg => console.log(msg))
    .catch(err => console.log(err))