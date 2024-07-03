// Simple Calculator in JavaScript

class Calculator {
    constructor() {
      this.value = 0;
    }
  
    add(number) {
      this.value += number;
      return this;
    }
  
    subtract(number) {
      this.value -= number;
      return this;
    }
  
    multiply(number) {
      this.value *= number;
      return this;
    }
  
    divide(number) {
      if (number === 0) {
        console.log("Cannot divide by zero.");
        return this;
      }
      this.value /= number;
      return this;
    }
  
    clear() {
      this.value = 0;
      return this;
    }
  
    printResult() {
      console.log(`Current Value: ${this.value}`);
      return this;
    }
  }
  
  // Example usage:
  const calc = new Calculator();
  calc.add(5).subtract(2).multiply(3).divide(2).printResult(); // Should output: Current Value: 4.5
  calc.clear().add(10).divide(0).printResult(); // Should output: Cannot divide by zero. followed by Current Value: 0