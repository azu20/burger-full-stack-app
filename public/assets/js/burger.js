$(document).ready(function() {
            $(".listBurger").on("click", (event) => {

                let id = $(this).data("id");
                let newDevour = {
                    burger: burger_name,
                    Devoured: $("Devoured=0").val().trim()
                };

                $
                    .ajax("/api/burgers" + id, {
                        method: "PUT",
                        data: newDevour
                    })
                    .then(() => {
                        console.log("Changed burger to Eaten");
                        // Reload the page to get the updated list
                        location.reload();
                    });
            });

            $("#addBurger").on("submit", (event) => {
                    // Make sure to preventDefault on a submit event.
                    event.preventDefault();

                    // Get the ID by finding an element with a "name" attribute equal to the string "id"
                    let newBurger = {
                        burger: $("#create-burger-text").val().trim(),
                        Devoured: $("Devoured=1).val().trim()
                        };



                        $.ajax("/api/burgers/" + id, {
                            method: "POST",
                            data: newBurger
                        })
                        .then(
                            function() {
                                console.log("updated id ", id);
                                // Reload the page to get the updated list
                                location.reload();
                            }
                        );
                    });

            });