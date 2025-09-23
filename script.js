function generatePassword(length) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*().";
  let result = "";

  for (let i = 0; i < length; i++) {
    // Pick a random index
    const randomIndex = Math.floor(Math.random() * characters.length);
    // Add that character to the result
    result += characters[randomIndex];
  }

  return result;
}

// Call the function with a desired length, e.g., 12
let password = generatePassword(12);

// Log result
console.log("Generated password: " + password);
