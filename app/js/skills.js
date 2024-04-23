window.skills = function() {
  const common = window.common;
  const languages = [];

  for (const technology of Object.values(common.TECHNOLOGIES)) {
    if (technology.isSkill) {
      languages.push({ title: technology.LABEL, url: technology.URL });
    }
  }

  const information = {
    languages
  };
  // Public functions
  return {
    renderContent: function() {
      const html = common.renderMustacheToHtml('#skills-template', information);
      $('#skills').html(html);
    },
    bindEvents: function() {}
  };
}();