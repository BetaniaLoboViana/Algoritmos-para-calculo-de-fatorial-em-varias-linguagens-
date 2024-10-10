<?php
function calcularFatorial($n) {
    if ($n == 0) {
        return 1;
    } else {
        return $n * calcularFatorial($n - 1);
    }
}

echo "Digite um número para calcular o fatorial: ";
$n = intval(fgets(STDIN));
echo "O fatorial de $n é: " . calcularFatorial($n) . "\n";
?>


