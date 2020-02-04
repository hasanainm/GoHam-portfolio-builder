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


});