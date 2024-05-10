console.log("task 1")
for(let i = 1; i <= 10; i++) 
{console.log(i * i);}

console.log("task 2")
for(let i=5; i >= 0; i--) {
    console.log(i)
}
console.log("blast off")

console.log("task 3")
for (let i = 1; i <= 50; i+=2) {
        console.log(i+1);
    }


console.log("task 4")
let sum = 0
for (let i = 1; i <= 100; i++) {
    sum = sum+i
}
console.log(sum)

console.log("task 5")
let factorial = 1;
for(let i=1; i<=10; i++){
    factorial*=i;
    console.log(factorial)
}

console.log("Task 6")
const arr = [3, 1, 4, 1, 5];

for (let i = 0; i < arr.length; i++) {
  console.log(arr.at(i));
}

console.log("task 7")

for (let i = 0; i < arr.length; i++)
console.log(arr.at(-1))
console.log(arr.at(-2))
console.log(arr.at(-3))
console.log(arr.at(-4))
console.log(arr.at(-5))

console.log("Task 8")

let cubes = [];

for (let i = 1; i <= 10; i++) {
  cubes.push(i**3);
}
console.log(cubes);

console.log("Task 9")
let fib = [0, 1]

for (let i = 1; i <= 10; i++) {
  fib.push(fib.at(-1) + (fib.at(-2)));
}
console.log(fib);

console.log("Task 10");
let empty = []

while (arr.length > 0) {
  empty.push(arr.pop());
}

console.log(empty)