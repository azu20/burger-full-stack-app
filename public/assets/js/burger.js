$(function() {
    $(".updateBurger").on("click", function(event) {

        const _id = $(this).data("id");

        const what_do_do = { effect: 1 };

        console.log("the id is ", _id);

        $.ajax(`/api/burgers/${_id}`, {
            type: "PUT",
            data: what_do_do
        }).then(
            function() {

                location.reload();
            }
        );
    });

    $(".deleteBurger").on("click", function(event) {
        const _id = $(this).data("id");

        $.ajax("/api/burgers/" + _id, { type: "DELETE" })
            .then(
                function() {
                    console.log("deleted burger" + _id);
                    location.reload();
                }
            );
    });

    $("#addBurger").on("submit", (event) => {
        event.preventDefault();

        const burger_name = $("#add-burger-text").val().trim();

        let newBurger = {
            burger_name: burger_name,
            Devoured: 0
        };

        $.ajax("/api/burgers", {
                method: "POST",
                data: newBurger
            })
            .then(
                function() {
                    console.log("updated burger", newBurger);

                    location.reload();
                }
            );
    });


});