//DOM must load completely
$(document).ready(function () {
  var id = $("#data").attr("data-id");
  console.log(id)
  var userid = parseInt(id)
  console.log(typeof userid);
  //sending post request 
  $("#submit").on("click", function (event) {
    console.log("hi")
    event.preventDefault();
    var nameOfSkill = $("#back-end-value").val().trim();
    console.log(nameOfSkill)
    if (nameOfSkill.length > 1) {

      $.ajax("/api/backendskills/" + userid, {
        type: "POST",
        data: {
          nameOfSkill: nameOfSkill
        }
      }).then(function (data) {
        $("#back-end-value").val("")
        console.log(data)
        location.reload();
      });
    }
  });

  $(".backenddeletebtn").on("click", function (event) {
    console.log("clicked")
    event.preventDefault();

    var id = $(this).data("deleteid");
    console.log(id);
    console.log("clicked");

    $.ajax("/api/deletebackendskills/" + id, {
      type: "DELETE"
    }).then(
      function () {
        console.log("deleted id", id);
        location.reload();
      }
    );
  });


  //sending post request 
  $("#submit").on("click", function (event) {
    console.log("hi")
    event.preventDefault();
    var nameOfSkill = $("#frameworks").val().trim();
    console.log(nameOfSkill)
    if (nameOfSkill.length > 1) {

      $.ajax("/api/framework/" + userid, {
        type: "POST",
        data: {
          nameOfSkill: nameOfSkill
        }
      }).then(function (data) {
        $("#back-end-value").val("")
        console.log(data)
        location.reload();
      });
    }
  });

  $(".frameworksdeletebtn").on("click", function (event) {
    console.log("clicked")
    event.preventDefault();

    var id = $(this).data("deleteid");
    console.log(id);
    console.log("clicked");

    $.ajax("/api/deleteframework/" + id, {
      type: "DELETE"
    }).then(
      function () {
        console.log("deleted id", id);
        location.reload();
      }
    );
  });


  //sending post request 
  $("#submit").on("click", function (event) {
    console.log("hi")
    event.preventDefault();
    var nameOfSkill = $("#frontend").val().trim();
    console.log(nameOfSkill)
    if (nameOfSkill.length > 1) {

      $.ajax("/api/frontendskills/" + userid, {
        type: "POST",
        data: {
          nameOfSkill: nameOfSkill
        }
      }).then(function (data) {
        $("#back-end-value").val("")
        console.log(data)
        location.reload();
      });
    }
  });

  $(".frontenddeletebtn").on("click", function (event) {
    console.log("clicked")
    event.preventDefault();

    var id = $(this).data("deleteid");
    console.log(id);
    console.log("clicked");

    $.ajax("/api/deletefrontendskills/" + id, {
      type: "DELETE"
    }).then(
      function () {
        console.log("deleted id", id);
        location.reload();
      }
    );
  });

  
  //sending post request 
  $("#submit").on("click", function (event) {
    console.log("hi")
    event.preventDefault();
    var nameOfSkill = $("#otherskills").val().trim();
    console.log(nameOfSkill)
    if (nameOfSkill.length > 1) {
      $.ajax("/api/otherskills/" + userid, {
        type: "POST",
        data: {
          nameOfSkill: nameOfSkill
        }
      }).then(function (data) {
        $("#back-end-value").val("")
        console.log(data)
        location.reload();
      });

    }
  });

  $(".otherskillsdeletebtn").on("click", function (event) {
    console.log("clicked")
    event.preventDefault();

    var id = $(this).data("deleteid");
    console.log(id);
    console.log("clicked");

    $.ajax("/api/deleteotherskills/" + id, {
      type: "DELETE"
    }).then(
      function () {
        console.log("deleted id", id);
        location.reload();
      }
    );
  });

});