const opts = {base: {
    alias: 'b',
    demand: true
},
limite: {
    default: 10,
    alias: 'l'
}
};
const argv = require('yargs')
                    .command(
                        'listar','las tablas de multiplicar por consola', opts)
                    .command(
                        'crear','las tablas de multiplicar en un txt', opts)
                    .help()
                    .argv;

module.exports = {argv};
