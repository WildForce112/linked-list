import { LinkedList } from "./linked-list.js";

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
console.log(list.toString());

list.insertAt(1, 10, 11)
console.log(list.toString());

console.log(list.at(7));

console.log(list.pop(1));

console.log(list.contains("parrot"));

console.log(list.toString());

list.removeAt(2);

console.log(list.toString());