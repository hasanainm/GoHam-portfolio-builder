// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  // Get the currently signed-in user. Only works when the auth state is changed.
  auth.onAuthStateChanged(function (user) {
    if (user) {
      console.log("User logged in")
    } else {
      console.log(user)
    }
  });



  $("#sign-up").on("submit", function (event) {
    event.preventDefault();
    console.log("clicked")
    var name = $("#user-name").val().trim();
    var email = $("#user-email").val().trim();
    var password = $("#user-pass").val().trim();
    // firebase authentication method for signup
    auth.createUserWithEmailAndPassword(email, password).then(function (cred) {
      console.log(cred.user)
      // sending over the post data object to the back end. Once processed, the account will be created and the firebase uid will be inserted in the userid attribute in the User model along with the other attributes values.
      $.ajax("/api/useraccount", {
        type: "POST",
        data: {
          name:name,
          email:email,
          password:password,
          userid:cred.user.uid
        }
      }).then(
        function (data) {
          console.log("created new user")
          $("#user-name").val("")
          $("#user-email").val("")
          $("#user-pass").val("")
        }
      );
    });
  });



  $("#sign-in").on("submit", function (event) {
    event.preventDefault();
    console.log("clicked")
    // user information
    var password = $("#sign-pass").val().trim();
    var email = $("#sign-email").val().trim();
    // firebase authentication method for signing in
    auth.signInWithEmailAndPassword(email, password).then(function (cred) {
      console.log(cred)
  });
  })
})