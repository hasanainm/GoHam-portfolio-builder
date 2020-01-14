//DOM must load completely
$(document).ready(function () {
  var id = $("#data").attr("data-id");
  console.log(id)
  var userid = parseInt(id)
  console.log(typeof userid);
  //sending post request 
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

  //sending the update request
  $("#update-back-end-skill").on("submit", function (event) {
    event.preventDefault();
    var id = $("[name=id]").val().trim();

    var updateSkills = {
      nameOfSkill: $("#update-back-end-skill [name=skill]").val().trim()
    };
    $.ajax("/api/updatebackendskills/" + id, {
      type: "PUT",
      data: updateSkills
    }).then(
      function () {
        console.log("updated id " + id);
        location.reload();
      }
    )
  })

})