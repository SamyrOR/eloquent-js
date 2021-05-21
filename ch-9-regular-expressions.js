// * 9.1 Regexp golf
// Fill in the regular expressions

verify(/ca(r|t)/, ["my car", "bad cats"], ["camper", "high art"]);

verify(/po?r?op/, ["pop culture", "mad props"], ["plop", "prrrop"]);

verify(
  /ferr(et|y|ari)/,
  ["ferret", "ferry", "ferrari"],
  ["ferrum", "transfer A"]
);

verify(
  /ious\b/,
  ["how delicious", "spacious room"],
  ["ruinous", "consciousness"]
);

verify(/\s(\.|,|;|:)/, ["bad punctuation ."], ["escape the period"]);

verify(
  /\w{7,}/,
  ["Siebentausenddreihundertzweiundzwanzig"],
  ["no", "three small words"]
);

verify(
  /\b([^ e])+\b/i,
  ["red platypus", "wobbling nest"],
  ["earth bed", "learning ape", "BEET"]
);

function verify(regexp, yes, no) {
  // Ignore unfinished exercises
  if (regexp.source == "...") return;
  for (let str of yes)
    if (!regexp.test(str)) {
      console.log(`Failure to match '${str}'`);
    }
  for (let str of no)
    if (regexp.test(str)) {
      console.log(`Unexpected match for '${str}'`);
    }
}

// * 9.2 Quoting Style

let text = "'I'm the cook,' he said, 'it's my job.'";
// Change this call.
console.log(text.replace(/(\W')|('\W)\b/g, '"')); //! Minha tentativa
// → "I'm the cook," he said, "it's my job."
//? Resposta correta .replace(/(^|\W)'|'(\W|$)/g, '$1"$2')

//* 9.3 Numbers agains

// Fill in this regular expression.
let number = /(\d|-\d)|((\+\d+)|((\d\.)?\de-?\d?))|((\d?\.\d+)|(\d\.))/i; //! Minha tentativa

// Tests:
for (let str of [
  "1",
  "-1",
  "+15",
  "1.55",
  ".5",
  "5.",
  "1.3e2",
  "1E-4",
  "1e+12",
]) {
  if (!number.test(str)) {
    console.log(`Failed to match '${str}'`);
  }
}
for (let str of ["1a", "+-1", "1.2.3", "1+1", "1e4.5", ".5.", "1f5", "."]) {
  if (number.test(str)) {
    console.log(`Incorrectly accepted '${str}'`);
  }
}

//? Resposta correta /^[+\-]?(\d+(\.\d*)?|\.\d+)([eE][+\-]?\d+)?$/
