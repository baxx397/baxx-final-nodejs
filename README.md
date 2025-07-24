Tecnologías Utilizadas

- Node.js
- Express.js
- Firebase Firestore
- JSON Web Tokens (JWT)
- Dotenv
- CORS
- Body-parser
- Thunder Client (para pruebas)

Arquitectura del Proyecto
El proyecto fue diseñado siguiendo una arquitectura escalable en capas, con la siguiente estructura:

Endpoints Implementados

Autenticación (/auth)

POST /auth/login
Recibe username y password, devuelve token JWT si son correctos.
 Productos (/api/products)

GET /api/products - Devuelve todos los productos.
GET /api/products/:id - Devuelve un producto por ID.
POST /api/products/create - Crea un producto.
DELETE /api/products/:id - Elimina un producto por ID.
(Todas estas rutas están protegidas con middleware verifyToken.)

Manejo de Errores

- 404: Ruta no encontrada.
- 401: Token no enviado.
- 403: Token inválido.
- 400: Error en los datos de entrada.
- 500: Error interno del servidor.
Base de Datos
Se utilizó Firebase Firestore como base de datos en la nube. La colección products contiene los productos con estructura:
{
  "name": "1984",
  "price": 3000,
  "stock": 25
}
Pruebas Realizadas

Se utilizaron herramientas como Thunder Client (VSCode) para probar los endpoints:
1. Login → Obtención de token JWT
2. Creación de producto (POST)
3. Listado de productos (GET)
4. Borrado de producto (DELETE)
5. Acceso con token inválido → respuesta con error 403
6. Ruta inexistente → respuesta con error 404
