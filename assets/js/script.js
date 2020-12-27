$(document).ready(function () {
  $.getJSON('/assets/json/site.json', function (datas) {
    let site = '';
    for (const data of datas) {
      site +=
        `<a id="site" class="card" href="${data.link}" target="_blank" ` +
        `aria-label="${data.name}"><img src="${data.image}" alt="${data.name}" ` +
        `title="${data.name}"><p class="link">${data.link}</p>` +
        `<i class="material-icons launch">launch</i></a>`;
    }
    $('#container').append(site);
  });
  $('#year').text(new Date().getFullYear());
});
$(document).on('scroll', function () {
  if ($(document).scrollTop() !== 0) {
    $('nav').removeClass('fullscreen');
  } else {
    $('nav').addClass('fullscreen');
  }
});
