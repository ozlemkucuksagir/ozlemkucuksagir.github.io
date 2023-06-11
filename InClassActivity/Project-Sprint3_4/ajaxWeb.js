$(document).ready(function () {
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/users',
        method: 'GET',
        success: function (response) {
            var html = '';

            // the user data
            $.each(response, function (index, user) {
                html += '<div>';
                html += '<h3>' + user.name + '</h3>';
                html += '<p>Email: ' + user.email + '<br>';
                html += 'Phone: ' + user.phone + '</p>';
                html += '</div>';
            });


            // Update the partnerships
            $('#partnerships').html(html);
            $('#partnerships').attr("style", "font-size:15px;");



        },
        error: function (xhr, status, error) {
            console.log("An error occurred: " + error);
        }
    });
});
