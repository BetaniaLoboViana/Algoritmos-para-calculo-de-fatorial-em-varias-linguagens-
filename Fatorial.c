#include <stdio.h>

int fatorial(int n) {
    if (n == 0) {
        return 1;
    } else {
        return n * fatorial(n - 1);
    }
}

int main() {
    int n;
    printf("Digite um número para calcular o fatorial: ");
    scanf("%d", &n);
    printf("O fatorial de %d é: %d\n", n, fatorial(n));
    return 0;
}