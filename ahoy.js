/**************************************
* TITLE: pick me
* AUTHOR: Kiren Kaur
* CREATE DATE: 3/28/18
* PURPOSE: learn about jquery
* LAST MODIFIED ON: 3/28/18
**************************************/


$(document).ready(function(){

      $('p').html('The Start of Ahoy JQuery!');

      $("#button1").on('click', function() {
          $('p').append('<br> Ahoy JQuery!');
      });

      $('#button2').on('click', function() {
          $('p').html('<br> Ahoy JQuery!');
      });

}());
