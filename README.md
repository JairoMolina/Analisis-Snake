# 🐍 Análisis Snake

El modificar el código y hacerlo funcional utilizando colas no genera grandes cambios; pero los cambios que suceden sí son importantes.

La diferencia más notable es el manejo de la posición de la cabeza. En el código original, con un array, se manipulaba la serpiente con operaciones de pila utilizando `.pop()` y `.unshift()`. Sin embargo, al trabajar con una cola (FIFO), necesitamos cambiar estas operaciones. Específicamente:

- Se elimina el primer elemento de la cola con `.shift()`, que representa la parte de la serpiente que se mueve hacia atrás (la cola) 🐍.
- Se agrega un nuevo elemento al final con `.push()`, representando la cabeza que avanza 🧑‍💻.

De nuevo, visualmente y en lógica se ve exactamente igual (y eso me confundió mucho 😅), pero es cuestión de verlo como una cola que respeta el FIFO 📚.
