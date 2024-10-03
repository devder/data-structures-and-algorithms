function addUpTo(n: number) {
  return (n * (n + 1)) / 2;
}

function addUpTo2(n: number) {
  let s = 0;

  for (let index = 1; index <= n; index++) {
    s += index;
  }

  return s;
}

function randomNumFromNToM(n: number, m: number) {
  return Math.floor(Math.random() * (m - n + 1) + n);
}

const t1 = performance.now();
console.log(addUpTo(1_000_000_000));
const t2 = performance.now();

const t3 = performance.now();
console.log(addUpTo2(1_000_000_000));
const t4 = performance.now();

console.log("time elapsed =", (t2 - t1) / 1000, "secs");
console.log("time elapsed 2=", (t4 - t3) / 1000, "secs");

function logAtLeast5(n: number) {
  const amtToLog = Math.max(5, n);
  for (let i = 1; i <= amtToLog; i++) {
    console.log(i);
  }
}

logAtLeast5(9);
