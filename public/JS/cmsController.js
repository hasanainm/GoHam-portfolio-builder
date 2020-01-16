document.getElementById("user-name-title").addEventListener("click", function (event) {
    console.log("clicked");
    event.preventDefault();
    $.ajax("/api/useraccount", {
      type: "GET"
    }).then(function (data) {
        window.location = "/userName/" + data[i].id
    });
  })

document.getElementById("user-skills").addEventListener("click", function (event) {
    console.log("clicked");
    event.preventDefault();
    $.ajax("/api/useraccount", {
      type: "GET"
    }).then(function (data) {
        window.location = "/userSkills/" + data[i].id
    });
  })

document.getElementById("user-projects").addEventListener("click", function (event) {
    console.log("clicked");
    event.preventDefault();
    $.ajax("/api/useraccount", {
      type: "GET"
    }).then(function (data) {
        window.location = "/userProjects/" + data[i].id
    });
  })

document.getElementById("user-links").addEventListener("click", function (event) {
    console.log("clicked");
    event.preventDefault();
    $.ajax("/api/useraccount", {
      type: "GET"
    }).then(function (data) {
        window.location = "/userLinks/" + data[i].id
    });
  })

document.getElementById("user-resume").addEventListener("click", function (event) {
    console.log("clicked");
    event.preventDefault();
    $.ajax("/api/useraccount", {
      type: "GET"
    }).then(function (data) {
        window.location = "/userResume/" + data[i].id
    });
  })