var checkButton = document.getElementById("checkPalindrome");

function isPalindrome(str) {
  
  str = str.replace(/[^a-z0-9]+/gi, "").toLowerCase();
  var reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
}

checkButton.addEventListener("click", function() {
    
  var value = document.getElementById("inputPalindrome").value;
  var notification = document.getElementById("notification");
  
  if(isPalindrome(value)) {
    notification.innerHTML = "Correct, A Palindrome!";
   
  } else {
    notification.innerHTML = "Sorry, Not A Palindrome Try Racecar Or Race Car";

  }
});