(function resizeOnAndroid() {
  window.onresize = () => {
    const fullScreenBg = document.querySelectorAll('.fill-screen');
    if (fullScreenBg[0].clientHeight !== window.innerHeight) {
      for (let i = 0; i < fullScreenBg.length; i += 1) {
        fullScreenBg[i].style.height = `${window.innerHeight}${'px'}`;
      }
    }
  };
}());
