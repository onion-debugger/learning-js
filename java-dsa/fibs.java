public int fib(int n) {
    if (n < 2) return n;
    // Caching implementation
    int[] cache = new int[n + 1];
    for (int i = 0; i < cache.length; i++) {
        cache[i] = -1;
    }

    // Fill the known values
    cache[0] = 0;
    cache[1] = 1;

    return fib(n, cache);
}

public int fib(int n, int[] cache) {
    // if the value is in the cache, return it
    if (cache[n] >= 0) return cache[n];

    // else compute and add it to the cache
    cache[n] = fib(n - 1, cache) + fib(n - 2, cache);
    return cache[n];
}
