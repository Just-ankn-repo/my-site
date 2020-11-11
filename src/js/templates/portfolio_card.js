import '../../css/card.css';

export default function (project) {
  return `
   <div class="card">
    <div class="card__image-wrapper">
      <img class="card__image" src="${project.image}" alt="${project.title} project preview" draggable="false">
    </div>
    <div class="card__info-wrapper">
      <div class="card__info-text">
        <h2 class="card__info-title">${project.title}</h2>
        <p class="card__info-description">${project.shortDescription}</p>
      </div>
      <div class="card__info-links">
        <a class="card__link card__link--blue" href="${project.demoLink}" title="${project.title} project demo link" target="_blank">Demo</a>
        <a class="card__link card__link--gray" href="${project.sourceLink}" title="${project.title} project source link" target="_blank">Source</a>
      </div>
    </div>
   </div>
  `;
}
