$(document).ready(function () {

    var id = $("#data").attr("data-id");
    console.log(id)
    var userid = parseInt(id)
    console.log(typeof userid);
    //sending post request 
    $("#submit").on("click", function (event) {
        console.log("hi")
        event.preventDefault();
        var fname = $("#fname-value").val().trim();
        var lname = $("#lname-value").val().trim();
        var title = $("#title-value").val().trim();
        var bio = $("#bio-value").val().trim();
        console.log(fname)
        console.log(lname)
        console.log(title)
        console.log(bio)
        // if (fname.length > 1 && lname.length && title.length > 1 && bio.length > 1) {
        $.ajax("/api/profilename/" + userid, {
            type: "POST",
            data: {
                fname: fname,
                lname: lname,
                title: title,
                bio: bio
            }
        }).then(function (data) {
            $("#fname-value")
            $("#lname-value")
            $("#title-value")
            $("#bio-value")
            console.log(data)
            // location.reload();
        });
        // }
    });

});