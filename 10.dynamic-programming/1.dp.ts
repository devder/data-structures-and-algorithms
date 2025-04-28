// memoized fib

// this is O(n) ..way better, the memo can also be an object and can be stored outside
const fib = (n: number, memo: number[]) => {
  if (memo[n]) return memo[n];
  if (n <= 2) return 1;
  const res = fib(n - 1, memo) + fib(n - 2, memo);
  memo[n] = res;
  return res;
};

function minCoinChange(coins, amount) {
  const result = [];
  let remaining = amount;
  for (let i = coins.length - 1; i >= 0; i--) {
    const coin = coins[i];
    while (remaining >= coin) {
      result.push(coin);
      remaining -= coin;
    }
  }

  return result;
}

minCoinChange([1, 5, 6, 9], 11);

console.log(minCoinChange([1, 2, 3, 4, 5], 11));
