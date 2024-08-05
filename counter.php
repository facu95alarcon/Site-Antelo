<?php
// Archivo donde se almacenará el contador
$file = 'counter.txt';

// Si el archivo no existe, créalo e inicializa el contador a 0
if (!file_exists($file)) {
    file_put_contents($file, '0');
}

// Leer el valor actual del contador
$counter = (int)file_get_contents($file);

// Incrementar el contador
$counter++;

// Guardar el nuevo valor del contador
file_put_contents($file, (string)$counter);

// Devolver el valor del contador
echo $counter;
?>
