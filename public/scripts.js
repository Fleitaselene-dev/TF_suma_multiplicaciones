async function main() {
  const filas = parseInt(prompt("Ingrese el número de filas:"));
  const columnas = parseInt(prompt("Ingrese el número de columnas:"));

  const matriz1 = tf.randomUniform([filas, columnas], 1, 21, 'int32');
  const matriz2 = tf.randomUniform([filas, columnas], 1, 21, 'int32');

  const suma = tf.add(matriz1, matriz2);
  const multiplicacion = tf.matMul(matriz1, matriz2.transpose());

  await mostrarMatriz("Matriz 1", matriz1);
  await mostrarMatriz("Matriz 2", matriz2);
  await mostrarMatriz("Suma de matrices", suma);
  await mostrarMatriz("Multiplicación de matrices", multiplicacion);
}

async function mostrarMatriz(nombre, tensor) {
  const array = await tensor.array();
  const texto = `<h3>${nombre}</h3><pre>${array.map(fila => fila.join(" ")).join("\n")}</pre>`;
  document.getElementById("salida").innerHTML += texto;
}

main();