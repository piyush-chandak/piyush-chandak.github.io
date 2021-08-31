window.about = function() {
  const common = window.common;

  const FIRST_JOB = '04-06-2018';

  function getExperienceYear() {
    const currentDate = new Date();
    const joiningDate = new Date(FIRST_JOB);
    return (currentDate.getFullYear() - joiningDate.getFullYear()) || 1;
  }

  const information = {
    yearsMsg: `${getExperienceYear()}+ years`,
    profileImage: common.profileImageURL(),
    name: 'Piyush Chandak',
    tags: ['Student |', 'Developer |', 'Inquisitive']
  }

  return {
    renderContent: function() {
      const html = common.renderMustacheToHtml('#about-template', information);
      $('#about').html(html);
    },
    bindEvents: function() {}
  };
}();