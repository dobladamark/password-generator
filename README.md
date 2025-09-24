# password-generator

This is a simple password generator written in **JavaScript**.  
It creates a random password containing uppercase letters, lowercase letters, numbers, and special characters.

---

📌 Features
- Generates a random password of any length.
- Includes:
  - Uppercase letters (`A-Z`)
  - Lowercase letters (`a-z`)
  - Numbers (`0-9`)
  - Special characters (`!@#$%^&*().`)

---

🛠️ How It Works
The function `generatePassword(length)`:
1. Defines a set of allowed characters.
2. Randomly picks characters from this set.
3. Builds and returns a password string of the given length.
