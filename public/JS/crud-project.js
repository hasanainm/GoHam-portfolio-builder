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
            location.reload();
        });
    });


    var select = document.getElementById("my-select");
    console.log(select);
    select.onchange = function () {

        var selectedString = select.options[select.selectedIndex].value;
        console.log(selectedString)

        $("#update-project").on("click", function (event) {
            event.preventDefault();


            var title = $("#project-title-value").val().trim();
            var screenshot = $("#file").val().trim();
            var githublink = $("#project-github").val().trim();
            var demolink = $("#project-demo").val().trim();

            $.ajax("/api/updateproject/" + selectedString, {
                type: "PUT",
                data: {
                    title: title,
                    screenshot: screenshot,
                    githublink: githublink,
                    demolink: demolink
                }
            }).then(function () {
                location.reload();
            })
        });
    };



})