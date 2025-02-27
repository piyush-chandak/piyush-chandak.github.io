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
      return 'https://avatars.githubusercontent.com/u/14125403';
    },
    ROLES: {
      FULL_STACK: 'Full Stack',
      BACKEND: 'Backend Developer',
      FRONTEND: 'Frontend Developer',
      BLOCKCHAIN: 'Blockchain Developer',
    },
    TECHNOLOGIES: {
      HTML: { LABEL: 'HTML5', URL: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png', isSkill: true },
      CSS: { LABEL: 'CSS', URL: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png', isSkill: true },
      SASS: { LABEL: 'Sass', URL: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/sass/sass.png', isSkill: true },
      BOOTSTRAP: { LABEL: 'Bootstrap', URL: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/bootstrap/bootstrap.png', isSkill: true },
      VANILLA_JS: { LABEL: 'Vanilla.js' },
      JAVASCRIPT: { LABEL: 'JavaScript', URL: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png', isSkill: true },
      JQUERY: { LABEL: 'jQuery', URL: 'https://avatars.githubusercontent.com/u/70142?s=200&v=4', isSkill: true },
      MUSTACHE: { LABEL: 'Mustache', URL: 'https://avatars.githubusercontent.com/u/197655?s=200&v=4', isSkill: true },
      ANGULAR: { LABEL: 'Angular', URL: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/angular/angular.png', isSkill: true },
      REACT: { LABEL: 'React', URL: 'https://avatars.githubusercontent.com/u/102812?s=200&v=4', isSkill: true },
      NODEJS: { LABEL: 'Node.js', URL: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png', isSkill: true },
      RUBY_ON_RAILS: { LABEL: 'Ruby on Rails', URL: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/rails/rails.png', isSkill: true },
      JAVA: { LABEL: 'Java', URL: 'https://w7.pngwing.com/pngs/727/307/png-transparent-java-development-kit-operating-systems-android-macos-android-text-logo-computer-program-thumbnail.png', isSkill: true },
      SPRING_BOOT: { LABEL: 'Spring Boot', URL: 'https://avatars.githubusercontent.com/u/317776?s=200&v=4', isSkill: true },
      FIREBASE: { LABEL: 'Firebase', URL: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/firebase/firebase.png', isSkill: true },
      GRAPHQL: { LABEL: 'GraphQL', URL: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/graphql/graphql.png', isSkill: true },
      GULP: { LABEL: 'Gulp', URL: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/gulp/gulp.png', isSkill: true },
      POSTGRESS: { LABEL: 'Postgress', URL: 'https://avatars.githubusercontent.com/u/177543?s=200&v=4', isSkill: true },
      MONGODB: { LABEL: 'MongoDB', URL: 'https://avatars.githubusercontent.com/u/45120?s=200&v=4', isSkill: true },
      MYSQL: { LABEL: 'MySQL', URL: 'https://avatars.githubusercontent.com/u/2452804?s=200&v=4', isSkill: true },
      GIT: { LABEL: 'Git', URL: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png', isSkill: true },
      GITHUB: { LABEL: 'GitHub', URL: 'https://raw.githubusercontent.com/github/explore/78df643247d429f6cc873026c0622819ad797942/topics/github/github.png', isSkill: true },
      SOLIDITY: { LABEL: 'Solidity', URL: 'https://docs.soliditylang.org/en/latest/_static/img/logo.svg', isSkill: true },
      HEDERA: { LABEL: 'Hedera', URL: 'https://avatars.githubusercontent.com/u/31002956?s=200&v=4', isSkill: true },
      POLYGON: { LABEL: 'Polygon', URL: 'https://avatars.githubusercontent.com/u/66309068?s=200&v=4', isSkill: true },
      GPT: { LABEL: 'GPT', URL: '', isSkill: false },
    }
  }
}();