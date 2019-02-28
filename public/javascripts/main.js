(function main() {
  $('body').scrollspy({ target: '.navbar', offset: 100 });

  function smoothScrolling() {
    const elementId = this.href.split('#')[1];
    const element = document.querySelector(`${'#'}${elementId}`);
    const navHeight = 100;
    const newHeight = element.offsetTop - navHeight;
    window.scroll({ top: newHeight, behavior: 'smooth' });
  }

  const anchors = document.querySelectorAll('.navbar a, .down-button a');
  anchors.forEach((anchor) => {
    anchor.addEventListener('click', smoothScrolling);
  });

  anchors.forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
    });
  });

  function addOpacityAfterScroll() {
    if (document.documentElement.scrollTop > 16) {
      document.querySelector('nav').classList.add('nav-opacity');
      document.querySelector('nav').classList.remove('py-3');
    }
  }
  function removeOpacityAfterScroll() {
    document.querySelector('nav').classList.remove('nav-opacity');
    document.querySelector('nav').classList.add('py-3');
  }
  function changeOpacityOnNavbar() {
    if (document.documentElement.scrollTop > 16) {
      addOpacityAfterScroll();
    } else {
      removeOpacityAfterScroll();
    }
  }
  window.onscroll = () => { changeOpacityOnNavbar(); };

  document.querySelector('nav').onmouseover = () => { removeOpacityAfterScroll(); };
  document.querySelector('nav').onmouseout = () => { addOpacityAfterScroll(); };
  document.querySelector('nav').ontouchstart = () => { removeOpacityAfterScroll(); };
}());
