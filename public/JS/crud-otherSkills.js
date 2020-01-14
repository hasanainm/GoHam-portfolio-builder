$(document).ready(function () {

    $("#other-skills").on("click", function (event) {

        var userid = $("#data").attr("data-id");
        console.log(userid);

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

    $("#update-other-skills").on("submit", function (event) {
        event.preventDefault();
        var id = $("[name=id]").val().trim();
        
        var updateSkills = {
            nameOfSkill: $("#update-other-skills [name=skill]").val().trim()
        };
        $.ajax("/api/updateotherskills/" + id, {
            type: "PUT",
            data: updateSkills
        }).then(
            function () {
                console.log("updated id " + id);
                location.reload();
            }
        )
    })
});