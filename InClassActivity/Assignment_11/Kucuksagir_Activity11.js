$(document).ready(function () {
    // Click event for sidebar links
    $("#nav_list a").click(function (event) {
        event.preventDefault(); 
        var speakerFile = "json_files/" + $(this).attr("title") + ".json"; // name of JSON file
        // Clear 
        $("main").empty();
        $.getJSON(speakerFile, function (data) {
            debugger;           
            $.each(data.speakers, function(index, speaker) {
              var html = '<h1>' + speaker.title + '</h1>' +
              '<img src="' + speaker.image + '">' +
              '<h2>' + speaker.month + '<br>' + speaker.speaker + '</h2>' +
              '<p>' + speaker.text + '</p>';
          
              $("main").html(html);
            });

        });
    });
});
