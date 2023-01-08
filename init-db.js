// conectar a la base de datos
const readline = require('readline');
const connection = require('./lib/ConectToMongoose');
const Anuncio = require('./models/Anuncio');

async function main() {
// preguntar al usuario si está seguro
        const continuar = await preguntaSiNo('Estas seguro, seguro, seguro, que quieres borrar la base de datos? [n]')
        if (!continuar) {
                process.exit();}

// inicializar la colección de agentes
await initAgentes();

// desconectamos de la base de datos
connection.close();
}
main().catch(err => console.log('Hubo un error', err));


async function initAgentes() {
// borrar todos los documentos de la colección de agentes
const result = await Anuncio.deleteMany();
console.log(`Eliminados ${result.deletedCount} anuncios.`);

// crear agentes iniciales
const inserted = await Anuncio.insertMany([
    
        {
        "name": "Bicicleta",
        "vender": true,
        "precio": 230.15,
        "foto": "bici.jpg",
        "tag": [ "lifestyle", "motor"]
        },
        {
        "name": "iPhone 3GS",
        "vender": false,
        "precio": 50.00,
        "foto": "iphone.png",
        "tag": [ "lifestyle", "mobile"]
        }
        
        
]);
console.log(`Creados ${inserted.length} anuncios.`)
}
function preguntaSiNo(texto) {
return new Promise((resolve, reject) => {
        const interface = readline.createInterface({
        input: process.stdin,
        output: process.stdout
        });
        interface.question(texto, respuesta => {
        interface.close();
        if (respuesta.toLowerCase() === 'si') {
        resolve(true);
        return;
        }
        resolve(false);
        })
})
}