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

    $(".delete-other-skills").on("click", function (event) {
        event.preventDefault();

        var id = $(".delete-other-skills").data("deleteid");
        console.log(id);
        console.log("clicked");

        // Send the DELETE request.
        $.ajax("/api/deleteotherskills/" + id, {
            type: "DELETE"
        }).then(
            function () {
                console.log("deleted id ", id);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

});