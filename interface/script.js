window.onload = function(){
    document.getElementById("start").style.display = 'none';
    document.getElementById("login").style.display = 'flex';
    document.getElementById("game").style.display = 'none';
}

document.getElementById("login").addEventListener("click", function() {
    document.getElementById("login").style.display = 'none';
    var provider = new firebase.auth.FacebookAuthProvider();
    console.log(provider)
    console.log(firebase.auth().signInWithPopup(provider))
    firebase.auth().signInWithPopup(provider).then(function(result) {
        console.log("1")
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        console.log(token)
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