
const fibonacci = function (n) {
    if (n === 0 || n === 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
};

const lucas = function (n) {
    if (n === 0 || n === 1) {
        return n * -1 + 2;
    }
    return lucas(n - 1) + lucas(n - 2);
};

const fib_like = function (n_0, n_1) {
    return function (n) {
        if (n === 0) {
            return n_0;
        }
        if (n === 1) {
            return n_1;
        }
        return fib_like(n_0, n_1)(n - 1) + fib_like(n_0, n_1)(n - 2);
    };
};

debugger;