function findFirstNonRepeatedChar(inputString) {
  for (let i = 0; i < inputString.length; i++) {
    let repeated = false;
    for (let j = 0; j < inputString.length; j++) {
      if (i !== j && inputString.charAt(i) === inputString.charAt(j)) {
        repeated = true;
        break;
      }
    }
    if (!repeated) {
      return inputString.charAt(i);
    }
  }
  return null;
}

// Prompt for input and display the result in an alert
const inputString = prompt("Enter a string:");
const firstNonRepeatedChar = findFirstNonRepeatedChar(inputString);

if (firstNonRepeatedChar !== null) {
  alert("The first non-repeated character is: " + firstNonRepeatedChar);
} else {
  alert("No non-repeated character found in the string.");
}