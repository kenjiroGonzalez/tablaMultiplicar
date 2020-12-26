
const opts = {
	base:{
		demand:true,
		alias: 'b'
	},

	limite:{
		alias: 'l',
		default: 10
	}
}

const argv = require('yargs')
	.command('listar','Imprime en consola la tabla de multplicar', opts)

	.command('crear','Crear un archivo de texto con la tabla de multiplicar especificada', opts)
	.help()
	.argv


module.exports = {
	argv
}

