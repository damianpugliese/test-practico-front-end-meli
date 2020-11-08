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

* Diseño responsiv usando propiedades "flex-box" de CSS.
* Creación de íconos SVG.
* Uso de etiquetas "meta" para mejorar SEO.
* Uso de etiquetas y organización semántica de contenido.
* Uso de atributos 'aria' para mejorar la accesibilidad.
* Componente "Spinner" para espera de respuesta.
* Uso de Sass para definir estilos.
* Creación de página "No encontrado".
* Creación de página "Error".
* Uso de etiquetas "meta" de OpenGraph.
* Se hizo uso de recursos "extra" como ser íconos, etc.

###### Pendientes en frontend:

* Agregar Google Analytics.
* Implementar test unitarios.

### Backend
* Uso de "Async Await" para manejar las respuesta a la API de MercadoLibre.
* Al hacer petición a la API de MercadoLibre para obtener *thumbnails* de los items en el listado, se reemplaza un valor del nombre del recurso para mostrar una imagen de mejor calidad.
* Se creó una ruta adicional '/categories/:id' para solicitar las categorias de un producto (para mostrar en el BreadCrum del detalle de prodcuto) en caso de que la búsqueda de resultados totales no contenga categorias y no puedan pasarse por props al detalle de producto. Con dicho fin también se agregó la propiedad 'category_id' al objeto item devuelto por '/items/:id'.
* Se agregó la propiedad 'address' a los items devueltos por '/items?q:query' para poder mostrar la ubicación en la vista 'SearchResults'. 

###### Pendientes en backend:
* Implementar test unitarios. 

## App Info

### Autor

Damián Pugliese

### Fecha

9/11/20

### Versión

1.0.0

### Licencia

Este proyecto tiene licencia MIT

