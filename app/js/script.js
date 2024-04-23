$(document).ready(function() {
  const sections = [
    window.pageHeader, window.about, window.skills, window.experience,
    window.projects, window.contact, window.footer
  ];

  for (const section of sections) {
    section.renderContent();
    section.bindEvents();
  }
});