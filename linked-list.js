class Node{
  constructor(value = null, next = null){
    this.value = value;
    this.next = next;
  }
}

export class LinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  append(value){ 
    let node = new Node(value);
    if(this.size == 0){
      this.head = node;
      this.tail = node;
    }
    else{
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }
  prepend(value){
    let node = new Node(value);
    if(this.size == 0){
      this.head = node;
      this.tail = node;
    }
    else{
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }
  size(){
    return this.size;
  }
  head(){
    return this.head ? this.head : undefined;
  }
  tail(){
    return this.tail ? this.tail : undefined;
  }
  at(index){
    if(index > this.size - 1 || index < 0) return undefined;
    let target = this.head;
    for(let i = 0; i < index; i++){
      if(target.next != null){
        target = target.next;
      }
    }
    return target.value;
  }
  pop(){
    if(this.size == 0) return undefined;
    const popped = this.head.value;
    this.head = this.head.next;
    this.size--;
    return popped;
  }
  contains(value){
    let current = this.head;
    while(current != null){
      if(current.value == value) return true;
      else current = current.next;
    }
    return false;
  }
  findIndex(value){
    let current = this.head;
    for(let i = 0; i < this.size; i++){
      if(current.value == value) return i;
      else current = current.next;
    }
    return -1;
  }
  toString(){
    let returnString = '';
    let current = this.head;
    for(let i = 0; i < this.size; i++){
      returnString += `( ${current.value} )`;
      if(current.next == null) returnString += ' -> null';
      else returnString += ' -> '
      current = current.next;
    }
    return returnString;
  }
  insertAt(index, ...values){
    if(index < 0 || index > this.size) throw RangeError;
    const tempList = new LinkedList;
    let targetNode = this.head;
    for(let i = 0; i < index; i++){
      targetNode = targetNode.next;
    }
    for(const value of values){
      const tempNode = targetNode.next;
      targetNode.next = new Node(value, tempNode);
      this.size++;
    }
  }
  removeAt(index){
    if(index < 0 || index > this.size) throw RangeError;
    let targetNode = this.head;
    for(let i = 0; i < index - 1; i++){
      targetNode = targetNode.next;
    }
    targetNode.next = targetNode.next.next;
    this.size--;
  }
}