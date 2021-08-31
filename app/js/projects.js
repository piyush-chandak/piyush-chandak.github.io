window.projects = function() {
  const common = window.common;
  const information = {
    workItems: [
      {
        name: 'Aviation Industry System',
        technologies: ['Angular', 'NodeJS', 'GraphQL'],
        role: 'Full Stack',
        detail: `It's a web based application which help the operator to give private plane and jets on rent.`,
        works: [
          'Payment System to transfer money from buyer bank to seller bank',
          'Invoice generation system which takes the price from customer and design calculated disbursal for each flight'
        ]
      },
      {
        name: 'Marketplace for camps and classes',
        technologies: ['Ruby on Rails', 'Bootstrap', 'Vanilla JS', 'Mustache', 'Angular'],
        role: 'Full Stack',
        detail: `A web based marketplace portal to create and book online/offline camps and classes for children.`,
        works: [
          'Search page to get the list of ongoing camp and classes from algolia',
          'Camp and classes pages to show detail with location, photos and reviews',
          'Cart page design to take confirmation and payment from user',
          'Admin and Provider side to create list of camp and classes',
          'Developed widgets to integrate on third party website',
          'Banking api\'s to take user payment and confirming them'
        ]
      },
      {
        name: 'Comic Publishing Platform',
        technologies: ['Angular', 'Firebase'],
        role: 'Frontend Development',
        detail: `A startup idea to provide a platform for freelancing designer to create comics and publish`,
        works: [
          'Ui design to load comics from firebase and represent in more better form',
          'Hoisting application on firebase',
        ]
      },
      {
        name: 'Self Assistant System',
        technologies: ['Ruby on Rails', 'Mustache', 'Angular'],
        role: 'Full Stack',
        detail: `Self motivated idea to create an assistant which can help in daily schedule`,
        works: [
          'Money Tracking System to track daily expenses and visualise show the flow of money',
          'Note Management where short notes can be stored',
          'Password Management to store encrypted credentials and help in remembering and authentication',
          'Light and dark mode theme according to device'
        ]
      },
      {
        name: 'Gym Invoice System',
        technologies: ['Ruby on Rails', 'Angular'],
        role: 'Full Stack',
        detail: 'An application which can generate monthly payement invoice for members'
      },
      {
        name: 'Society Management System',
        technologies: ['Ruby on Rails', 'Bootstrap', 'Vanilla JS', 'Mustache', 'AngularJS'],
        role: 'Full Stack',
        detail: `A mumbai based society portal to manage people, invoices and events for society.`,
        works: [
          'Storing information for society, members and servents',
          'Demand draft generation for monthly and expenses',
          'Accounting pannel to manage the flow of revenue collection',
          'Event management to notify members for upcomming event and meeting'
        ]
      },
      {
        name: 'Telegram Bot',
        technologies: ['NodeJS'],
        role: 'Backend Development',
        detail: `A telegram based bot which can help in getting random inspiration quotes from third party on request.`
      }
    ]
  };

  // Public functions
  return {
    renderContent: function() {
      const html = common.renderMustacheToHtml('#projects-template', information);
      $('#projects').html(html);
    },
    bindEvents: function() {}
  };
}();