
document.getElementById('formulario').addEventListener('submit', async function(event) {
    event.preventDefault();

    // Obtener las dimensiones de las matrices
    const filas = document.getElementById('filas').value;
    const columnas = document.getElementById('columnas').value;

    try {
        // Enviar las dimensiones al backend
        const response = await axios.post('/operar', new URLSearchParams({
            'filas': filas,
            'columnas': columnas
        }));

        const data = response.data;

        // Mostrar las matrices y resultados
        let output = `<h2>Matrices Generadas</h2>`;
        output += `<h3>Matriz 1:</h3><pre>${JSON.stringify(data.matriz1, null, 2)}</pre>`;
        output += `<h3>Matriz 2:</h3><pre>${JSON.stringify(data.matriz2, null, 2)}</pre>`;

        output += `<h3>Suma de matrices:</h3><pre>${JSON.stringify(data.suma, null, 2)}</pre>`;
        output += `<h3>Multiplicación de matrices:</h3><pre>${JSON.stringify(data.multiplicacion, null, 2)}</pre>`;

        document.getElementById('resultados').innerHTML = output;
    } catch (error) {
        console.error("Error al operar las matrices:", error);
    }
});
