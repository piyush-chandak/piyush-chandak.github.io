const PORT = 3000;
const BASE_DIRECTORY = './';
const SOURCE_FOLDER_LOCATION = './app';
const DESTINATION_FOLDER_LOCATION = './public';

const UNIQUE_BUILD_ID = Math.random().toString(10).slice(2);

const PATH = {
  CSS: {
    SOURCE: `${SOURCE_FOLDER_LOCATION}/scss/**/*.scss`,
    DESTINATION: `${DESTINATION_FOLDER_LOCATION}/css/`,
    DESTINATION_FILES: `${DESTINATION_FOLDER_LOCATION}/css/**/*.css`,
    FILE_NAME: `style-${UNIQUE_BUILD_ID}.css`,
    EXTENSION: '.min.css'
  },
  JAVASCRIPT: {
    SOURCE: `${SOURCE_FOLDER_LOCATION}/js/**/*.js`,
    SOURCE_FILES: [
      `${SOURCE_FOLDER_LOCATION}/js/common.js`,
      `${SOURCE_FOLDER_LOCATION}/js/header.js`,
      `${SOURCE_FOLDER_LOCATION}/js/about.js`,
      `${SOURCE_FOLDER_LOCATION}/js/skills.js`,
      `${SOURCE_FOLDER_LOCATION}/js/projects.js`,
      `${SOURCE_FOLDER_LOCATION}/js/contact.js`,
      `${SOURCE_FOLDER_LOCATION}/js/experience.js`,
      `${SOURCE_FOLDER_LOCATION}/js/footer.js`,
      `${SOURCE_FOLDER_LOCATION}/js/script.js`
    ],
    DESTINATION: `${DESTINATION_FOLDER_LOCATION}/js/`,
    DESTINATION_FILES: `${DESTINATION_FOLDER_LOCATION}/js/**/*.js`,
    FILE_NAME: `bundle-${UNIQUE_BUILD_ID}.js`,
    EXTENSION: '.min.js'
  },
  HTML: {
    SOURCE: `${SOURCE_FOLDER_LOCATION}/**/*.html`,
    DESTINATION: `${BASE_DIRECTORY}`,
    DEFAULT_FILE: `${BASE_DIRECTORY}/index.html`,
  },
  MUSTACHE: {
    SOURCE: `${SOURCE_FOLDER_LOCATION}/templates/**/*.mustache`,
    DESTINATION: `${DESTINATION_FOLDER_LOCATION}/templates/`,
    DESTINATION_FILES: `${DESTINATION_FOLDER_LOCATION}/templates/**/*.mustache`,
  },
  IMAGE: {
    SOURCE: `${SOURCE_FOLDER_LOCATION}/images/*`,
    DESTINATION: `${DESTINATION_FOLDER_LOCATION}/images/`
  }
};

exports.PATH = PATH;
exports.PORT = PORT;
exports.BASE_DIRECTORY = BASE_DIRECTORY;
exports.DESTINATION_FOLDER_LOCATION = DESTINATION_FOLDER_LOCATION;