// echo.js
function exf(s, n) {
  // Print the string s, n times
  for (let i = 0; i < n; i++) {
      console.log(s);
  }
}

module.exports = { exf };
  

// notation.js
function mean(scores) {
  if (scores.length === 0) return 0; // Handle empty array case
  const total = scores.reduce((sum, score) => sum + score, 0);
  return total / scores.length;
}

// Export the mean function to make it available for imports
module.exports = { mean };


// fileImport.js
const { mean } = require('./notation');

// Example usage of the mean function
const scores = [90, 80, 70, 100, 85];
const average = mean(scores);

console.log("The average score is:", average);


// notation.test.js
const { mean } = require('./notation');

describe('mean function', () => {
  test('calculates the correct mean for an array of scores', () => {
    const scores = [90, 80, 70, 100, 85];
    expect(mean(scores)).toBe(85);
  });

  test('returns 0 for an empty array', () => {
    const scores = [];
    expect(mean(scores)).toBe(0);
  });

  test('calculates the correct mean for a single value array', () => {
    const scores = [50];
    expect(mean(scores)).toBe(50);
  });
});


// fileImport.test.js
const { exf } = require('./echo');

describe('exf function', () => {
  beforeEach(() => {
    // Mock console.log before each test
    console.log = jest.fn();
  });

  test('logs the string the correct number of times', () => {
    const message = "echo";
    const times = 3;

    exf(message, times);

    // Check that console.log was called the correct number of times
    expect(console.log).toHaveBeenCalledTimes(times);
    expect(console.log).toHaveBeenCalledWith(message);
  });

  test('does not log if n is 0', () => {
    const message = "echo";
    const times = 0;

    exf(message, times);

    // console.log should not be called at all
    expect(console.log).not.toHaveBeenCalled();
  });

  test('logs the correct message for different inputs', () => {
    const message = "JS from server";
    const times = 2;

    exf(message, times);

    // Check that console.log was called twice with the correct message
    expect(console.log).toHaveBeenCalledTimes(times);
    expect(console.log).toHaveBeenCalledWith(message);
  });
});
