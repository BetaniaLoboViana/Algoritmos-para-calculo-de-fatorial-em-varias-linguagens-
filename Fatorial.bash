 #!/bin/bash

fatorial() {
    if [ $1 -le 1 ]; then
        echo 1
    else
        prev=$(fatorial $(( $1 - 1 )))
        echo $(( $1 * prev ))
    fi
}

read -p "Digite um número para calcular o fatorial: " n
result=$(fatorial $n)
echo "O fatorial de $n é: $result"