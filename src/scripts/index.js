import $ from 'jquery';
import Fullpage from 'fullpage.js';
import 'fullpage.js/vendors/scrolloverflow';
import 'regenerator-runtime';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

import 'fullpage.js/dist/fullpage.css';
import '../styles/index.css';

const loadData = async () => {
  const siteData = await (await fetch('/assets/json/site.json')).json();
  let siteItem = '';
  siteData.map((data) => {
    siteItem += `
      <a class="site" href="${data.link}" target="_blank" aria-label="${data.name}">
        <img class="lazyload" data-src="${data.image}" alt="${data.name}" title="${data.name}">
        <p class="link">${data.link}</p>
        <i class="material-icons launch">launch</i>
      </a>`;
  });
  $('.content-wrapper').append(siteItem);
};

const initFullscreen = () => {
  Fullpage('#fullpage', {
    licenseKey: '9cfeg6W%y2',
    scrollingSpeed: 500,
    scrollOverflow: true,
    scrollOverflowOptions: {
      scrollbars: false,
      bounce: false,
    },
  });
};

const setCopyrightDate = () => {
  $('.year').text(new Date().getFullYear());
};

$(window).on('load', async () => {
  await loadData();
  setCopyrightDate();
  initFullscreen();
});
