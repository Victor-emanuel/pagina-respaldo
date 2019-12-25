var usuarios = [
    { nombre: 'emanuel', pass: 'barrionuevo' }
]

var express = require('express');

var path = require('path');

var bodyParser = require('express');

var servidor = express();

var ruta = path.join(__dirname, './publico')

servidor.use(express.static(ruta))

servidor.use(bodyParser.urlencoded({ extended: false }))

servidor.use(bodyParser.json())

servidor.post('/api/login', function(consulta, respuesta) {
    var nombre = consulta.body.nombre
    var pass = consulta.body.pass
    var usuario = usuarios.find(function(usuario) {
        return usuario.nombre === nombre && usuario.pass === pass
    })

    if (usuario) {
        respuesta.end('autorizado')

    } else {
        respuesta.end('no autorizado')
    }

});


servidor.listen(3000, function() {
    console.log('escuchando en el puerto' + 3000)
});