const fs = require('fs');

const results = JSON.parse(fs.readFileSync('test-results.json', 'utf8'));

const totalTests = results.numTotalTests;
const passedTests = results.numPassedTests;

const score = (passedTests / totalTests) * 100;

console.log(`Test Score: ${score.toFixed(2)}%`);
console.log(`Passed: ${passedTests}/${totalTests}`);