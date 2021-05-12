
class Vec {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
    plus(newVec) {
      this.x += newVec.x;
      this.y += newVec.y;
      return this;
    }
  
    minus(newVec) {
      this.x -= newVec.x;
      this.y -= newVec.y;
      return this;
    }
  
    get length() {
      return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }
  }
  
  console.log(new Vec(1, 2).plus(new Vec(2, 3)));
  console.log(new Vec(1, 2).minus(new Vec(2, 3)));
  console.log(new Vec(3, 4).length);
  let hasOwnProperty = Symbol("hasOwnProperty");
  let map = { one: true, two: true, hasOwnProperty: true };
  
  console.log(Object.prototype.hasOwnProperty.call(map, "one"));
  