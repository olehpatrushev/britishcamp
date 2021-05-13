import $ from "jquery";
import "bootstrap";

const mainMenuEl = document.getElementById('mainMenu')

mainMenuEl.addEventListener('shown.bs.collapse', function (event) {
  $('body').addClass('menu-opened');
});

mainMenuEl.addEventListener('hidden.bs.collapse', function (event) {
  $('body').removeClass('menu-opened');
});

const showSome = (index = 0) => {
  if (index >= 0 && index < 7) {
    $('body').addClass('intro');
  } else {
    $('body').removeClass('intro');
  }
  $('.screen').hide();
  $($('.screen').get(index)).show();
}

showSome(7);

$('.screen').on('dblclick', function () {
  const screen = $(this);
  if (screen.next().length) {
    const index = $('.content .screen').index(screen);
    showSome(index + 1)
  } else {
    showSome();
  }
});
