// close hamburger menu after click a
// $(".navigation__nav li a").on("click", function () {
//     console.log("clicked");
//     $(this).parent().fadeOut();
// });

// $(document).on("click",".navigation__nav.out",function(e) {
//     console.log("clicked");
//     if( $(e.target).is("a") ) {
//         $(this).collapse("hide");
//     }
// });

document.getElementById("profileLink").addEventListener("click", function (event) {
    console.log("clicked");

    event.preventDefault();
    $.ajax("/api/useraccount", {
        type: "GET"
    }).then(function (data) {
        for (var i = 0; i < data.length; i++) {
            if (data[i].userid == Credential.user.uid) {
                window.location = "/profilePage" + data[i].id
            }
        }
    })
})