// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(document).ready(function () {
  // Get the currently signed-in user. Only works when the auth state is changed.
  auth.onAuthStateChanged(function (user) {
    if (user) {
      //creating a logout button dynamically only when user is logged in
      console.log("user signed in as " + user.email)
      var navbutton = $("<li>");
      navbutton.addClass("navigation__item");
      var link = $("<a>Logout</a>").attr("href", " ").addClass("navigation__link").attr("id", "logout");
      link.appendTo(navbutton);
      $(".navigation__list").append(navbutton)

      document.getElementById("buttongetstarted").style.display = "none";

    } else {
      console.log("user logged out")

    }
    $("#logout").on("click", function (event) {
      auth.signOut().then(function (action) {
      }).catch(function (error) {
        console.log(error)
      });
    })
  });



  $("#sign-up").on("click", function (event) {
    event.preventDefault();
    console.log("clicked")
    var name = $("#user-name").val().trim();
    var email = $("#user-email").val().trim();
    var password = $("#user-pass").val().trim();
    // firebase authentication method for signup
    auth.createUserWithEmailAndPassword(email, password).then(function (cred) {
      $.ajax("/api/useraccount", {
        type: "POST",
        data: {
          name: name,
          email: email,
          password: password,
          userid: cred.user.uid
        }
      }).then(function (data) {
        console.log(data)
        window.alert("Thanks for signing up " + name + " please sign in and navigate as you wish!")
        $("#user-name").val("")
        $("#user-email").val("")
        $("#user-pass").val("")
      })
    });
  });

  $("#logout").on("click", function (event) {
    auth.signOut().then(function (action) {
    }).catch(function (error) {
      console.log(error)
    });
  })


  $("#sign-in").on("click", function (event) {
    event.preventDefault();
    console.log("clicked")
    // user information
    var password = $("#sign-pass").val().trim();
    var email = $("#sign-email").val().trim();
    // firebase authentication method for signing in
    auth.signInWithEmailAndPassword(email, password).then(function (cred) {
      $.ajax("/api/useraccount", {
        type: "GET"
      }).then(function (data) {
        for (var i = 0; i < data.length; i++) {
          if (data[i].userid == cred.user.uid) {
            window.location = "/account/" + data[i].id
          }
        }
      });
    }).catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      window.alert(errorMessage);
      $("#sign-pass").val("")
      $("#sign-email").val("")
    })
  })
})
