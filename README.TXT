
La aplicacion esta disponible en 
http://127.0.0.1:3000

*****Motor de base de datos mongo db
npm install mongoose

***** Iniciar app 
node app.js

****Inicializar los datos
node init-db.js




********Para obtener lista de Anuncios:
http://127.0.0.1:3000/api/listadeanuncios

****Para obtener lista de tags:
http://127.0.0.1:3000/api/listadeanuncios/listadotags

****para obtener anuncios por tipo (tag)
CASO1 :VENDIDOS
http://127.0.0.1:3000/api/listadeanuncios?venta=true
CASO2: BUSQUEDA
http://127.0.0.1:3000/api/listadeanuncios?venta=false

****Para buscar por nombre
http://127.0.0.1:3000/api/listadeanuncios?name=Bic

****Para buscar entre un rango de precios
http://127.0.0.1:3000/api/listadeanuncios?min=10&max=40

****Para buscar a partir de un precio minimo
http://127.0.0.1:3000/api/listadeanuncios?min=10

****Para buscar a partir de un precio maximo
http://127.0.0.1:3000/api/listadeanuncios?max=40

***Acceder a las imagenes
http://127.0.0.1:3000/images/anuncios.jpeg
http://127.0.0.1:3000/images/img.pngb