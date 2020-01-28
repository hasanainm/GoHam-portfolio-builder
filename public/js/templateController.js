$(document).ready(function () {
  auth.onAuthStateChanged(function (user) {

    if (user) {

      document.getElementById("dark-template").addEventListener("click", function (event) {
        console.log("clicked");
        event.preventDefault();
        $.ajax("/api/useraccount", {
          type: "GET"
        }).then(function (data) {
          for (var i = 0; i < data.length; i++) {
            if (data[i].userid == user.uid) {
              window.location = "/dark/" + data[i].id
            }
          }
        });
      })

      document.getElementById("minty-template").addEventListener("click", function (event) {
        console.log("clicked");
        event.preventDefault();
        $.ajax("/api/useraccount", {
          type: "GET"
        }).then(function (data) {
          for (var i = 0; i < data.length; i++) {
            if (data[i].userid == user.uid) {
              window.location = "/minty/" + data[i].id
            }
          }
        });
      })

    }

    else {
      console.log("user logged out")
    }

  });
})