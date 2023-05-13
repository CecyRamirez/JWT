# JWT
Práctica para hacer un sistema de login 


En que consiste el proyecto:

El proyecto consiste en crear un sistema del login por el cual seamos capaces de restringir el acceso a nuestros archivos de la página, de manera que esté bien gestionada la seguridad de los datos

---------------------------------------
Descripción breve de la librería uuid:

La libreria UUID que encontramos en el sitio de npm https://www.npmjs.com/package/uuid  es utilizada para crear un uuid que le asignaremos a cada petición de manera única.
El UUID (Universal Unique Identifier) es un formato que nos sirve como identificador y que una vez generado, no se repite.

---------------------------------------
Por qué es una buena opción usar uuid y no un id autonumérico:

Aunque se utilicen varias tables, bases de datos y servidores las UUID seran diferentes. Si se trabaja en paralelo es posible unir registros o tablas enteras sin generar un conflicto por claves duplicadas. Aun trabajando en una misma base de datos la tarea de la creación de la clave puede generarse de manera paralela.
