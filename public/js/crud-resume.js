$(document).ready(function () {

    var id = $("#data").attr("data-id");
    console.log(id);

    var userid = parseInt(id)
    console.log(typeof userid);

    $("#submit").on("click", function (event) {
        console.log("sup");
        event.preventDefault();
        var PDF = $(".resume-value").val().trim();
        
        console.log(PDF);

        $.ajax("/api/resume/" + userid, {
            type: "POST",
            data: {
                PDF: PDF
            }
        }).then(function (data) {
            $(".resume-value").val("")
            console.log(data);
            // location.reload();
        })
    });


    $(".resumedeletebtn").on("click", function (event) {
        event.preventDefault();

        var id = $(this).data("deleteid");
        console.log(id);
        console.log("clicked");


        $.ajax("/api/deleteresume/" + id, {
            type: "DELETE"
        }).then(function () {
            console.log("deleted id", id);
            location.reload();
        });
    });

});