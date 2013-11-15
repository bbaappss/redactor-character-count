/*
* Redactor Character Count
* Provides a character counter for redactor fields
*/

(function($){

  $.fn.charCount = function(){
    
    console.log('hello we are in brandon scotts plugin!');

    return $(this).each(function(){

      // function limitText(text_field) {
      //     if ($(text_field).text().length > 500) {
      //         $('span.current-characters').addClass('invalid');
      //     } else {
      //         if ($('span.current-characters').hasClass('invalid')) {
      //             $('span.current-characters').removeClass('invalid');
      //         }
      //     }
      // }

      // function updateCharCount(text_field) {
      //     $('.current-characters').text($(text_field).text().length);
      // }

      // $('.redactor_editor').each(function() {
      //    var elem = $(this);

      //    // Save current value of element

      //    elem.data('oldVal', elem.text());

      //    // Bind behaviors to most methods of change
      //    elem.bind("propertychange keyup input paste", function(event){

      //       // If value has changes
          
      //       if (elem.data('oldVal') != elem.text()) {
          
      //        // Updated stored value
         
      //        elem.data('oldVal', elem.text());

      //        // Do action
         
      //        updateCharCount($(this));
      //        limitText($(this));
      //      }
      //    });
      //  });

    });
    
  };

})(jQuery);