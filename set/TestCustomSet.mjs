import MySet from "./CustomSet.mjs";

const mySet1 = new MySet();
const mySet2 = new MySet();

mySet1.add("a");
mySet2.add("b");
mySet2.add("c");
mySet2.add("a");
mySet2.add("d");

console.log(mySet1.subset(mySet2));
console.log(mySet1.union(mySet2).values());
console.log(mySet2.difference(mySet1).values());

const mySet3 = new MySet();
const mySet4 = new MySet();

mySet3.add("a");
mySet4.add("b");
mySet4.add("c");
mySet4.add("a");
mySet4.add("d");

console.log(mySet4.values());