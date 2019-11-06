$(function() {  
    

    $(".header ,.contact").height($(window).height());
    $(window).resize(function() {
        $(".header, .contact").height($(window).height());
    });
    
    // var toPX = $(".nav-bar").height();
    // $(".header, .contact").css('top', toPX + 'px');
    // nice scroll 
    $(function() {  
        $("body").niceScroll({
            cursorcolor:"#5fb458",
            cursorwidth: "8px"
        });
    });

 // smooth scrolling on anchors
  $(document).on("click", ".scroll", function(e) {
    e.preventDefault();
  
    var hash = $(this).attr("href");
    if ($(hash).length === 0) {
      return;
    }
    //console.log($(hash).offset().top)
    $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800)
    }); 

 
    //Click event to scroll to top
    $(window).scroll(function(){
        if ($(this).scrollTop() > 750) { // If the scroll equal 750px
          $(".gotop").css({width:"40px",borderRadius:"0"}); // Show the button by give it (width 40px and border-radius 0px)
        } else { // else (if the scroll <= 150px )
          $(".gotop").css({width:"0",borderRadius:"50% 0 0 50%"}); // Return button style to default
        }
      });
      $('.gotop').click(function () { // When user click on the button
        $("html, body").animate({ scrollTop: "0" },  500); // Return scroll to 0 
      });

      //page loading
    
    $.fakeLoader({
        spinner :'spinner3'
    });
      
});