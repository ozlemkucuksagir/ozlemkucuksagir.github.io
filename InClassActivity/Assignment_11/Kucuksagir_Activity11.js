$(document).ready(function () {
    // Click event for sidebar links
    $("#nav_list a").click(function (event) {
        event.preventDefault(); 
        var speakerFile = "json_files/" + $(this).attr("title") + ".json"; // name of JSON file
        // Clear 
        $("main").empty();
        $.getJSON(speakerFile, function (data) {
            debugger;           
           data.speakers.forEach(function (speaker) {                
                var speakerHtml =
                    '<h1>' + speaker.title + '</h1>' +
                    '<img src="' + speaker.image + '">' +
                    '<h2>' + speaker.month + '<br>' + speaker.speaker + '</h2>' +
                    '<p>' + speaker.text + '</p>';
                // Append HTML elements to main section
                $("main").append(speakerHtml);
            });

        });
    });
});
