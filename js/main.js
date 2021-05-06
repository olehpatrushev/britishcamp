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

$('.screen').on('click', function () {
  $(this).hide();
  if ($(this).next().length) {
    $(this).next().show();
  } else {
    showSome();
  }
});
