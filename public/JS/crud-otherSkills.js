$(document).ready(function () {

    var userid = $("#data").attr("data-id");
    console.log(userid);

    $("#other-skills").on("click", function (event) {

        event.preventDefault();
        var nameOfSkill = $("#other-skills-value").val().trim();

        $.ajax("/api/otherskills/" + userid, {
            type: "POST",
            data: {
                nameOfSkill: nameOfSkill
            }
        }).then(function () {
            location.reload();
        });
    });
});