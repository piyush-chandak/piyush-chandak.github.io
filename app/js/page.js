window.page = function() {
  var op = {
    renderContent: function() {
      const headerTemplate = $("#header").html();
      return Mustache.render(headerTemplate, {});
    }
  }
  return op;
}();
