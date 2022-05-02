# To-Do-List en IONIC

Esta es una app móvil hecha con el framework de ionic.

Funciona en conjunto con el proyecto de back-end tareas-back el cual debe estarse ejecutando primero para que puedan estar disponibles los web services que se consumen en esta app de ionic

# Instalación

Una vez descargados los archivos del repositorio asegurarse de estar en la carpeta del proyecto instalas las dependencias abriendo la consola y escribiendo los siguientes comandos:

```
cd tareas-front

```

```
npm install

```

Para ejecutar en un ordenador simpemente después de descargar dependencias ejecute el siguiente comando en la consola (Tiene que tener instalado el CLI de Ionic):

```
ionic serve
 ```


 Cuando termine de compilar abrir en el navegador web http://localhost:8100/

Para visualizar de manera adecuada en el navegador web (Google Chrome) botón derecho -
inspeccionar y ponga la pantalla en modo dispositivo móvil que desee.


** NOTA ** Se debe tener corriendo el proyecto de tareas-back ya que es quien alimenta la api para que funcione esta app, lo primero que deben de hacer es crear un nuevo usuario para que puedan acceder al sitio, como se utiliza un storage para el manejo de token de usuario de repente no se genera el token pero vuelven a intentarlo hasta que los deje acceder, me paso en un par de ocasiones.