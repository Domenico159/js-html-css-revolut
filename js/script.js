

$(document).ready( function() {

    // Reference
var allLink = $('header .nav-right > ul > li');

var dropBig = $('header .nav-right ul.dropdown-big');

var drop1 = $('header .nav-right ul.dropdown-small.drop-1');

var drop2 = $('header .nav-right ul.dropdown-small.drop-2');

var drop3 = $('header .nav-right ul.dropdown-small.drop-3');





console.log(allLink);


  allLink.click( function() {

    var thisElement = $(this);

    var indexElement = thisElement.index() ;

    console.log(indexElement);

    



    switch (indexElement) {
        case 0:
            dropBig.toggleClass('active');
            drop1.removeClass('active');
            drop2.removeClass('active');
            drop3.removeClass('active');
            break;

            case 1:
            drop1.toggleClass('active');
            dropBig.removeClass('active');
            drop2.removeClass('active');
            drop3.removeClass('active');
            break;

            case 2:
            drop2.toggleClass('active');
            dropBig.removeClass('active');
            drop3.removeClass('active');
            drop1.removeClass('active');
            break;

            case 3:
            drop3.toggleClass('active');
            dropBig.removeClass('active');
            drop1.removeClass('active');
            drop2.removeClass('active');
            break;
    
    }


  } );
      
      dropBig.mouseleave( function() {

        dropBig.removeClass('active');

      } );

      drop1.mouseleave( function() {

        drop1.removeClass('active');

      } );

      drop2.mouseleave( function() {

        drop2.removeClass('active');

      } );

      drop3.mouseleave( function() {

        drop3.removeClass('active');

      } );

    //   Mouse enter

      allLink.mouseenter( function() {

        var thisElement = $(this);
        var indexElement = thisElement.index();

        // console.log(indexElement);

        switch (indexElement) {
            case 0:
                dropBig.addClass('active');
                drop1.removeClass('active');
                drop2.removeClass('active');
                drop3.removeClass('active');
                break;
    
                case 1:
                drop1.addClass('active');
                dropBig.removeClass('active');
                drop2.removeClass('active');
                drop3.removeClass('active');
                break;
    
                case 2:
                drop2.addClass('active');
                dropBig.removeClass('active');
                drop3.removeClass('active');
                drop1.removeClass('active');
                break;
    
                case 3:
                drop3.addClass('active');
                dropBig.removeClass('active');
                drop1.removeClass('active');
                drop2.removeClass('active');
                break;
        }
            
        


      } );


    // End ready
} );




