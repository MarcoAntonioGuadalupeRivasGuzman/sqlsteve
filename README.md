# sqlsteve

Es una herramienta que permite crear tablas de mysql de una forma simple 
mediante el uso de protos (archivos json) que permiten declarar 
la estructura de una tabla de mysql y que sea facilemente replicada 
por esta persona solo corriendo un comando.

## Uso de protos

Para la creacion de las tablas se plantea la idea de usar un archivo json 
que permitira escribir la estructura de una tabla de sql y que demas persista 
y sea facilmente transferible, se escogio un archivo json ya que es una 
forma simple de estructurar y que muchas personas han usado ya que los 
archivo json son populares dentro del desarollo.

## Estructura de un proto

El objeto json que se crea a la hora de seleccioar crear un proto 
contiene de momento dos campos: el campo name y el campo colums.

### Campo name

El campo name hace referencia al nombre que tendra la tabla y por defecto 
se toma el mismo nombre que tiene el proto para el nombre de la tabla.

### Camp colums

El campo column es una arrego de objetos en el que cada objeto representa una 
columna y los atributos describen las caracteristicas que se quieren en las columna 
por el momento los atributos esperados son los siguientes:

nameField: 
typeField:
sizeField:
floatField:
isNull: