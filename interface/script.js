

window.onload = function(){
    if(localStorage.getItem("UserId")){
        document.getElementById("start").style.display = 'flex';
        document.getElementById("login").style.display = 'none';
    }
    else{
        document.getElementById("start").style.display = 'none';
        document.getElementById("login").style.display = 'flex';
    }
    document.getElementById("game").style.display = 'none';
}

document.getElementById("login").addEventListener("click", function() {
    document.getElementById("login").style.display = 'none';
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
        console.log("1")
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        localStorage.setItem("UserId", user.uid);
        photoURL = user.providerData[0]["photoURL"]
        localStorage.setItem("PhotoUrl", photoURL)
        
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
      });
      document.getElementById("start").style.display = 'flex';
});


document.getElementById("retry").addEventListener("click", function(){
    // var modal = document.getElementById("modal");
    modal.classList.toggle("modal");
    document.getElementById("game").style.display= 'none';
    document.getElementById("title-screen").style.display='inline';
    document.getElementById("start").style.display = 'flex';
    document.getElementById("login").style.display = 'none';
    document.body.style.background = 'none';
    restart();

});


document.getElementById("logout").addEventListener("click", function(){
    // var modal = document.getElementById("modal");
    modal.classList.toggle("modal");
    localStorage.clear();
    document.getElementById("game").style.display= 'none';
    document.getElementById("title-screen").style.display='inline';
    document.getElementById("start").style.display = 'none';
    document.getElementById("login").style.display = 'flex';
    document.body.style.background = 'none';
    restart();

});