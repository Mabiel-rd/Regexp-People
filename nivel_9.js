    //También se le puede dar la vuelta a las expresiones regulares; En lugar de seleccionar los que cumplen un criterio, seleccionar los que no lo cumplen. Los rangos que tienen un circunflejo ^ en el interior de los corchetes ([^A]) simbolizan que no exista ese carácter o rango. Observa que los orcos siempre tienen un guión en su DNI. Nota: En el interior de los corchetes, si quieres indicar un guión explícitamente debe estar en la última posición, ya que sino se confundirá con el intervalo para indicar rangos.
    
    <input pattern="
[^-]+
"></input>