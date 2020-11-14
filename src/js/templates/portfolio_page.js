import '../../css/portfolio.css';
import portfolioCardTpl from './portfolio_card';

export default function (data) {
  return `
    <section class="portfolio" id="projects">
      <div class="portfolio__container">
        <ul class="portfolio__filter">
          <li class="portfolio__filter-item" tag="">All</li>
          <li class="portfolio__filter-item" tag="javascript">JavaScript</li>
          <li class="portfolio__filter-item" tag="html">HTML</li>
          <li class="portfolio__filter-item" tag="css">CSS</li>
          <li class="portfolio__filter-item" tag="angular">Angular</li>
        </ul>
        <ul class="portfolio__list">
          ${data.map((element) => `
            <li class="portfolio__card" tags="${element.tags.join(',')}">
              ${portfolioCardTpl(element)}
            </li>
          `).join('')}
        </ul>
      </div>
    </section>
  `;
}
