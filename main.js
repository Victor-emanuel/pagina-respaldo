var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb+srv://emanuel_18:EueM_Zasd6GYeZ7@base-de-datos-pagina-web-balww.mongodb.net/test?retryWrites=true&w=majority';

var dbNombre = 'mis_datos';
var bd;

var cliente = new MongoClient(url, { useUnifiedTopology: true })

cliente.connect(async function(err, client) {
    if (err) {
        console.error(err)
        process.exit(1)
    }

    console.log('Conectado exitosamente!');
    bd = client.db(dbNombre);
    await bd.collection('registrados').insertOne({
        nombre: 'emanuel',
        edad: 25,
        profesor: { nombre: 'norman' }
    })
    bd = client.db(dbNombre);
    await bd.collection('logueados').insertOne({
        nombre: 'carlos',
        edad: 23,
    })
});