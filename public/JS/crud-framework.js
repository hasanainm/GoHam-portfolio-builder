$(document).ready(function () {
  var id = $("#data").attr("data-id");
  console.log(id)
  var userid = parseInt(id)
  console.log(typeof userid);
  //sending post request 
  $("#framework").on("click", function (event) {
    console.log("hi")
    event.preventDefault();
    var nameOfSkill = $("#framework-skill").val().trim();
    console.log(nameOfSkill)
    $.ajax("/api/framework/" + userid, {
      type: "POST",
      data: {
        nameOfSkill: nameOfSkill
      }
    }).then(function (data) {
      $("#framework-skill").val("")
      console.log(data)
      location.reload();
    });
  });
})

//sending the update request
$("#update-framework-skill").on("submit", function (event) {
  event.preventDefault();
  var id = $("[name=idframework]").val().trim();
  console.log(id)
  var updateSkills = {
    nameOfSkill: $("#update-framework-skill [name=frameworkskill]").val().trim()
  };
  console.log(updateSkills)
  $.ajax("/api/framework/" + id, {
    type: "PUT",
    data: updateSkills
  }).then(
    function () {
      console.log("updated id " + id);
      location.reload();
    }
  )
})