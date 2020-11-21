/* global document window */

import '../css/index.css';
import githubApi from './services/github-api';
import components from './components/index';

const projectsGalleryInit = async () => {
  const projects = await githubApi();
  const isGallery = components.projectsGallery('.projects-gallery', projects);

  const loaderContaier = document.querySelector('.project-gallery__loader');
  const loaderTitle = document.querySelector('.project-gallery__loader-title');

  if (isGallery) loaderContaier.style.display = 'none';
  if (!isGallery) {
    loaderTitle.innerHTML = "Can't fetch projects. Try to reload page";
    window.localStorage.removeItem('projects');
  }
};

components.background('body');
projectsGalleryInit();
