function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "admin" && password == "admin@123") {
        window.location.assign("1stpage.html")
        alert("login succesfully");
    }
    else {
        alert("login failed");
        return;
    }
}

function togglePopup() {
    document.getElementById("popup-1").classList.toggle("active");
}

