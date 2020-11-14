import '../css/index.css';
import templates from './templates/index';
import listeners from './listeners/index';
import constants from './constants/view_const';
import utils from './utils/index';

const generatePortfolio = () => {
  const newArray = [];
  for (let i = 0; i < 18; i += 1) {
    newArray.push({
      image: `./assets/img/project${i}.jpg`,
      title: `Test Project ${i}`,
      shortDescription: `Test project ${i} description`,
      tags: ['html', 'css', 'javascript'],
      demoLink: 'https://google.com/',
      sourceLink: 'https://github.com/',
    });
  }
  return newArray;
};

const generateSkills = {
  langs: ['HTML', 'CSS(SCSS,SASS)', 'JavaScript', 'TypeScript'],
  libs: ['Angular', 'React'],
  other: ['BEM', 'SCRUM'],
  more: [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5],
};

constants.headerElm.innerHTML = templates.headerTpl();
utils.backgroundAnimation();
constants.mainElm.innerHTML += templates.aboutPageTpl();
constants.mainElm.innerHTML += templates.skillsPageTpl(generateSkills);
constants.mainElm.innerHTML += templates.portfolioPageTpl(generatePortfolio());
