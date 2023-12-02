function Subject() {
  this.observers = []; // array of observer functions
}

Subject.prototype = {
  subscribe: function (fn) {
    this.observers.push(fn);
  },
  unsubscribe: function (fnToRemove) {
    this.observers = this.observers.filter((fn) => {
      if (fn != fnToRemove) return fn;
    });
  },
  fire: function () {
    this.observers.forEach((fn) => {
      fn.call();
    });
  },
};

const subject = new Subject();

const obj1 = {
  someData: 'someData',
  showData: function () {
    console.log(this.someData);
  },
};

const obj2 = {
  anotherData: 'anotherData',
  showData: function () {
    console.log(this.anotherData);
  },
};

// function Observer2() {
//   console.log('Observer 2 Firing!');
// }

// function Observer1() {
//   console.log('Observer 1 Firing!');
// }

subject.subscribe(obj1.showData.bind(obj1));
subject.subscribe(obj2.showData.bind(obj2));

subject.fire();



