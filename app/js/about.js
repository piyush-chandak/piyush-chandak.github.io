window.about = function() {
  const common = window.common;

  const FIRST_JOB = '06-04-2018';

  function getExperienceYear() {
    const currentDate = new Date();
    const joiningDate = new Date(FIRST_JOB);
    const differenceInTime = Math.abs(currentDate - joiningDate);
    const differenceInDays = Math.ceil(differenceInTime / (1000 * 60 * 60 * 24));
    const differenceInYears = Number((differenceInDays / 365).toFixed(1));
    return differenceInYears || 1;
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