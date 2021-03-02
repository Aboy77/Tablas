const { crearArchivo } = require("./helpers/funciones")
const argv = require("./config/yargs")

crearArchivo(argv.b, argv.l, argv.h)
    .then(msg => console.log(msg))
    .catch(err => console.log(err))