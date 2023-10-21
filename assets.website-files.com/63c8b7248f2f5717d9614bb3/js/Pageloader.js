var $loader = document.querySelector('.loader');

window.onload = function() {
  $loader.classList.remove('loader--active');
};

document.querySelectorAll('.btn').forEach(function(btn) {
  btn.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default action (navigation)
    $loader.classList.add('loader--active');
    
    // Get the href attribute of the parent <a> element
    var href = this.closest('a').getAttribute('href');
    
    window.setTimeout(function () {
      $loader.classList.remove('loader--active');
      window.location.href = href; // Redirect after the animation
    }, 2500); // Adjust the timeout to match your animation duration
  });
});
