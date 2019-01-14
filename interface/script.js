window.onload = function(){
    document.getElementById("start").style.display = 'none';
}

document.getElementById("login-button").addEventListener("click", function() {
    document.getElementById("login").style.display = 'none';
    document.getElementById("start").style.display = 'flex';
    console.log("Success")
});