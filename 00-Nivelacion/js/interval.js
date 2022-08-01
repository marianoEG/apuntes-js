const saludo = () => {
  document.write("<li>Hola loko</li>");
};
document.write("<ol>");

setInterval(saludo, 2000); //Sin parentesis para que lo use como quiera

document.write("</ol>");
