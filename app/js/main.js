$(function () {

  const headerBurger = document.querySelector('.header__burger'),
    headerNav = document.querySelector('.header__nav'),
    headerLinks = document.querySelectorAll('.header__link');

  headerBurger.addEventListener('click', headerToggleActive);

  for (const headerLink of headerLinks) {
    headerLink.addEventListener('click', () => {
      if (headerNav.classList.contains('header__nav--active')) {
        headerToggleActive()
      }
    })
  }

  window.addEventListener('resize', (e) => {
    if (headerNav.classList.contains('header__nav--active') && e.target.innerWidth > 1100) {
      headerToggleActive()
    }
  }, false);

  function headerToggleActive() {
    if (headerNav.classList.contains('header__nav--active')) {
      headerNav.classList.remove('header__nav--active')
      document.body.style.overflow = ''
    } else {
      headerNav.classList.add('header__nav--active')
      document.body.style.overflow = 'hidden'
    }
  }
});