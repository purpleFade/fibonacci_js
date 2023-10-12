function fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

const n = 10; // Замініть на бажане число Фібоначчі
console.log(`Fibonacci(${n}) = ${fibonacci(n)}`);
