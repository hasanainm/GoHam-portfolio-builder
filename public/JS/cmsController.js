$(document).ready(function () {
    auth.onAuthStateChanged(function (user) {

        if (user) {
            //creating a logout button dynamically only when user is logged in
            console.log("user signed in as " + user.email)
            var navbutton = $("<li>");
            navbutton.addClass("navigation__item");
            var link = $("<a>Logout</a>").attr("href", "/").addClass("navigation__link").attr("id", "logout");
            link.appendTo(navbutton);
            $(".navigation__list").append(navbutton)

            // click function on navigation "portfolio profile" link. Making it easier for the user to navigate. If the user wants to return to the home screen and decides to go back to the portfolio profile page they can do so.
            document.getElementById("profileUser").addEventListener("click", function (event) {
                console.log("clicked");
                event.preventDefault();
                $.ajax("/api/useraccount", {
                    type: "GET"
                }).then(function (data) {
                    for (var i = 0; i < data.length; i++) {
                        if (data[i].userid == user.uid) {
                            window.location = "/cmsPage/" + data[i].id
                        }
                    }
                });
            })

            document.getElementById("user-name-title").addEventListener("click", function (event) {
                console.log("clicked");
                event.preventDefault();
                $.ajax("/api/useraccount", {
                    type: "GET"
                }).then(function (data) {
                    for (var i = 0; i < data.length; i++) {
                        if (data[i].userid == user.uid) {
                            window.location = "/cmsPage/" + data[i].id
                        }
                    }

                });
            })

            document.getElementById("user-skills").addEventListener("click", function (event) {
                console.log("clicked");
                event.preventDefault();
                $.ajax("/api/useraccount", {
                    type: "GET"
                }).then(function (data) {
                    for (var i = 0; i < data.length; i++) {
                        if (data[i].userid == user.uid) {
                            window.location = "/profileSkills/" + data[i].id
                        }
                    }
                });
            })

            document.getElementById("user-projects").addEventListener("click", function (event) {
                console.log("clicked");
                event.preventDefault();
                $.ajax("/api/useraccount", {
                    type: "GET"
                }).then(function (data) {
                    for (var i = 0; i < data.length; i++) {
                        if (data[i].userid == user.uid) {
                            window.location = "/profileProjects/" + data[i].id
                        }
                    }
                });
            })

            document.getElementById("user-links").addEventListener("click", function (event) {
                console.log("clicked");
                event.preventDefault();
                $.ajax("/api/useraccount", {
                    type: "GET"
                }).then(function (data) {
                    for (var i = 0; i < data.length; i++) {
                        if (data[i].userid == user.uid) {
                            window.location = "/profileLinks/" + data[i].id
                        }
                    }
                });
            })

            document.getElementById("user-resume").addEventListener("click", function (event) {
                console.log("clicked");
                event.preventDefault();
                $.ajax("/api/useraccount", {
                    type: "GET"
                }).then(function (data) {
                    for (var i = 0; i < data.length; i++) {
                        if (data[i].userid == user.uid) {
                            window.location = "/profileResume/" + data[i].id
                        }
                    }
                });
            })

            document.getElementById("template-choices").addEventListener("click", function (event) {
                console.log("clicked");
                event.preventDefault();
                $.ajax("/api/useraccount", {
                    type: "GET"
                }).then(function (data) {
                    for (var i = 0; i < data.length; i++) {
                        if (data[i].userid == user.uid) {
                            window.location = "/templates/" + data[i].id
                        }
                    }
                });
            })

            // document.getElementById("dark-template").addEventListener("click", function (event) {
            //     console.log("clicked");
            //     event.preventDefault();
            //     $.ajax("/api/useraccount", {
            //         type: "GET"
            //     }).then(function (data) {
            //         for (var i = 0; i < data.length; i++) {
            //             if (data[i].userid == user.uid) {
            //                 window.location = "/dark/" + data[i].id
            //             }
            //         }
            //     });
            // })

            // document.getElementById("minty-template").addEventListener("click", function (event) {
            //     console.log("clicked");
            //     event.preventDefault();
            //     $.ajax("/api/useraccount", {
            //         type: "GET"
            //     }).then(function (data) {
            //         for (var i = 0; i < data.length; i++) {
            //             if (data[i].userid == user.uid) {
            //                 window.location = "/minty/" + data[i].id
            //             }
            //         }
            //     });
            // })
        }

        else {
            console.log("user logged out")
        }

        $("#logout").on("click", function (event) {
            auth.signOut().then(function (action) {
            }).catch(function (error) {
                console.log(error)
            });
        })
    });
})



