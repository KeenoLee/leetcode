// 2665. Counter II
// Easy
// Companies
// Hint
// Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

// The three functions are:

// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.

// Example 1:

// Input: init = 5, calls = ["increment","reset","decrement"]
// Output: [6,5,4]
// Explanation:
// const counter = createCounter(5);
// counter.increment(); // 6
// counter.reset(); // 5
// counter.decrement(); // 4
// Example 2:

// Input: init = 0, calls = ["increment","increment","decrement","reset","reset"]
// Output: [1,2,1,0,0]
// Explanation:
// const counter = createCounter(0);
// counter.increment(); // 1
// counter.increment(); // 2
// counter.decrement(); // 1
// counter.reset(); // 0
// counter.reset(); // 0

// https://leetcode.com/problems/counter-ii/description/?envType=study-plan-v2&envId=30-days-of-javascripts

/* Approach 1: Closure Closure */

type Counter = {
  increment: () => number;
  decrement: () => number;
  reset: () => number;
};

function createCounter(init: number): Counter {
  let currentCount = init;
  return {
    increment: function () {
      currentCount++;
      return currentCount;
    },
    decrement: function () {
      currentCount--;
      return currentCount;
    },
    reset: function () {
      currentCount = init;
      return currentCount;
    },
  };
}

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */

// Runtime 55ms (Beats 88.11%)
// Memory 52.04MB (Beats 6.29%)

/* Approach 2: Closure with Shortened Syntax */

type Counter = {
  increment: () => number;
  decrement: () => number;
  reset: () => number;
};

function createCounter(init: number): Counter {
  let currentCount = init;
  return {
    increment: () => ++currentCount,
    decrement: () => --currentCount,
    reset: () => (currentCount = init),
  };
}

/* Approach 3: Closure with Proxy */

// Rather than returning a normal object, we can return a Proxy which emulates the behavior of an object with methods. We can do this by listening to all property access (get) events and if the requested key matches the name of a method, perform the appropriate logic.

// Note that this solution is primarily for demonstration purposes. Proxies are a very powerful tool and their use should be reserved for situations that absolutely require them.

var createCounter = function (init: number) {
  let currentCount = init;
  return new Proxy(
    {},
    {
      get: (target, key) => {
        switch (key) {
          case "increment":
            return () => ++currentCount;
          case "decrement":
            return () => --currentCount;
          case "reset":
            return () => (currentCount = init);
          default:
            throw Error("Unexpected Method");
        }
      },
    }
  );
};
