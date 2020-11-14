$(function() {

    $("#about").addClass('current');
    $("#link-about").addClass('current');

    //----------------------------------------------------------------------------	
    // Change page "sections" when the menu item is clicked
    //----------------------------------------------------------------------------	
    $('#nav ul li a').click(function(){
        var el = $(this);
        if( !el.hasClass('current') ) {

            // get the id of the section to show
            var hash = $(this).attr('href');
            var sec = hash.replace('#', '');
            
            window.location = hash;
            
            // hide the currently showing section
            $('.section.current').slideUp(300, function(){
                $(this).removeClass('current');
                $('#' + sec).slideDown(300, function(){
                    $(this).addClass('current');
                });
            });
            $('#nav ul li a.current').removeClass('current');
            el.addClass('current');
        }
        return false;
    });
      
    
    //------------------------------------------------------------------------------
    // Show a page section based on the URL hash
    //------------------------------------------------------------------------------
    if( window.location.hash != '' ) {
    
        // see if there is a link ID to match our hash
        var el = $("#link-" + window.location.hash.replace('#', ''));
        if( el.length > 0 ) {
            el.click();
        }
    }
    
 
});