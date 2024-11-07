const isPalindrome = (str) => {
  const newStr = stringHelper(str);
  let start = 0;
  let end = newStr.length - 1;

  while (start !== end) {
    if (newStr[start] !== newStr[end]) {
      return false;
    }
    start += 1;
    end -= 1;
  }

  return true;
};

function removeNonAlphanumeric(str) {
  return str
    .split("")
    .filter((char) => {
      const code = char.charCodeAt(0);
      return (
        (code >= 48 && code <= 57) || // Numbers (0-9)
        (code >= 65 && code <= 90) || // Uppercase (A-Z)
        (code >= 97 && code <= 122)
      ); // Lowercase (a-z)
    })
    .join("");
}

const stringHelper = (str) => {
  const result = removeNonAlphanumeric(str).split(" ").join("").toLowerCase();
  return result;
};

const input = "Do geese see God?";
console.log(isPalindrome(input));
console.log(isPalindrome("Was it a car or a cat I saw"));
console.log(isPalindrome("A brown fox jumping over"));
