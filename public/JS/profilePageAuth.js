$(document).ready(function () {
  // Get the currently signed-in user. Only works when the auth state is changed.
  auth.onAuthStateChanged(function (user) {
    if (user) {
      //creating a logout button dynamically only when user is logged in
      console.log("user signed in as " + user.email)
      var navbutton = $("<li>");
      navbutton.addClass("navigation__item");
      var link = $("<a>Logout</a>").attr("href", "/").addClass("navigation__link").attr("id", "logout");
      link.appendTo(navbutton);
      $(".navigation__list").append(navbutton)
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
})