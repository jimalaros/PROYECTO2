# PROYECTO2

API REST en la cuál encontrarás funciones como:

* Observar todos los usuarios registrados.
* Crear un nuevo usuario.
* Iniciar sesión con los usuarios nuevos.
* Ver todos los productos disponibles y sus precios.
* Crear, editar y eliminar productos si el rol del usuario es Administrador.
* Crear pedidos y editarlos si el estado lo permite.

# Comienzo 🚀

## Instalación 🔧

_Estas instrucciones te permitirán correr el proyecto y realizar las pruebas correspondientes._

1. Descarga el repositorio en este [link](https://github.com/jimalaros/PROYECTO2) e instala los packages como se muestra a continuación.

```
npm init -y
```

```
npm i express dotenv jest supertest helmet jsonwebtoken moongose morgan 
```

```
npm i @babel/core @babel/cli @babel/node @babel/preset-env
```

2. Ejecutar el proyecto con el siguiente comando:

```
npm start
```

3. Dirigirse a la documentación de Swagger en el siguiente [link](https://localhost:5000/api-docs/)


4. El único usuario administrador es jimalaros25@gmail.com y su clave es 12345, con este usuario tienes acceso a todas las rutas de la API REST.

## Las rutas

### Ruta de USUARIOS

_Para crear un usuario tendrás que llenar todos los datos de este esquema en el body correspondiente, acá un pequeño ejemplo:_

```
{
    "usuario": "H",
    "nombre": "R",
    "apellido": "Orozco",
    "correo": "h@gmail.com",
    "telefono": "321850",
    "direccion": "Calle 15 # 22-02",
    "contraseña": "2222"
}
```
Importante: El rol de los usuarios nuevos siempre va a ser Usuario y no Administrador (el administrador por defecto es "False").

_Para iniciar sesión con el nuevo usuario en la ruta "Login", tendrás que llenar los datos de este esquema:_

```
{
    "correo":"h@gmail.com",
    "contraseña":"2222"
}
```

### Ruta PEDIDOS

_Para crear un pedido tendrás que llenar el siguiente esquema en el body:_

```
{
    "nombres":["Hamburguesa doble", "Coca-cola"],
    "cantidades":[2,2],
    "mediodepago": "PSE",
    "estado":"Cerrado"
}
```

De la siguiente manera: 

* Para el body, el vector "nombres" se puede llenar con tantos nombres de productos como se desee, aunque hay 8 en el sistema, se pueden repetir, siempre y cuando estos existan dentro de la lista de productos, también es importante recalcar que se debe respetar la escritura, cualquier producto escrito de mala manera, hará que el programa presente un error del tipo: _cannot calculated price of undefined_.

* El vector "cantidades" tiene que tener la misma longitud del vector "nombres", es decir, cada producto escrito en el vector "nombres" debe tener su cantidad correspondiente.

* IMPORTANTE: Si el estado del pedido se envía como "cerrado", en la ruta de edición, no se podrá hacer nada, para editar el pedido el estado tiene que decir "abierto".

_Hay dos maneras de ver tus pedidos:_

1. En la ruta de pedidos, los administradores podrán observar todos los pedidos hechos por todos los usuarios.

_Hay dos rutas de edición de pedidos:_

1. Para que los usuarios editen, recuerda que se crea pedido por id de usuario y se edita de la misma manera, con el id del usuario.
2. La ruta para que los administradores cambien el estado del pedido de los usuarios.

_Recordatorio_

El único usuario administrador es jimalaros25@gmail.com y su clave es 12345.

## Construido con 🛠️

* NodeJS
* Express
* Swagger

## Autores ✒️

* **Jimmy Alexander Arango Ossa** - *Link* - [jimalaros](https://github.com/jimalaros/PROYECTO2)
