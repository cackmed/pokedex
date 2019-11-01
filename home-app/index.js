import HomeApp from './home-app.js';

const homeApp = new HomeApp();
const dom = homeApp.renderDOM();
document.body.prepend(dom);