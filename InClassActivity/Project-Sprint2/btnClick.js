/*I checked with DOM management. When the button is clicked, 
I called the validateForm() function from validate.js and according to its return, 
I updated this's style and class with attr. 
Then I made another update with html using the class I changed. */

$(document).ready(function () {
  $(".submit-button").click(function () {

    if (validateForm()) {
      alert("Successful!");
      $(this).attr('style', "background-color:rgba(182, 116, 141, 0.466);color:white;border:rgba(182, 116, 141, 0.466)")
      $(this).attr('class', "completed");
      $('.completed').html('Completed');

    }
  })
});



