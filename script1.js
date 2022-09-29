{/* <script> */ }
document.getElementById("button1").addEventListener("click", function() {
  document.querySelector(".popup").style.display = "flex";
})
document.querySelector(".close").addEventListener("click", function() {
  document.querySelector(".popup").style.display = "none";
})
let btnClear = document.querySelector('.close')
// for popup1 save password
document.getElementById("button2").addEventListener("click", function() {
  document.querySelector(".popup1").style.display = "flex";
})
document.querySelector(".close1").addEventListener("click", function() {
  document.querySelector(".popup1").style.display = "none";
})
document.querySelector(".btn5").addEventListener("click", function() {
  document.querySelector(".popup1").style.display = "none";
})

// for popup2
document.getElementById("button3").addEventListener("click", function() {
  document.querySelector(".popup2").style.display = "flex";
})
document.querySelector(".close2").addEventListener("click", function() {
  document.querySelector(".popup2").style.display = "none";
})
// for popup3
document.getElementById("button4").addEventListener("click", function() {
  document.querySelector(".popup3").style.display = "flex";
})
document.querySelector(".close3").addEventListener("click", function() {
  document.querySelector(".popup3").style.display = "none";
})
document.querySelector(".btn6").addEventListener("click", function() {
  document.querySelector(".popup3").style.display = "none";
})
// for popup21
document.getElementById("btn2").addEventListener("click", function() {
  document.querySelector(".popup21").style.display = "flex";
})
document.querySelector(".close4").addEventListener("click", function() {
  document.querySelector(".popup21").style.display = "none";
})
document.querySelector(".btn4").addEventListener("click", function() {
  document.querySelector(".popup21").style.display = "none";
})
document.querySelector(".btn3").addEventListener("click", function() {
  document.querySelector(".popup2").style.display = "none";
})

// for password generation
var password = document.getElementById("password1");

function genPassword() {
  var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@$%^&*()+-/[]{}ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var passwordLength = 12;
  var password = "";

  for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
  }
  document.getElementById("password1").value = password;
}
function closegenerated() {
  document.getElementById("password1").value = "";
}

// now for copy button
function copyPassword() {
  var copyText = document.getElementById("password1");
  copyText.select();
  copyText.setSelectionRange(0, 999);
  document.execCommand("copy");
}

var myMap = new Map();
// function for save password
function savePassword() {
  var str1 = document.getElementById("text1").value;
  var str2 = document.getElementById("text2").value;
  myMap.set(str1, str2);

  document.getElementById("text1").value = "";
  document.getElementById("text2").value = "";
}

// function for search password
function searchPassword() {
  var str3 = document.getElementById("text3").value;
  var password1 = myMap.get(str3);
  document.getElementById("text4").value = password1;
  document.getElementById("text3").value = "";
}

// function for delete password
function deletePassword() {
  var str4 = document.getElementById("text5").value;
  myMap.delete(str4);
  document.getElementById("text5").value = "";
}

function logout() {
  window.location.assign("index.html")
}