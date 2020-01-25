$(document).ready(function () {

    var userid = $("#data").attr("data-id");
    console.log(userid);

    $("#submit-project").on("click", function (event) {

        event.preventDefault();
        var title = $("#project-title-value").val().trim();
        var screenshot = $("#file").val().trim();
        var githublink = $("#project-github").val().trim();
        var demolink = $("#project-demo").val().trim();
        console.log(demolink);

        $.ajax("/api/project/" + userid, {
            type: "POST",
            data: {
                title: title,
                screenshot: screenshot,
                githublink: githublink,
                demolink: demolink,
            }
        }).then(function () {
            // location.reload();
        });
    });

    // $("#update-project-title").on("submit", function (event) {
    //     event.preventDefault();
    //     var id = $("[name=id]").val().trim();
    //     console.log(id);

    //     var updateProjectTitle = {
    //         title: $("#update-project-title [name=project-title]").val().trim()
    //     };
    //     $.ajax("/api/updateprojecttitle/" + id, {
    //         type: "PUT",
    //         data: updateProjectTitle
    //     }).then(
    //         function () {
    //             console.log("updated id " + id);
    //             location.reload();
    //         }
    //     )
    // })

});