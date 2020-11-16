/* global document */

import '../../css/projects-gallery.css';
import projectCard from './project-card';

export default function (container, data) {
  const galleryContainer = document.querySelector(container);
  const projectGalleryElem = document.createElement('section');

  const tagsList = data.reduce((acc, project) => {
    if (!acc.includes(project.tag)) {
      acc.push(project.tag);
    }
    return acc;
  }, []);

  const projectsCardsList = data.map((project) => `
    <li class="projects-gallery__card" tag="${project.tag}">${projectCard(project)}</li>
  `);

  const filtersList = tagsList.map((tag) => `
    <li class="projects-gallery__filter-item" tag="${tag}">${tag}</li>
  `);

  projectGalleryElem.classList.add('projects-gallery');
  projectGalleryElem.id = 'projects';
  projectGalleryElem.innerHTML = `
    <div class="projects-gallery__container">
      <ul class="projects-gallery__filter-list">
        <li class="projects-gallery__filter-item filter-item--active" tag="all">All</li>
        ${filtersList.join('')}
      </ul>
      <ul class="projects-gallery__list">${projectsCardsList.join('')}</ul>
    </div>
  `;

  galleryContainer.append(projectGalleryElem);

  const filterProjects = (event) => {
    if (!event.target.classList || !event.target.classList.contains('projects-gallery__filter-item')) return;

    document.querySelectorAll('.projects-gallery__filter-item').forEach((elem) => elem.classList.remove('filter-item--active'));
    event.target.classList.add('filter-item--active');

    document.querySelectorAll('.projects-gallery__card').forEach((elem) => {
      if (elem.attributes.tag.value !== event.target.attributes.tag.value && event.target.attributes.tag.value !== 'all') {
        elem.classList.add('hidden');
      } else {
        elem.classList.remove('hidden');
      }
    });
  };

  document.querySelector('.projects-gallery__filter-list').addEventListener('click', filterProjects);
}
