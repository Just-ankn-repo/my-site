import '../../css/portfolio-card.css';

export default function (project) {
  return `
   <div class="portfolio-card">
    <div class="portfolio-card__image-wrapper">
      <img class="portfolio-card__image" src="${project.image}" alt="${project.title} project preview" draggable="false">
    </div>
    <div class="portfolio-card__info-wrapper">
      <div class="portfolio-card__info-text">
        <h2 class="portfolio-card__info-title">${project.title}</h2>
        <p class="portfolio-card__info-description">${project.shortDescription}</p>
      </div>
      <div class="portfolio-card__info-links">
        <a class="portfolio-card__link portfolio-card__link--blue" href="${project.demoLink}" title="${project.title} project demo link" target="_blank">Demo</a>
        <a class="portfolio-card__link portfolio-card__link--gray" href="${project.sourceLink}" title="${project.title} project source link" target="_blank">Source</a>
      </div>
    </div>
   </div>
  `;
}
