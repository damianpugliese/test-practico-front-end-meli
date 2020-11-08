> Test Práctico Front-End Mercado Libre

&nbsp;  

## Inicio Rápido  

``` bash
# Instalar dependencias (concurrently) en la carpeta raíz
npm install (or npm i)

# Instalar dependencias en la carpeta server (Express)
npm run server-install

# Instalar dependencias en la carpeta client (React)
npm run client-install

# Correr Cliente (client/React) y Servidor (server/Express) con concurrently simultáneamente
npm run dev

# Correr sólo el Servidor (Express) 
npm run server

# Correr sólo el Cliente (React) 
npm run client

# El Servidor (Express) corre en http://localhost:5000 y el Cliente (React) en http://localhost:3000
```

## Tecnologías
Frontend:
- ReactJS
- Sass
- HTML

Backend:
- NodeJS
- ExpressJ

## Estructura
Eproyecto está dividido en dos carpetas: "client" (ReactJS) y "server" (NodeJS).

- **client**
  - src
    - assets
      - images
    - components
    - layout
    - styles
    - views
- **server**
  - cache
  - config
  - controllers 
  - helpers
  - routes
  - utils 

## Tareas realizadas y pendientes 

### Frontend
* Uso de caché usando API HTML5 "sessionStorage" sobre datos obtenidos por AJAX. La misma caduca tras 40 segundos.
* Uso de metodología "BEM" para organizar clases CSS y HTML.
* Diseño responsivo usando propiedades "flex-box" de CSS.
* Uso de propiedades CSS con prefijos "-moz-", "-webkit-", etc. para garantizar compatibilidad con navegadores.
* Uso de URLs amigables.
* Uso de íconos png con variaciones para dispositivos con mayor DPI, así como íconos vectoriales .svg.
* Uso de etiquetas "meta" para mejorar SEO.
* Cambio dinámicamente de etiquetas "meta" y "title" para contribuir a SEO.
* Uso de etiquetas y organización semántica de contenido.
* Uso de atributos AIRA para mejorar la accesibilidad.
* Mostrar componente "cargando" para informar al usuario.
* Uso de Sass para definir estilos.
* Uso de gulp para automatizar creación de .css a partir de .scss
* Creación de página "No encontrado" y sección genérica para mostrar mensajes para el usuario.
* Uso de etiquetas "meta" de OpenGraph.
* Se hizo uso de recursos "extra" como ser íconos, imágenes, etc. Sus fuentes están en el archivo "about.txt" en  la carpeta "assets".
* Uso de unidades "rem" en CSS para definir dimensiones.
* Para mejorar aún más la accesibilidad se usó un color de letra más oscuro que el sugerido en las especificaciones (para conseguir más contraste).
###### Pendientes en frontend:
* Hacer uso de componente propio "FloatingMessage" para mostrar alerta a usuarios de una forma más amigable.
* Crear "templates mockups" o "templates HTML vacíos" de los componentes para así tener una respuesta visual muy rápida para el usuario, y llenar el template cuando los datos estén disponibles.
* Agregar Google Analytics.
* Agregar botón "volver a listado" para permitir la fácil navegación con el teclado desde la vista de detalle hacia lista de items.
### Backend
* Uso de "Promises" para orquestar las peticiones y respuesta a la API de MercadoLibre.
* Definición de cabeceras HTTP de CORs por motivos de seguridad y habilitando sólo la dirección del cliente frontend consultar el backend.
* Al hacer petición a la API de MercadoLibre para obtener *thumbnails* de los items en el listado, se reemplaza un valor del nombre del recurso para mostrar una imagen de mejor calidad.
* La API desarrollada siempre devuelve **todos los campos** al cliente en su JSON, es decir, en caso de que la API de MercadoLibre no devuelva algún recurso o retorne un HTTP Status Code 404, la API desarrollada setea la propiedad en cuestión vacía para el JSON a retornar.
* Es posible modificar los parámetros de configuración antes de ejecutar el servidor en el archivo ".env" en la raíz del proyecto backend.
###### Pendientes en backend:
* Crear mecanismo de caché para datos devueltos por la API de MercadoLibre (específicamente las "monedas" o "currencies").

## App Info

### Autor

Damián Pugliese

### Fecha

9/11/20

### Versión

1.0.0

### Licencia

Este proyecto tiene licencia MIT

