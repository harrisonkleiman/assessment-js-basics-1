console.log("Welcome to the password validator tool!")

console.log("Please enter a password")

// Uncomment password variable below to change variable to test different value lengths
let password = "devmountain"

if (password.length >= 10) {
  console.log("Success! Your password is validated.")
} else if (password.length < 10) {
  console.log("Failed to validate. Please try again.")
}
