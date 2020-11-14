import '../../css/skills.css';

export default function (data) {
  return `
    <section class="skills">
      <div class="skills__first-container">
        <div class="skills__card">
          <h3 class="skills__card-title">Languages</h3>
          <ul class="skills__list">
            ${data.langs.map((element) => `
              <li>${element}</li>
            `).join('')}
          </ul>
        </div>
        <div class="skills__card">
          <h3 class="skills__card-title">Frameworks / Libs</h3>
          <ul class="skills__list">
            ${data.libs.map((element) => `
            <li>${element}</li>
            `).join('')}
          </ul>
        </div>
        <div class="skills__card">
          <h3 class="skills__card-title">Other</h3>
          <ul class="skills__list">
            ${data.other.map((element) => `
            <li>${element}</li>
            `).join('')}
          </ul>
        </div>
      </div>
      <div class="skills__second-container">
        <ul class="skills__extended-list">
          ${data.more.map((element) => `
          <li>${element}</li>
          `).join('')}
        </ul>
      </div>
    </section>
  `;
}
