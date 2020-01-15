$(document).ready(function(){
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
  