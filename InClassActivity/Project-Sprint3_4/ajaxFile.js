//Handles card clicks,
//gets data and JSON file name, clears the target, 
//fetches JSON data, and updates the target with relevant content.
$(document).ready(function () {
    //Click for cards
    $(".card").click(function (event) {
        console.log("aa");
        event.preventDefault();
        var myData = $(this).attr("id");
        //Name of JSON file
        var cardFile = "json_files/" + $(this).attr("title").toLowerCase() + ".json";
        console.log(cardFile);
        //Clear the columnChange
        $("#columnChange").empty();
        $.getJSON(cardFile, function (data) {
            $.each(data.cards, function (index, card) {

                if (card.card.name === myData) {

                    var html = '<h2>' + card.card.title + '</h2>' +
                        '<h3>' + card.card.extra + '</h3><br><br>' +
                        '<p>' + card.card.text + '</p>';
                    //Update columnChange
                    $("#columnChange").html(html);
                    $("#columnChange").attr("style", "width: 1350px; text-align: left");
                }
                else null;

            });


        });
    });






});

