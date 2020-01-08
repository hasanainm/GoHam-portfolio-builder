// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  // Get the currently signed-in user. Only works when the auth state is changed.
  auth.onAuthStateChanged(function (user) {
    if (user) {
      console.log(user)
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

    auth.createUserWithEmailAndPassword(email,name).then(function (cred) {
      console.log(cred.user)
      // sending over the post data object to the back end. Once processed, the account will be created and the firebase uid will be inserted in the userid attribute in the User model.
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
    

  })
})