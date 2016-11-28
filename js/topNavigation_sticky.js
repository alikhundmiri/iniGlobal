/**
 * Created by alikhundmiri on 27/11/16.
 */
var mn = $(".main-nav");

      $(window).scroll(function () {
        if( $(this).scrollTop() > 720 ) {
          mn.addClass("main-nav-scrolled");
        } else {
          mn.removeClass("main-nav-scrolled");
        }
      });