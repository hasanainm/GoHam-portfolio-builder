$(document).ready(function () {
  var id = $("#data").attr("data-submitid");
  console.log(id)
  var userid = parseInt(id)
  console.log(typeof userid);
  $("#submit").on("click", function (event) {
    console.log("this button")
    event.preventDefault();
    var first_name = $("#first_name").val().trim();
    var last_name = $("#last_name").val().trim();
    var title = $("#profession").val()
    var bio = $("#bio").val().trim();
    $.ajax("/api/profileinfo/" + userid, {
      type: "POST",
      data: {
        fname: first_name,
        lname: last_name,
        title: title,
        bio: bio
      }
    }).then(function (data) {
      $("#first_name").val("")
      $("#last_name").val("")
      $("#profession").val("")
      $("#bio").val("")
      console.log(data)
      location.reload();
    })
  })
});