# sqlsteve

Es una herramienta que permite crear tablas de mysql de una forma simple 
mediante el uso de protos (archivos json) que permiten declarar 
la estructura de una tabla de mysql y que sea facilemente replicada 
por esta persona solo corriendo un comando.

## estructura de un proto

Para la creacion de las tablas se plantea la idea de usar un archivo json 
que permitira escribir la estructura de una tabla de sql y que demas persista 
y sea facilmente transferible, se escogio un archivo json ya que es una 
forma simple de estructurar y que muchas personas han usado ya que los 
archivo json son populares dentro del desarollo.