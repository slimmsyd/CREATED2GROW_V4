$(document).ready(function() {
  var $loader = $('.loader');
  if ($loader.length === 0) {
    console.error('Loader element not found');
    return;
  }

  $loader.removeClass('loader--active');

  $('.btn').on('click', function(event) {
    console.log('Button clicked');
    event.preventDefault(); // Prevent the default action (navigation)
    console.log('Default action prevented');
    $loader.addClass('loader--active');
    
    var $anchor = $(this).closest('a');
    if ($anchor.length === 0) {
      console.error('Anchor element not found');
      return;
    }
    var href = $anchor.attr('href');
    
    setTimeout(function() {
      console.log('Navigating to:', href);
      $loader.removeClass('loader--active');
      window.location.href = href; // Redirect after the animation
    }, 2500); // Adjust the timeout to match your animation duration
  });
});