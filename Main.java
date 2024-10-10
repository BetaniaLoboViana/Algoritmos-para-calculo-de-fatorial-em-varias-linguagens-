import java.util.Scanner;

public class Main {
    public static int calcularFatorial(int n) {
        if (n == 0) {
            return 1;
        } else {
            return n * calcularFatorial(n - 1);
        }
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Digite um número para calcular o fatorial: ");
        int n = scanner.nextInt();
        System.out.println("O fatorial de " + n + " é: " + calcularFatorial(n));
    }
}