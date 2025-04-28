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

function twoSum(arr: number[], target: number) {
  const map = new Map<number, number>();

  for (let i = 0; i < arr.length; i++) {
    const n = arr[i];
    const found = target - n;
    if (map.has(found)) {
      return [map.get(found), i];
    } else {
      map.set(n, i);
    }
  }
  return [];
}

logAtLeast5(9);

const sortString = (s: string) => {
  return s.split("").sort().join("");
};

function findAnagrams1(s: string, t: string) {
  const sortedTarget = sortString(t);
  const targetLength = t.length;
  let start = 0;
  const indexes = [];

  while (start < s.length - targetLength + 1) {
    const v = s.slice(start, targetLength + start);
    const sv = sortString(v);
    if (sv == sortedTarget) {
      indexes.push(start);
    }
    start++;
  }

  return indexes;
}

function findAnagrams(s: string, p: string): number[] {
  // Edge case - if p is longer than s
  if (p.length > s.length) return [];

  const result: number[] = [];

  // Create frequency maps for both strings
  const pMap = new Array(26).fill(0);
  const windowMap = new Array(26).fill(0);

  // Fill frequency map for pattern string p
  for (let char of p) {
    pMap[char.charCodeAt(0) - "a".charCodeAt(0)]++;
  }

  // Initialize first window
  for (let i = 0; i < p.length; i++) {
    windowMap[s[i].charCodeAt(0) - "a".charCodeAt(0)]++;
  }

  // Check if first window is an anagram
  if (arraysEqual(pMap, windowMap)) {
    result.push(0);
  }

  console.log("pMap >", pMap);

  // Slide the window
  for (let i = p.length; i < s.length; i++) {
    // Add new character to window
    windowMap[s[i].charCodeAt(0) - "a".charCodeAt(0)]++;
    console.log("windowMap 1 >", windowMap);
    // Remove character from window's start
    windowMap[s[i - p.length].charCodeAt(0) - "a".charCodeAt(0)]--;
    console.log("windowMap 2 >", windowMap);

    // Check if current window is an anagram
    if (arraysEqual(pMap, windowMap)) {
      result.push(i - p.length + 1);
    }
  }

  return result;
}

// Helper function to compare two arrays
function arraysEqual(arr1: number[], arr2: number[]): boolean {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}

console.log(findAnagrams1("cbaebabacd", "abc"));
console.log(findAnagrams("abab", "ab"));
