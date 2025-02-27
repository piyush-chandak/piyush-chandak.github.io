window.experience = function() {
  const information = {
    experience: [
      {
        heading: 'Professional Experience',
        items: [
          {
            title: 'Senior Software Engineer',
            startTime: '4 November 2024',
            endTime: 'Present',
            place: 'Muoro.ai, Delhi',
            information: 'Working on technologies like Node.js, GPT, React for building AI driven chatbot.'
          },
          {
            title: 'Senior Software Engineer',
            startTime: '11 December 2023',
            endTime: '31 October 2024',
            place: 'inFeedo.ai, Gurugram',
            information: 'Working on Node.js and GPT for building employee retention chatbot and it\'s analytics dashboard in HR domain.'
          },
          {
            title: 'Senior Software Engineer',
            startTime: '1 April 2021',
            endTime: '8 December 2023',
            place: 'Newput Infotech, Indore, Madhya Pradesh',
            information: 'Working on technologies like Angular, Node.js, GraphQL, MySQL, AWS, Ethereum, Hedera, Postgress'
          },
          {
            title: 'Software Engineer',
            startTime: '4 June 2018',
            endTime: '31 March 2021',
            place: 'Newput Infotech, Indore, Madhya Pradesh',
            information: 'Working on technologies like HTML, CSS, Sass, Bootstrap, jQuery, Gulp, Mustache, jQuery, Angular, Ruby on Rails, Java, Spring boot, Node.js, Firebase, Postgres'
          },
        ]
      },
      {
        heading: 'Education',
        items: [
          {
            title: 'Bachelor of Engineering in Computer Science and Engineering',
            startTime: 'July 2014',
            endTime: 'May 2018',
            place: 'Malwa Institute Of Technology, Indore, Madhya Pradesh',
            information: 'Secured first division degree in compute science with CGPA of <strong>8.45</strong> (On the scale of 10)'
          },
          {
            title: 'Higher Secondary',
            startTime: 'March 2013',
            endTime: 'April 2014',
            place: 'Sanmati Higher Secondary School, Indore, Madhya Pradesh',
            information: 'Achieving <strong>82%</strong> in CBSE board'
          },
          {
            title: 'Matriculation',
            startTime: 'March 2011',
            endTime: 'April 2012',
            place: 'The Emerald Height International School, Indore, Madhya Pradesh',
            information: 'Achieving SGPA of <strong>8.2</strong> (On the scale of 10) in CBSE board'
          }
        ]
      }
    ]
  };

  return {
    renderContent: function() {
      const html = common.renderMustacheToHtml('#experience-template', information);
      $('#experience').html(html);
    },
    bindEvents: function() {}
  };
}();