window.about = function() {
  const common = window.common;

  const FIRST_JOB = '06-04-2018'; // MM-DD-YYYY

  function getExperienceYear() {
    const currentDate = new Date();
    const joiningDate = new Date(FIRST_JOB);
    const differenceInYears = ((currentDate.getFullYear() - joiningDate.getFullYear()) +
      ((currentDate.getMonth() - joiningDate.getMonth()) / 12)).toFixed(1);

    return differenceInYears || 1;
  }

  const information = {
    yearsMsg: `${getExperienceYear()}+ years`,
    profileImage: common.profileImageURL(),
    name: 'Piyush Chandak',
    tags: ['Enthusiast |', 'Developer |', 'Curious-minded']
  }

  return {
    renderContent: function() {
      const html = common.renderMustacheToHtml('#about-template', information);
      $('#about').html(html);
    },
    bindEvents: function() {}
  };
}();