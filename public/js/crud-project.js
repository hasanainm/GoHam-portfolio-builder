$(document).ready(function () {

    $("#submit-project").on("click", function (event) {

        var userid = $("#data").attr("data-id");
        console.log(userid);

        event.preventDefault();
        var title = $("#project-title-value").val().trim();
        var PDF = $("#file").val().trim();
        var githublink = $("#project-github").val().trim();
        var demolink = $("#project-demo").val().trim();

        $.ajax("/api/project/" + userid, {
            type: "POST",
            data: {
                title: title,
                PDF: PDF,
                githublink: githublink,
                demolink: demolink
            }
        }).then(function () {
            location.reload();
        });
    });


});