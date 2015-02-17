$(window).load(function() {
  $('#content').masonry({
   columnWidth: 320,
   itemSelector: '.item'
  })
});

// or with jQuery
// initialize Masonry
var $container = $('#container').masonry();
// layout Masonry again after all images have loaded
$container.imagesLoaded( function() {
  $container.masonry();
});