function addStrings(s1, s2) {
  let result = "";
  let carry = 0;
  let i = s1.length - 1;
  let j = s2.length - 1;

  // Loop until both strings are fully processed and there is no carry left
  while (i >= 0 || j >= 0 || carry > 0) {
    const digit1 = i >= 0 ? s1[i] - "0" : 0; // Convert char to number, or 0 if out of bounds
    const digit2 = j >= 0 ? s2[j] - "0" : 0; // Same for the second string

    const sum = digit1 + digit2 + carry; // Calculate sum of digits and carry
    result = (sum % 10) + result; // Append the last digit of sum to result
    carry = Math.floor(sum / 10); // Update carry for the next iteration

    i--; // Move to the next digit in s1
    j--; // Move to the next digit in s2
  }

  return result; // Return the final result string
}

// Example usage:
const s1 = "123";
const s2 = "456";
console.log(addStrings(s1, s2)); // Outputs: "579"
