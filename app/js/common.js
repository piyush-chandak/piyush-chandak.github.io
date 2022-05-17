window.common = function() {
  // Public functions
  return {
    renderMustacheToHtml: function(templateId, data = {}) {
      if (!templateId) {
        return '';
      }
      const template = $(templateId).html();
      return Mustache.render(template, data);
    },
    scrollTo: function(element) {
      var top = 0;
      if (element) {
        const $element = $(element);
        
        top = $element && $element.length ? $element.offset().top : 0;
        if (this.isSmallDevice()) {
          const header = window.pageHeader;
          const stickybarHeight = header.getStickybarHeight();
          top = top - stickybarHeight - 25;
        }
      }
      window.scrollTo({
        top: top,
        left: 0,
        behavior: 'smooth'
      });
    },
    isSmallDevice: function() {
      return $(window).width() <= 991;
    },
    screenHeight: function() {
      return $(window).height();
    },
    isElementVisible: function(element) {
      const $element = $(element);
      if (!$element.length) {
        return false;
      }
      const scrollTop = $(window).scrollTop();
      const elementOffsetTop =  $element.offset().top;
      const elementHeight = $element.height();

      return elementOffsetTop <= scrollTop && (elementOffsetTop + elementHeight) >= scrollTop;
    },
    calculateVisibilityForElement: function(element) {
      const scrollTop = $(window).scrollTop();
      const elementOffset = $(element).offset().top;
      const distance = (elementOffset - scrollTop);

      return distance;

      // const $element = $(element);
      // if (!$element || !$element.length) {
      //   return 0;
      // }
      // const windowHeight = $(window).height();
      // const docScroll = $(document).scrollTop();
      // const elementPosition = $element.offset().top;
      // const elementHeight = $element.height();
      // const hiddenBefore = docScroll - elementPosition;
      // const hiddenAfter = (elementPosition + elementHeight) - (docScroll + windowHeight);
  
      // if ((docScroll > elementPosition + elementHeight) || (elementPosition > docScroll + windowHeight)) {
      //   return 0;
      // } else {
      //   var result = 100;

      //   if (hiddenBefore > 0) {
      //     result -= (hiddenBefore * 100) / elementHeight;
      //   }

      //   if (hiddenAfter > 0) {
      //     result -= (hiddenAfter * 100) / elementHeight;
      //   }

      //   return result;
      // }
    },
    setLocationHash(hash) {
      window.location.hash = hash;
    },
    getLocationHash() {
      return window.location.hash;
    },
    clearLocationHash() {
      this.setLocationHash('');
    },
    profileImageURL() {
      return '../../images/profile.jpg';
    }
  }
}();