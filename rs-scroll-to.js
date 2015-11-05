angular.module('edwecate').directive('rsScrollTo', function() {
  return {
    restrict: 'A',// look for the rs-scroll-to attribute
    
    link: function(scope, element, attrs) {
      element.click(function() {
        var target = $(attrs.rsScrollTo);// attempt to fetch element by selector

        if (target.length) {
          // get desired delay via rs-scroll-delay or default to 400
          var delay = parseInt(attrs.rsScrollDelay) || 400;
          
          // finally scroll
          $('html, body').animate({ scrollTop: target.offset().top }, delay);
        }
      });
    }
  };
});
