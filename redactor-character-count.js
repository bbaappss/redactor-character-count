/*
* Redactor Character Count
* Provides a character counter for redactor fields
*/

(function($){

  $.fn.redactorCharCount = function(maxChar){
    
    return $(this).each(function(){

      // Set existing character count

      $('.current-characters').text($('.redactor_editor').text().length);

      // TODO: Write code to detect if only character in text box is a space

      function limitText(text_field) {
          if ($(text_field).text().length > maxChar) {
              $('span.current-characters').addClass('invalid');
          } else {
              if ($('span.current-characters').hasClass('invalid')) {
                  $('span.current-characters').removeClass('invalid');
              }
          }
      }

      function updateCharCount(text_field) {
          $('.current-characters').text($(text_field).text().length);
      }

      $('.redactor_editor').each(function() {
         var elem = $(this);

         // Save current value of element

         elem.data('oldVal', elem.text());

         // Bind behaviors to most methods of change
         elem.bind("propertychange keyup input paste", function(event){

            // If value has changes
          
            if (elem.data('oldVal') != elem.text()) {
          
             // Updated stored value
         
             elem.data('oldVal', elem.text());

             // Do action
         
             updateCharCount($(this));
             limitText($(this));
           }
         });
       });

    });
    
  };

})(jQuery);