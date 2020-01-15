$(document).ready(function () {

    $("#submit-project").on("click", function (event) {

        var userid = $("#data").attr("data-id");
        console.log(userid);

        event.preventDefault();
        var title = $("#project-title-value").val().trim();

        $.ajax("/api/project/" + userid, {
            type: "POST",
            data: {
                title: title
            }
        }).then(function () {
            location.reload();
        });
    });

    $("#update-project-title").on("submit", function (event) {
        event.preventDefault();
        var id = $("[name=id]").val().trim();

        var updateProjectTitle = {
            title: $("#update-project-title [name=skill]").val().trim()
        };
        $.ajax("/api/updateprojecttitle/" + id, {
            type: "PUT",
            data: updateProjectTitle
        }).then(
            function () {
                console.log("updated id " + id);
                location.reload();
            }
        )
    })

});