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

### Campo colums

El campo column es una arrego de objetos en el que cada objeto representa una 
columna y los atributos describen las caracteristicas que se quieren en las columna 
por el momento los atributos esperados son los siguientes:

- nameField: es el nombre que tendra la columa de la tabla, es de tipo string

- typeField: es el tipo de dato que tendra la columna (int, varchar, date), es de tipo string

- sizeField: es el tamanio del dato, se usa en los casos que sea necesario, es de tipo int

- floatField: es la cantidad de flotantes que permitira la columna, es de tipo int

- isNull: permite que la columna acepte nulos o no, es de tipo boleano (true,false) true 
permite valores nullos

### Road map

El objetivo es que el proyecto se pueda encargar de la creacion de las tablas y la 
modificacion de los campos, ademas se tiene planeado que se genere un dataObject que sera 
la representacion de la informacion de la tabla y mediante este mismo se pueda leer, escribir, 
actualizar y eliminar con el uso del data object.

Se planea que el data object tenga el control de las consultas mediante metodos que se definen en 
la clase del data object permitiendo la manipulacion simple de la informacion.