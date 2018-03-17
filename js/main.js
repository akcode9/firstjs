
//function main() {

/*var $packages = $('.packages');
  /*alert($packages);*/

//}

/*main here is a callback, which means that our code will wait until the DOM is loaded, or ready. */ 
/*$(document).ready(main);  


/* $('.example-class').hide(); "hide added a CSS property like "display: none" to .example-class element, which hid the elements.
$('.packages').hide();
$('.packages').fadeIn(1500);
*/

function main() {
  $('.projects').hide();
  
  $('.projects-button').on('click', function() {
  /*$(this).next().toggle();*/

  /*$('.projects').toggle(); */
  $(this).toggleClass('active');
  $(this).text("viewed");
  $(this).next().slideToggle(400);
});
  
}

$(document).ready(main);