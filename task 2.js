/*function signature/sample */
function checkName(name) {

    if (typeof name !== "string") {
        return "Invalid input please Recheck Your Provided name";
      } 
  const lastIndex = name.slice(-1).toLowerCase();
  const validChars = ["a", "y", "i", "e", "o", "u", "w"];

  if (validChars.includes(lastIndex)) {
    return "Good Name";
  } else {
    return "Bad Name";
  }
}

console.log(checkName());