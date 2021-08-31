window.pageHeader = function() {
  const common = window.common;

  const activeClass = 'active';
  const navbarToggleClass = 'show';
  const clickEvent = 'click';

  const sections = [
    {id: '#about', name: 'About', icon: 'ri-user-line', visible: 45},
    {id: '#skills', name: 'Skills', icon: 'ri-lightbulb-line', visible: 60},
    {id: '#experience', name: 'Experience', icon: 'ri-award-fill', visible: 60},
    {id: '#projects', name: 'Projects', icon: 'ri-code-s-slash-line', visible: 60},
    {id: '#contact', name: 'Contact Me', icon: 'ri-contacts-book-2-line', visible: 60},
  ];

  let activeSection = '#about';
  let forceActiveSection = null;

  function setHeaderHeight() {
    const $header = $('#header');
    const $stickybar = $('.stickybar');

    $header.css('min-height', $stickybar.height());
  }

  function bindHamburgerEvent() {
    const $body = $('body');
    const $navbar = $('.navbar');
    const $logo = $('.logo');
    const $hamburger = $('.hamburger');
    const $backToTop = $('.back-to-top');

    $hamburger.off(clickEvent).on(clickEvent, function(event) {
      event.preventDefault();
      $hamburger.toggleClass("is-active");
      $navbar.toggleClass(navbarToggleClass);
      $body.toggleClass('no-scroll');
      $logo.toggleClass('hide');
      $backToTop.toggleClass('hidden');
    });
  }

  function bindSectionChangeEvent() {
    const $scrollto = $('.scrollto');
    $scrollto.off(clickEvent).on(clickEvent, function(event) {
      event.preventDefault();
      event.stopImmediatePropagation();
      activeSection = $(this).attr('data-id');
      common.scrollTo(activeSection);

      // Hack to mark clicked section as active after smoth scroll also
      forceActiveSection = activeSection;
      setTimeout(function() {
        forceActiveSection = null;
      }, 1500);
    });
  }

  function bindBackToTopEvent() {
    const $backToTop = $('.back-to-top');
    $backToTop.off(clickEvent).on(clickEvent, function(event) {
      event.preventDefault();
      common.scrollTo();
    });
  }


  function markActiveSection(activeSection) {
    const $navbar = $('.navbar');
    const $hamburger = $('.hamburger');
    
    activeSection ||= common.getLocationHash(); //Selecting active section
    
    removeAllActiveSection();
    $navbar.find(`[data-id="${activeSection}"]`).addClass(activeClass);

    if ($navbar.hasClass(navbarToggleClass)) {
      $hamburger.trigger(clickEvent);
    }
  }

  function removeAllActiveSection() {
    const $navbarLinks = $('.navbar .link');
    $navbarLinks.removeClass(activeClass);
  }

  function toggleBackToTopSection() {
    const $backToTop = $('.back-to-top');
    const scrollTop = $(this).scrollTop();

    const SHOW_NAVIGATION_TOP_AT = common.isSmallDevice() ? 150 : 60;

    // Show Navigation to top button
    if (scrollTop > SHOW_NAVIGATION_TOP_AT) {
      $backToTop.addClass(activeClass);
    } else {
      $backToTop.removeClass(activeClass);
    }
  }

  function toggleActiveSection() {
    const VISIBLE_PERCENTAGE = 45;
    for (var section of sections) {
      const visibleHeight = common.calculateVisibilityForElement(section.id);
      if (visibleHeight < 0) {
        continue;
      }
      const totalHeight = common.screenHeight();
      const visiblePercentage = ((totalHeight - visibleHeight) / totalHeight) * 100;
      if (visiblePercentage > VISIBLE_PERCENTAGE && visiblePercentage < 100) {
        activeSection = section.id;
        break;
      }
    }
    removeAllActiveSection();
    if (forceActiveSection) {
      activeSection = forceActiveSection;
    }
    markActiveSection(activeSection);
  }

  function bindScrollEvent() {
    $(document).scroll(function() {
      // Show Navigation to top button
      toggleBackToTopSection();

      // binding tab active
      toggleActiveSection();
    });
  }

  // Public functions
  return {
    renderContent: function() {
      const html = common.renderMustacheToHtml('#header-template', {sections, profileImage: common.profileImageURL()});
      $('#header').html(html);
    },
    bindEvents: function() {
      common.clearLocationHash();
      setHeaderHeight();

      bindHamburgerEvent();
      bindSectionChangeEvent();
      bindBackToTopEvent();
      bindScrollEvent();

      markActiveSection(activeSection);
      toggleBackToTopSection();
    },
    getStickybarHeight: function() {
      return $('.stickybar').height();
    }
  };
}();
