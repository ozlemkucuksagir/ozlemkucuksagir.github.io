$(document).ready(function () {
    // click for sidebar links
    $(".card").click(function (event) {
        console.log("aa");
        event.preventDefault();
        var myData = $(this).attr("id");
        // name of JSON file
        var cardFile = "json_files/" + $(this).attr("title").toLowerCase() + ".json";
        console.log(cardFile);
        $("#columnChange").empty();
        $.getJSON(cardFile, function (data) {
            $.each(data.cards, function (index, card) {

                if (card.card.name === myData) {

                    var html = '<h2><br><br><br>' + card.card.title + '</h2>' +
                        '<h3>' + card.card.extra + '</h3><br><br>' +
                        '<p>' + card.card.text + '</p>';

                    $("#columnChange").html(html);
                    $("#columnChange").attr("style", "width: 1350px; text-align: left");
                }
                else null;

            });


        });
    });






});

