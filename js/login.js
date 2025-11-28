function handleContinue() {
  const input = document.getElementById("loginInput").value;
  if (!input) {
    alert("Please enter your email or username");
    return;
  }
  console.log("Logging in with:", input);
  alert("This would proceed to password entry!");
}

function continueWithPhone() {
  console.log("Continue with phone number clicked");
  alert("Phone login would open here!");
}

function continueWithGoogle() {
  console.log("Continue with Google clicked");
  alert("Google login would be handled here!");
}

function continueWithFacebook() {
  console.log("Continue with Facebook clicked");
  alert("Facebook login would be handled here!");
}

function continueWithApple() {
  console.log("Continue with Apple clicked");
  alert("Apple login would be handled here!");
}

function handleSignup() {
  console.log("Sign up clicked");
  alert("Sign up page would open here!");
}

// Add input focus animation
document.getElementById("loginInput").addEventListener("focus", function () {
  this.style.borderColor = "#fff";
});

document.getElementById("loginInput").addEventListener("blur", function () {
  if (!this.value) {
    this.style.borderColor = "#727272";
  }
});

// Enter key support
document
  .getElementById("loginInput")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      handleContinue();
    }
  });
