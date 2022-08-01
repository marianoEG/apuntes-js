const sumar = (a, b) => {
  return new Promise((resolve, reject) => {
    if (a < 0 || b < 0) {
      reject("Esto no es valido");
    } else {
      resolve(a + b);
    }
  });
};

const result = sumar(-1, 5)
  .then((res) => {
    document.write(res);
  })
  .catch((err) => {
    document.write(err);
  });
