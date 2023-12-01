import * as fs from "fs";
import * as readline from "readline";

let calibrationSum: number = 0;

const test = "a" + "b";
console.log(test);

// Replace 'yourfile.txt' with the path to your text file
const fileStream = fs.createReadStream("calibration-sum-input.txt");

const rl = readline.createInterface({
  input: fileStream,
  crlfDelay: Infinity,
});

rl.on("line", (line) => {
  let lineNumbers: string[] = [];
  for (const char of line) {
    if (isInteger({ s: char })) {
      lineNumbers.push(char);
    }
  }

  calibrationSum += parseInt(
    lineNumbers[0] + lineNumbers[lineNumbers.length - 1]
  );
});

rl.on("close", () => {
  console.log(`Calculated calibration sum is ${calibrationSum}`);
});

const isInteger = ({ s }: { s: string }) => {
  return !isNaN(parseInt(s));
};
