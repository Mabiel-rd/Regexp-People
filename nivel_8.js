// Modifiquemos un poco los personajes. Ahora hay tanto minúsculas como mayúsculas. Si queremos incluir varios rangos, podemos hacerlo así: [A-Za-z], aunque también podemos incluir carácteres concretos sueltos: [AHz] (Se acepta la letra A, la letra H y la letra z).

<input pattern="
[0-9]+[AW-c-h]
"></input>