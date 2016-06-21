import musicmap from './lib/musicmap';
import analytics from './lib/analytics';
import env from './.env.js';

const ga = analytics(env.G_ANALYTICS_CODE);
let lastTitle = '';
setInterval(() => {
  const titleElem = document.querySelector('#eow-title');
  if (!titleElem) return;

  if (lastTitle !== titleElem.textContent) {
    musicmap().load(ga);
    lastTitle = titleElem.textContent;
  }
}, 100);
