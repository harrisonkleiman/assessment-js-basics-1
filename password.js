console.log("Welcome to the password validator tool!")

console.log("Please enter a password")

// Uncomment password variable below to change variable to test different checks
let password = "Devmountain$"
let successMessage = "Success! Your password is validated."
let failureMessage = "Failed to validate. Please try again."




  if (password.length < 10) {
    console.log(failureMessage)
  } else if (password.length > 50) {
    console.log(failureMessage)
  } else if (password.charAt(0) !== "D") {
    console.log(failureMessage)
  } else if (password.length >= 10) {
    console.log(successMessage)
  } 

