class MySet {
  constructor() {
    this.collection = [];
  }

  has(element) {
    return this.collection.indexOf(element) !== -1;
  }

  values() {
    return this.collection;
  }

  add(element) {
    if (!this.has(element)) {
      this.collection.push(element);
      return true;
    }
    return false;
  }

  delete(element) {
    if (this.has(element)) {
      index = this.collection.indexOf(element);
      this.collection.splice(index, 1);
      return true;
    }

    return false;
  }

  size() {
    return this.collection.length;
  }

  //will return the union of the two sets as a new set
  union(otherSet) {
    let unionSet = new MySet();
    let firstSet = this.values();
    firstSet.forEach((item) => {
      if (otherSet.has(item)) {
        unionSet.add(item);
      }
    });
    return unionSet;
  }

  //will return the difference of the two sets as a new set.
  difference(otherSet) {
    let diffSet = new MySet();
    let firstSet = this.values();
    firstSet.forEach((item) => {
      if (!otherSet.has(item)) {
        diffSet.add(item);
      }
    });
    return diffSet;
  }

  //this method checks if the set is a subset of a different set.
  subset(otherSet) {
    let firstSet = this.values();
    return firstSet.every((item) => {
      return otherSet.has(item);
    });
  }
}
export default MySet;
