import '../../css/portfolio.css';
import portfolioCardTpl from './portfolio_card';

export default function (data) {
  return `
    <section class="portfolio" id="portfolio">
      <h2>Portfolio</h2>
      <div class="portfolio__content">
        <ul class="portfolio__list">
          ${data.map((element, index) => `<li class="portfolio-card__wrapper" index="${index}">${portfolioCardTpl(element)}</li>`).join('')}
        </ul>
      </div>
    </section>
  `;
}
