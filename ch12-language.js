//* 12.1 Arrays
topScope.array = (...values) => values;

topScope.length = (array) => array.length;

topScope.element = (array, index) => array[index];

run(`
do(define(sum, fun(array,
     do(define(i, 0),
        define(sum, 0),
        while(<(i, length(array)),
          do(define(sum, +(sum, element(array, i))),
             define(i, +(i, 1)))),
        sum))),
   print(sum(array(1, 2, 3))))
`);
// → 6

//* 12.2 Closure
/**
 * Go back to the definition of the fun form and explain which mechanism causes this to work.
 */

//! Answer
/**
 * I think that was by the recursive implementation
 */

//* 12.3 Comments

// This is the old skipSpace. Modify it...
function skipSpace(string) {
  //! My attempt
  let first = string.match(/\s?#\s(.+)\\n/);
  return string.slice(first);

  //? Correct answer
  // let first = string.match(/^(\s|#.*)*/);
  //     return string.slice(first[0].length)
}

console.log(parse("# hello\nx"));
// → {type: "word", name: "x"}

console.log(parse("a # one\n   # two\n()"));
// → {type: "apply",
//    operator: {type: "word", name: "a"},
//    args: []}

//* 12.4

specialForms.set = (args, scope) => {
  //! My Attempt with recursive
  let name = args[0].name;
  let backScope = Object.getPrototypeOf(scope);
  if (Object.hasOwnProperty.call(scope, name)) {
    let value = evaluate(args[1], scope);
    scope[args[0].name] = value;
    return value;
  } else if (!scope) {
    throw new Error();
  } else {
    specialForms.set(args, backScope);
  }
  //? Correct Answer
  //   if (args.length != 2 || args[0].type != "word") {
  //     throw new SyntaxError("Bad use of set");
  //   }
  //   let varName = args[0].name;
  //   let value = evaluate(args[1], env);

  //   for (let scope = env; scope; scope = Object.getPrototypeOf(scope)) {
  //     if (Object.prototype.hasOwnProperty.call(scope, varName)) {
  //       scope[varName] = value;
  //       return value;
  //     }
  //   }
  //   throw new ReferenceError(`Setting undefined variable ${varName}`);
  // };
};

run(`
do(define(x, 4),
   define(setx, fun(val, set(x, val))),
   setx(50),
   print(x))
`);
// → 50
run(`set(quux, true)`);
// → Some kind of ReferenceError
