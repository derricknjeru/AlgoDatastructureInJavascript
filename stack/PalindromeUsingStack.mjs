import { stack } from "./Stack.mjs";

let word = "racecare";

for (let i = 0; i < word.length; i++) {
  stack.push(word[i]);
}

let newWord = "";

for (let i = 0; i < word.length; i++) {
  newWord = newWord + stack.pop();
}

if (word === newWord) {
  console.log("It is a palindrome");
} else {
  console.log("It is not a palindrome");
}
