$(document).ready(function(){
  const pageHeader = window.pageHeader;
  pageHeader.renderContent();
  pageHeader.bindEvents();

  const about = window.about;
  about.renderContent();
  about.bindEvents();

  const skills = window.skills;
  skills.renderContent();
  skills.bindEvents();

  const experience = window.experience;
  experience.renderContent();
  experience.bindEvents();

  const projects = window.projects;
  projects.renderContent();
  projects.bindEvents();

  const contact = window.contact;
  contact.renderContent();
  contact.bindEvents();

  const footer = window.footer;
  footer.renderContent();
});