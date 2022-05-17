window.skills = function() {
  const common = window.common;

  const information = {
    languages: [
      { title: 'HTML5', url: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png' },
      { title: 'CSS', url: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png' },
      { title: 'Sass', url: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/sass/sass.png' },
      { title: 'Bootstrap', url: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/bootstrap/bootstrap.png' },
      { title: 'JavaScript', url: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png' },
      { title: 'jQuery', url: 'https://avatars.githubusercontent.com/u/70142?s=200&v=4' },
      { title: 'Mustache', url: 'https://avatars.githubusercontent.com/u/197655?s=200&v=4' },
      { title: 'Angular', url: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/angular/angular.png' },
      { title: 'Ruby on Rails', url: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/rails/rails.png' },
      { title: 'Node.js', url: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png' },
      { title: 'Firebase', url: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/firebase/firebase.png' },
      { title: 'GraphQL', url: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/graphql/graphql.png' },
      { title: 'Gulp', url: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/gulp/gulp.png' },
      { title: 'Postgres', url: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/postgresql/postgresql.png' },
      { title: 'SQL', url: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/sql/sql.png' },
      { title: 'Git', url: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png' },
      { title: 'GitHub', url: 'https://raw.githubusercontent.com/github/explore/78df643247d429f6cc873026c0622819ad797942/topics/github/github.png' },
      { title: 'Solidity', url: 'https://soliditylang.org/images/logo.svg' },
      { title: 'Hedera', url: 'https://avatars.githubusercontent.com/u/31002956?s=200&v=4' },
    ]
  }
  // Public functions
  return {
    renderContent: function() {
      const html = common.renderMustacheToHtml('#skills-template', information);
      $('#skills').html(html);
    },
    bindEvents: function() {}
  };
}();