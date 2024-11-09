// arrayFunctions.js
function first(array, n) {
    if (array == null || n <= 0) return [];
    if (n == null) return array[0];
    return array.slice(0, n);
  }
  
  function last(array, n) {
    if (array == null) return [];
    if (n == null) return array[array.length - 1];
    return array.slice(Math.max(array.length - n, 0));
  }
  
  function chunk(array, size) {
    var chunkedArr = [];
    var index = 0;
    while (index < array.length) {
      chunkedArr.push(array.slice(index, size + index));
      index += size;
    }
    return chunkedArr;
  }
  
  const myColor = ["Red", "Green", "White", "Black"];
  
  // Jest Tests
  describe('Array functions tests', () => {
  
    // Test for first function
    test('first should return the first n elements of an array', () => {
      expect(first([1, 2, 3, 4, 5], 3)).toEqual([1, 2, 3]);
    });
  
    test('first should return an empty array when n <= 0', () => {
      expect(first([1, 2, 3], 0)).toEqual([]);
    });
  
    test('first should return the first element when n is null', () => {
      expect(first([1, 2, 3], null)).toBe(1);
    });
  
    test('first should return an empty array when array is null', () => {
      expect(first(null, 3)).toEqual([]);
    });
  
    // Test for last function
    test('last should return the last n elements of an array', () => {
      expect(last([1, 2, 3, 4, 5], 3)).toEqual([3, 4, 5]);
    });
  
    test('last should return the last element when n is null', () => {
      expect(last([1, 2, 3], null)).toBe(3);
    });
  
    test('last should return an empty array when array is null', () => {
      expect(last(null, 3)).toEqual([]);
    });
  
    // Test for string concatenation of myColor array
    test('should concatenate all array elements into a string with commas by default', () => {
      expect(myColor.toString()).toBe("Red,Green,White,Black");
      expect(myColor.join()).toBe("Red,Green,White,Black");
    });
  
    test('should concatenate all array elements without any separator', () => {
      expect(myColor.join('')).toBe("RedGreenWhiteBlack");
    });
  
    // Test for chunk function
    test('chunk should divide the array into chunks of predefined size', () => {
      expect(chunk([1, 2, 3, 4, 5, 6], 2)).toEqual([[1, 2], [3, 4], [5, 6]]);
    });
  
    test('chunk should handle chunking with size larger than the array', () => {
      expect(chunk([1, 2, 3], 5)).toEqual([[1, 2, 3]]);
    });
  
    test('chunk should handle an empty array', () => {
      expect(chunk([], 2)).toEqual([]);
    });
  
    test('chunk should handle array with size 1', () => {
      expect(chunk([1, 2, 3, 4], 1)).toEqual([[1], [2], [3], [4]]);
    });
  });
  
  
