// * 8.1 Retry

class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}

function reliableMultiply(a, b) {
  // Your code here.
  for (;;) {
    try {
      let result = primitiveMultiply(a, b);
      return result;
    } catch (e) {
      if (e instanceof MultiplicatorUnitFailure) {
        console.log("Running again");
      }
    }
  }
}

console.log(reliableMultiply(8, 8));

// * 8.2 The locked box

const box = {
  locked: true,
  unlock() {
    this.locked = false;
  },
  lock() {
    this.locked = true;
  },
  _content: [],
  get content() {
    if (this.locked) throw new Error("Locked!");
    return this._content;
  },
};

function withBoxUnlocked(body) {
  // Your code here.
  let boxAlreadyUnlocked = false;
  if (box.locked == true) {
    box.unlock();
  } else {
    boxAlreadyUnlocked = true;
  }
  try {
    body();
    console.log(box.content);
  } finally {
    if (!boxAlreadyUnlocked) {
      box.lock();
    }
  }
}

withBoxUnlocked(function () {
  box.content.push("gold piece");
});

try {
  withBoxUnlocked(function () {
    throw new Error("Pirates on the horizon! Abort!");
  });
} catch (e) {
  console.log("Error raised: " + e);
}
console.log(box.locked);
// → true
