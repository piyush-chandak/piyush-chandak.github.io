window.projects = function() {
  const common = window.common;
  const information = {
    workItems: [
      {
        name: 'Chatbot Analytics System',
        technologies: [common.TECHNOLOGIES.NODEJS.LABEL, common.TECHNOLOGIES.GPT.LABEL],
        role: common.ROLES.BACKEND,
        detail: `AI-driven platform designed to enhance employee engagement and communication within organizations. It helps HR teams identify potential issues, reduce turnover, and foster a positive work environment.`,
        works: [
          'Dashboard Experience for different surveys',
          'Managing access to admin on basis of surveys and chat',
        ]
      },
      {
        name: 'Blockchain System',
        technologies: [common.TECHNOLOGIES.HEDERA.LABEL,common.TECHNOLOGIES.SOLIDITY.LABEL, common.TECHNOLOGIES.NODEJS.LABEL],
        role: common.ROLES.BLOCKCHAIN,
        detail: `A new way of transforming diamonds into digital assets using blockchain, creating a marketplace for trading, storing in digital wallets, or owning physically`,
        works: [
          'Setting up Hedera blockchain network',
          'Conversion of physical asset into digital asset using NFT',
          'Creating a marketplace for trade of digital asset',
        ]
      },
      {
        name: 'Aviation Industry System',
        technologies: [common.TECHNOLOGIES.ANGULAR.LABEL, common.TECHNOLOGIES.NODEJS.LABEL, common.TECHNOLOGIES.GRAPHQL.LABEL],
        role: common.ROLES.FULL_STACK,
        detail: `An online platform offering personalized travel experiences and activities, by providing private plane and jet rentals, for travelers seeking unique adventures.`,
        works: [
          'A payment system facilitating money transfers from buyer to seller bank accounts',
          'An invoice generation system that calculates customer prices and designs disbursals for each flight'
        ]
      },
      {
        name: 'Marketplace for camps and classes',
        technologies: [
          common.TECHNOLOGIES.HTML.LABEL, common.TECHNOLOGIES.CSS.LABEL, common.TECHNOLOGIES.BOOTSTRAP.LABEL,
          common.TECHNOLOGIES.VANILLA_JS.LABEL, common.TECHNOLOGIES.MUSTACHE.LABEL,
          common.TECHNOLOGIES.ANGULAR.LABEL, common.TECHNOLOGIES.RUBY_ON_RAILS.LABEL
        ],
        role: common.ROLES.FULL_STACK,
        detail: `An online platform designed to connect parents with a wide range of kids' activities and camps, offering a comprehensive directory of classes, camps, and workshops for children of all ages.`,
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
        technologies: [common.TECHNOLOGIES.ANGULAR.LABEL, common.TECHNOLOGIES.FIREBASE.LABEL],
        role: common.ROLES.FRONTEND,
        detail: `A startup idea to create a platform for freelance designers to collaborate on comic creation and publication.`,
        works: [
          'UI design to load comics from firebase and represent in more better form',
          'Hoisting application on firebase',
        ]
      },
      {
        name: 'Self Assistant System',
        technologies: [common.TECHNOLOGIES.ANGULAR.LABEL, common.TECHNOLOGIES.NODEJS.LABEL, common.TECHNOLOGIES.FIREBASE.LABEL],
        role: common.ROLES.FULL_STACK,
        detail: `Self motivated idea to create an assistant which can help in daily schedule`,
        works: [
          'Money Tracking System to track daily expenses and visualise show the flow of money',
          'Note Management where short notes can be stored',
          'Password Management to store encrypted credentials and help in remembering and authentication',
          'Light and dark mode theme according to device'
        ]
      },
      {
        name: 'Gym Management System',
        technologies: [common.TECHNOLOGIES.ANGULAR.LABEL, common.TECHNOLOGIES.RUBY_ON_RAILS.LABEL, common.TECHNOLOGIES.FIREBASE.LABEL],
        role: common.ROLES.FULL_STACK,
        detail: 'An all-in-one application seamlessly generating monthly payment invoices, birthday reminders, monthly fee notifications, and handling enquiries with an ease.',
        works: [
          'Efficiently handle user inquiries and promptly alert admins.',
          'Simplify member management with birthday reminders and subscription tracking.',
          'Automate subscription invoicing for seamless payments.',
        ]
      },
      {
        name: 'Society Management System',
        technologies: [common.TECHNOLOGIES.ANGULAR.LABEL, common.TECHNOLOGIES.RUBY_ON_RAILS.LABEL, common.TECHNOLOGIES.FIREBASE.LABEL],
        role: common.ROLES.FULL_STACK,
        detail: `A comprehensive Mumbai-based society portal for management of residents, invoices, and events.`,
        works: [
          'An integrated platform facilitating storage of society, member, and servant data.',
          'Automates demand draft generation for monthly fees and expenses.',
          'Features an accounting panel for efficient revenue collection tracking.',
          'Offers event management capabilities, notifying members of upcoming events and meetings.'
        ]
      },
      {
        name: 'Telegram Bot',
        technologies: [common.TECHNOLOGIES.NODEJS.LABEL],
        role: common.ROLES.BACKEND,
        detail: `A Telegram bot providing random inspiration quotes sourced from third-party platforms upon request.`
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