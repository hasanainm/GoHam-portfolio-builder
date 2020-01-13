//DOM must load completely
$(document).ready(function () {
  var userid = $("#data").attr("data-id");
  console.log(userid)

  $("#back-end").on("click", function (event) {
    console.log("hi")
    event.preventDefault();
    var nameOfSkill = $("#back-end-value").val().trim();
    console.log(nameOfSkill)
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
  });
})