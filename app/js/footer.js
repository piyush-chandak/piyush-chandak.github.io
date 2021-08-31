window.footer = function() {
  const common = window.common;

  // Public functions
  return {
    renderContent: function() {
      const html = common.renderMustacheToHtml('#footer-template');
      $('#footer').html(html);
    },
    bindEvents: function() {
    }
  };
}();