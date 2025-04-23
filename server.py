from flask import Flask, render_template, request, jsonify
import tensorflow as tf

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html') 

@app.route('/operar', methods=['POST'])
def operar_matrices():
    filas = int(request.form['filas'])
    columnas = int(request.form['columnas'])
    
    
    matriz1 = tf.random.uniform([filas, columnas], minval=1, maxval=21, dtype=tf.int32)
    matriz2 = tf.random.uniform([filas, columnas], minval=1, maxval=21, dtype=tf.int32)

    
    suma = tf.add(matriz1, matriz2)
    multiplicacion = tf.matmul(matriz1, tf.transpose(matriz2))

    
    resultado_suma = suma.numpy().tolist()
    resultado_multiplicacion = multiplicacion.numpy().tolist()

    
    return jsonify({
        'matriz1': matriz1.numpy().tolist(),
        'matriz2': matriz2.numpy().tolist(),
        'suma': resultado_suma,
        'multiplicacion': resultado_multiplicacion
    })

if __name__ == '__main__':
    app.run(debug=True)
