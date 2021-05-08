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
  $('.screen').hide();
  $($('.screen').get(index)).show();
}

showSome(0);

$('button.btn-continue').on('click', function () {
  const screen = $(this).parents('.screen');
  screen.hide();
  if (screen.next().length) {
    screen.next().show();
  } else {
    showSome();
  }
});
