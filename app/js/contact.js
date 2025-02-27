window.contact = function() {
  const common = window.common;

  const information = {
    socialLinks: [
      { url: 'mailto:chandakpiyush4@gmail.com', label: 'Email', icon: 'ri-mail-line'},
      { url: 'https://www.linkedin.com/in/piyush-chandak-91a317106', label: 'Linkedin', icon: 'ri-linkedin-fill'},
      { url: 'https://github.com/piyush-chandak', label: 'Github', icon: 'ri-github-fill'},
      { url: 'https://dev.to/piyush_chandak', label: 'Dev.to', image: 'https://media2.dev.to/dynamic/image/quality=100/https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png'},
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
