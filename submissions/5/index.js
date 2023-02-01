console.log(`
The code above outputs 5 five times, instead of the expected sequence 0, 1, 2, 3, 4.
The issue is that var variables are function-scoped, not block-scoped. 
This means that the i variable is shared among all instances of the setTimeout function. 
By the time the first setTimeout callback is executed (after one second), 
the for loop has already completed and i has the value 5. As a result, all setTimeout callbacks log the same value of 5.

To rectify the problem, you can use let instead of var to declare the i variable, which makes it block-scoped and unique to each iteration of the for loop:`);
for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
}

console.log(
  `This way, each instance of the setTimeout function has its own i variable, which retains its value even after the for loop has completed.`
);
