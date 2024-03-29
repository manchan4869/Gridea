(function($){
	"use strict";	
    $(document).ready(function() {
            
        if ( $('.post').length ) { $('.post').fitVids(); }
            
        if ( $('select').length ) { $('select').chosen(); }
		
		// Menu Navigation
        if ( $('.toggle-menu').length ) {
            $('.toggle-menu').click( function(){
                $('#nav-wrapper .dove').toggle();
            } );
        }
        
        $('.dove .caret').click( function() {
            var $submenu = $(this).closest('.menu-item-has-children').find(' > .sub-menu');
            
            $submenu.toggle();
            
            return false;
        });
        
		
		// Toggle dove
		$(".nav-toggle").on("click", function(){
			$(this).toggleClass("active");
			$(".dove").slideToggle();
		});
	
		// Fitvids
		$(document).ready(function(){
			$(".container").fitVids();
		});

    });
})(jQuery);