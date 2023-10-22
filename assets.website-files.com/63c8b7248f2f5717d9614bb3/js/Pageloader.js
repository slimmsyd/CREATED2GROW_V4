document.addEventListener('DOMContentLoaded', function() {
  var $loader = document.querySelector('.loader');
  if (!$loader) {
    console.error('Loader element not found');
    return;
  }

  $loader.classList.remove('loader--active');

  document.querySelectorAll('.btn').forEach(function(btn) {
    btn.addEventListener('click', function (event) {
      console.log('Button clicked');
      event.preventDefault(); // Prevent the default action (navigation)
      event.stopPropagation(); // Stop the event from propagating up to the parent
      console.log('Default action prevented');
      $loader.classList.add('loader--active');
      
      var anchor = this.closest('a');
      if (!anchor) {
        console.error('Anchor element not found');
        return;
      }
      var href = anchor.getAttribute('href');
      
      window.setTimeout(function () {
        console.log('Navigating to:', href);
        $loader.classList.remove('loader--active');
        window.location.href = href; // Redirect after the animation
      }, 2500); // Adjust the timeout to match your animation duration
    });
  });
});
