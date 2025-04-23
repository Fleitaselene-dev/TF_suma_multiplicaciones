
# Proyecto de Suma y Multiplicación de Matrices con TensorFlow y Flask

Este proyecto permite realizar operaciones de suma y multiplicación de matrices generadas aleatoriamente utilizando **TensorFlow** en el servidor de Python. El usuario define las dimensiones de las matrices y el servidor genera los valores aleatoriamente entre 1 y 20.

## Requisitos

- Tener **Python 3.10 ** instalado.
- Tener las siguientes dependencias:
  - **TensorFlow** para la manipulación de matrices y cálculos.
  - **Flask** para crear el servidor web y manejar peticiones.

## Ejecucion
1. Clona el repositorio y dirigete a la rama TF-Python
2. Crea un entorno virtual para manejar las dependencias del proyecto:

   ```bash
   python -m venv env
   source env/bin/activate  # Para Linux/MacOS
   env\Scripts\activate     # Para Windows
3. Instala las dependencias:
   ```bash
   pip install -r requirements.txt
4.Ejecuta el servidor: 
   ```bash
   python server.py
