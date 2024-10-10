def calcular_fatorial(n):
    if n == 0:
        return 1
    else:
        return n * calcular_fatorial(n - 1)

n = int(input("Digite um número para calcular o fatorial: "))
print(f"O fatorial de {n} é: {calcular_fatorial(n)}")