$(document).ready(function() {

    $("#resume").on("click", function (event) {
        console.log("clicked");

        var userid = $("#data").attr("data-id");
        console.log(userid);

        event.preventDefault();
        var PDF = $("#resume-value").val().trim();

        $.ajax("/api/resume/" + userid, {
            type: "POST",
            data: {
                PDF: PDF
            }
        }).then(function () {
            location.reload();
        });
    });

});