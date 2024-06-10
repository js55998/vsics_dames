const userName = prompt("Please enter your name:");

if (userName !== null && userName.trim() !== "") {
  alert(`Hello, ${userName}!`);
} else {
  alert("You didn't enter a valid name.");
}