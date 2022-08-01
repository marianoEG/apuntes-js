var Pelota = {
  color: "rojo",
  tam: 3,
  rebota: false,
  setBotar: function () {
    this.rebota = true;
  },
};

const Usuario = {
  name: "Mariano",
  edad: 30,
  email: "marianen@live.com.ar",
};

document.write("<p>" + Usuario.name + "</p>");
document.write("<p>" + Usuario.edad + "</p>");
document.write("<p>" + Usuario.email + "</p>");

const { name, edad, email } = {
  name: "mariano",
  edad: 30,
  email: "marianen@live.com.ar",
};
document.write("<p>" + name + "</p>");
document.write("<p>" + edad + "</p>");
document.write("<p>" + email + "</p>");
