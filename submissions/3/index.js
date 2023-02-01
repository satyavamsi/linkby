function add(a) {
  if (arguments.length === 2) {
    return arguments[0] + arguments[1];
  } else {
    return function (b) {
      return a + b;
    };
  }
}
console.log(add(4, 6));
console.log(add(4)(6));
