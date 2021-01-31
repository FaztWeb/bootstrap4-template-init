# bootstrap4-template-init

Este template inicial permite inicializar un entorno de desarrollo profesional para el desarrollo front-end que involucre el framework Bootstrap 4 y Sass, trabajando con el toolkit [Gulp.js](https://gulpjs.com) en lugar de Webpack para compilar y actualizar los cambios en tiempo real en el navegador.

### Implementación
Usar [Node.js](https://nodejs.org/) v8.x como mínimo para funcionar correctamente. Este template **NO ES COMPATIBLE** con Node.js v14.x o superior.

Para su instalación, clonar el repositorio o descargar los archivos dados. Luego, desde la carpeta de desarrollo, instalar las dependencias necesarias:

```
$ npm install jquery bootstrap popper.js @fortawesome/fontawesome-free
$ npm install --save-dev gulp gulp-cli gulp-sass node-sass@4.14.0 browser-sync
```

Una vez instaladas, ejecute el siguiente comando para iniciar el servidor:

```
$ npm run start-server
```

Esto abrirá una ventana de navegador con la dirección [http://localhost/3000](http://localhost/3000). En esta ventana, cualquier cambio efectuado sobre los archivos .scss y .html de la carpeta src se actualizarán en el navegador.
