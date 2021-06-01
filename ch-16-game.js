//* 16.1 Game over

// The old runGame function. Modify it...
async function runGame(plans, Display) {
  let lives = 3;
  for (let level = 0; level < plans.length; ) {
    let status = await runLevel(new Level(plans[level]), Display);
    if (status == "won") level++;
    if (status == "lost") {
      lives -= 1;
      if (lives == 0) {
        level = 0;
        lives = 3;
      }
    }
  }
  console.log(`Lives ${lives}`);
  console.log("You've won!");
}
runGame(GAME_LEVELS, DOMDisplay);

//* 16.2 Pausing the Game
//! My attempt, i struggle how to track the event key
// The old runLevel function. Modify this...
function runLevel(level, Display) {
  let display = new Display(document.body, level);
  let state = State.start(level);
  let ending = 1;
  let paused = false;
  return new Promise((resolve) => {
    runAnimation((time) => {
      state = state.update(time, arrowKeys);
      display.syncState(state);
      if (state.status == "playing") {
        return true;
      } else if (state.status == "pause") {
        console.log("Game paused");
      } else if (ending > 0) {
        ending -= time;
        return true;
      } else {
        display.clear();
        resolve(state.status);
        return false;
      }
    });
  });
  return !paused;
}
runGame(GAME_LEVELS, DOMDisplay);

//? Correct answer

//* 16.3 A Monster
// Complete the constructor, update, and collide methods
class Monster {
  //!My Attempt
  constructor(pos, speed) {
    this.pos = pos;
    this.speed = speed;
  }

  get type() {
    return "monster";
  }

  static create(pos) {
    return new Monster(pos.plus(new Vec(0, -1)));
  }

  update(time, state) {
    let newPos = this.pos.plus(this.speed.times(time));
    if (state.level.touches(newPos, this.size, "wall")) {
      return new Monster(this.pos, speed.times(-1));
    }
  }

  collide(state) {
    let player = state.actors["player"];
    if (player.pos == this.pos) {
      return new State(state.level, state.actors, "lost");
    }
  }
}

Monster.prototype.size = new Vec(1.2, 2);

levelChars["M"] = Monster;

runLevel(
  new Level(`
..................................
.################################.
.#..............................#.
.#..............................#.
.#..............................#.
.#...........................o..#.
.#..@...........................#.
.##########..............########.
..........#..o..o..o..o..#........
..........#...........M..#........
..........################........
..................................
`),
  DOMDisplay
);
