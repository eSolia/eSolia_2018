// Add files via prepend special codekit comment
// @ codekit -prepend "../../bower_components/bulma-accordion/dist/bulma-accordion.js";
// at DEPRECATED codekit-prepend "../../bower_components/bulma-badge/dist/bulma-badge.js";
// @ codekit -prepend "../../bower_components/bulma-calendar/dist/bulma-calendar.js";
// @codekit-prepend "../../bower_components/bulma-carousel/dist/bulma-carousel.js";
// at DEPRECATED codekit-prepend "../../bower_components/bulma-checkradio/dist/bulma-checkradio.js";
// at DEPRECATED codekit-prepend "../../bower_components/bulma-divider/dist/bulma-divider.js";
// @ codekit -prepend "../../bower_components/bulma-iconpicker/dist/bulma-iconpicker.js";
// at DEPRECATED codekit-prepend "../../bower_components/bulma-pageloader/dist/bulma-pageloader.js";
// @ codekit -prepend "../../bower_components/bulma-pricingtable/dist/bulma-pricingtable.js";
// @codekit-prepend "../../bower_components/bulma-quickview/dist/bulma-quickview.js";
// at DEPRECATED codekit-prepend "../../bower_components/bulma-ribbon/dist/bulma-ribbon.js";
// @ codekit -prepend "../../bower_components/bulma-slider/dist/bulma-slider.js";
// @codekit-prepend "../../bower_components/bulma-steps/dist/bulma-steps.js";
// at DEPRECATED codekit-prepend "../../bower_components/bulma-switch/dist/bulma-switch.js";
// @ codekit -prepend "../../bower_components/bulma-tagsinput/dist/bulma-tagsinput.js";
// at DEPRECATED codekit-prepend "../../bower_components/bulma-timeline/dist/bulma-timeline.js";
// at DEPRECATED codekit-prepend "../../bower_components/bulma-tooltip/dist/bulma-tooltip.js";

// document.addEventListener('DOMContentLoaded', () => {
//   console.log('Hello Bulma!');
// });

// Mobile Hamburger Menu
document.addEventListener('DOMContentLoaded', function () {

  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener('click', function () {

        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);

        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});

// Modal
document.addEventListener('DOMContentLoaded', function () {
  var buttons = Array.from(document.getElementsByClassName('modal-button'));

  for (var i = 0; i < buttons.length; i++) {
    var button = buttons[i];
    var target = document.querySelector(button.dataset.target);

    button.addEventListener("click", function(e) {
      target.classList.toggle('is-active');
    }, false);
  }
});
