var personas = [
  ["Javier", 23, "Mexico", ["cafe", "azul"]],
  ["Susana", 25, "Argentina", ["castaño", "verde"]],
  ["Pablo", 20, "Brasil", ["rubio", "cafe"]]
];
//personas[2][3][0] = "rojo";

//document.write(personas[2][3][0]);
for (var i = 0; i < personas.length; i++) {
  document.write("<h2>" + personas[i][0] + "</h2>"); //Imprime los nombres en cada iteraciónm de la columna 0 o la primera para los usuarios.
  for (var j = 0; j < personas[i].length; j++) {
    document.write(personas[i][j] + "<br>");
  }
}
