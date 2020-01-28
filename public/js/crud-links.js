$(document).ready(function () {

  var id = $("#data").attr("data-id");
  console.log(id)
  var userid = parseInt(id)
  console.log(typeof userid);

  //sending post request 
  $("#submit-links").on("click", function (event) {
    console.log("hi")
    event.preventDefault();

    var linkedin = $("#linkedin-value").val().trim();

    var instagram = $("#instagram-value").val().trim();

    var facebook = $("#facebook-value").val().trim();

    var twitter = $("#twitter-value").val().trim();

    $.ajax("/api/profilelinks/" + userid, {
      type: "POST",
      data: {
        linkedin: linkedin,
        instagram: instagram,
        facebook: facebook,
        twitter: twitter
      }

    }).then(function (data) {
      console.log(data)
      location.reload();
    });
  });

  $("#update").on("click", function (event) {
    event.preventDefault();

    var linkedin = $("#linkedin-value").val().trim();

    var instagram = $("#instagram-value").val().trim();

    var facebook = $("#facebook-value").val().trim();

    var twitter = $("#twitter-value").val().trim();

    $.ajax("/api/updatelinks/" + userid, {
      type: "PUT",
      data: {
        linkedin: linkedin,
        instagram: instagram,
        facebook: facebook,
        twitter: twitter
      }
    }).then(function () {
      location.reload();
    })
  })
})
