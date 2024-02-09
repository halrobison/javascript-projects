// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  test('should output Launch! with a number divisible by 2 as parameter', function() {
    expect(launchcode.launchOutput(2)).toBe("Launch!")
  })
  
  test('should output Code! with a number divisible by only 3 as parameter', function () {
    expect(launchcode.launchOutput(3)).toBe("Code!")
  })

  test('should output Rocks! with a number divisible by only 5 as parameter', function () {
    expect(launchcode.launchOutput(5)).toBe("Rocks!")
  })

  test('should output LaunchCode! with a number divisible by 2 and 3', function() {
    expect(launchcode.launchOutput(6)).toBe("LaunchCode!")
  })

  test('should output Launch Rocks! with a number divisible by 2 and 5', function () {
    expect(launchcode.launchOutput(10)).toBe("Launch Rocks!")
  })

  test('should output Code Rocks! with a number divisible by 3 and 5', function () {
    expect(launchcode.launchOutput(15)).toBe("Code Rocks!")
  })

  test ('should output LaunchCode Rocks! with a number divisible by 2, 3 and 5', function() {
    expect(launchcode.launchOutput(30)).toBe("LaunchCode Rocks!")
  })

});