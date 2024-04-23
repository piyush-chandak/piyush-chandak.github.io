window.contact = function() {
  const common = window.common;

  const information = {
    socialLinks: [
      { url: 'mailto:chandakpiyush4@gmail.com', label: 'Email', icon: 'ri-mail-line'},
      { url: 'https://www.linkedin.com/in/piyush-chandak-91a317106', label: 'Linkedin', icon: 'ri-linkedin-fill'},
      { url: 'https://github.com/piyush-chandak', label: 'Github', icon: 'ri-github-fill'},
      // { url: 'https://medium.com/@chandakpiyush4', label: 'Medium', icon: 'ri-medium-line'},
    ]
  }

  // Public functions
  return {
    renderContent: function() {
      const html = common.renderMustacheToHtml('#contact-template', information);
      $('#contact').html(html);
    },
    bindEvents: function() {}
  };
}();
