const argv = require("yargs")
    .options({
        'b': {
            alias: 'base',
            type: 'number',
            demandOption: true
        },
        'l': {
            alias: 'lista',
            type: 'boolean',
            default: false
        },
        'h': {
            alias: 'hasta',
            type: 'number',
            demandOption: true
        }
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw "La base tiene que ser un numero"
        }
        return true
    })
    .argv;

module.exports = argv