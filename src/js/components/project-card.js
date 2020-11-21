import '../../css/project-card.css';

export default function (project) {
  return `
   <div class="project-card">
    <div class="project-card__image-wrapper">
      <img class="project-card__image" src="${project.image}" alt="${project.title} project preview" draggable="false">
    </div>
    <div class="project-card__info-wrapper">
      <div class="project-card__info-text">
        <h3 class="project-card__info-title">${project.title}</h3>
        <p class="project-card__info-description">${project.shortDescription}</p>
      </div>
      <div class="project-card__info-links">
        <a class="project-card__link project-card__link--blue" href="${project.demoLink}" title="${project.title} project demo link" target="_blank">Demo</a>
        <a class="project-card__link project-card__link--gray" href="${project.sourceLink}" title="${project.title} project source link" target="_blank">Source</a>
      </div>
    </div>
   </div>
  `;
}
