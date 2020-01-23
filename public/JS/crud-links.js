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
    var github = $("#github-value").val().trim();
    var facebook = $("#facebook-value").val().trim();
    var twitter = $("#twitter-value").val().trim();

    $.ajax("/api/links/" + userid, {
      type: "POST",
      data: {
        linkedin: linkedin,
        github: github,
        facebook: facebook,
        twitter: twitter
      }
      
    }).then(function (data) {
      $("#linkedin-value")
      $("#github-value")
      $("#facebook-value")
      $("#twitter-value")

      console.log(data)
      location.reload();
    });
  });

  $(".deletebtn").on("click", function (event) {
    console.log("clicked")
    event.preventDefault();

    var id = $(this).data("deleteid");
    console.log(id);
    console.log("clicked");

    $.ajax("/api/deletelinks/" + id, {
      type: "DELETE"
    }).then(
      function () {
        console.log("deleted id", id);
        location.reload();
      }
    );
  });


})