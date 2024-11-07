public class Main {

    public static int fib(int n) {
        if (n == 0) return 0;

        // initialize the cache
        int[] cache = cache[n + 1];
        cache[1] = 1;

        // Iteratively fill up the rest of the table
        for (int i = 2; i <= n; i++) {
            cache[i] = fib(i - 1) + fib(i - 2);
        }

        return cache[n];
    }
}
