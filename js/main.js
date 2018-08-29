// Scroll
jQuery(document).ready(function ($) {
  $(".scroll").click(function (event) {
    event.preventDefault();

    $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 1000);
  });
});

$(document).ready(function () {
  /*
  var defaults = {
    containerID: 'toTop', // fading element id
    containerHoverID: 'toTopHover', // fading element hover id
    scrollSpeed: 1200,
    easingType: 'linear'
  };
  */
  $().UItoTop({ easingType: 'easeOutQuart' });
});

// Circulos
$(document).ready(function (){
  var colors = [
    ['#ffffff', '#fd9426'], ['#ffffff', '#fc3158'], ['#ffffff', '#53d769'], ['#ffffff', '#147efb']
  ];
  for (var i = 1; i <= 7; i++) {
    var child = document.getElementById('circles-' + i),
      percentage = 30 + (i * 10);

    Circles.create({
      id: child.id,
      percentage: percentage,
      radius: 80,
      width: 10,
      number: percentage / 1,
      text: '%',
      colors: colors[i - 1]
    });
  }
});
