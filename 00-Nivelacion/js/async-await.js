const peticion = async () => {
  setTimeout(() => {
    const datos = {
      id: 3,
      name: "Jorge",
      username: "Jorgin",
      email: "jorgeloko@lokomail.net",
    };
    console.log(datos);
  }, 2000);
};

peticion().then(console.log);
