$(document).ready(function () {

    $("#submit-project").on("click", function (event) {

        var userid = $("#data").attr("data-id");
        console.log(userid);

        event.preventDefault();
        var title = $("#project-title-value").val().trim();
        var description = $("#project-description-value").val().trim();
        var githublink = $("#project-github").val().trim();
        var demolink = $("#project-demo").val().trim();
        // console.log(imgs)
        $.ajax("/api/project/" + userid, {
            type: "POST",
            data: {
                title: title,
                description: description,
                githublink: githublink,
                demolink: demolink
            }
        }).then(function (data) {
            location.reload();
        });
    });


    $("#updateproject").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        // Get the ID by finding an element with a "name" attribute equal to the string "id"
        var id = $("[name=id]").val().trim();
        console.log(id);

        var title = $("#project-title-update").val().trim();
        var description = $("#project-description-update").val().trim();
        var githublink = $("#project-github-update").val().trim();
        var demolink = $("#project-demo-update").val().trim();

        // Send the PUT request.
        $.ajax("/api/updateproject/" + id, {
            type: "PUT",
            data: {
                title: title,
                description: description,
                githublink: githublink,
                demolink: demolink
            }
        }).then(
            function () {
                console.log("updated id ", id);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });


});