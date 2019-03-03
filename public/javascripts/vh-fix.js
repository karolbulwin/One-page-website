(function preventResizeOnAndroid() {
  /*window.onresize = () => {
    const fullScreenBg = document.querySelectorAll('.fill-screen');
    if (fullScreenBg[0].clientHeight !== window.innerHeight) {
      for (let i = 0; i < fullScreenBg.length; i += 1) {
        fullScreenBg[i].style.height = `${window.innerHeight}${'px'}`;
      }
    }
  };
*/
  const windowHeight = window.innerHeight;
  window.onresize = () => {
    const fullScreenBg = document.querySelectorAll('.fill-screen');
    if (fullScreenBg[0].clientHeight !== windowHeight) {
      for (let i = 0; i < fullScreenBg.length; i += 1) {
        fullScreenBg[i].style.height = `${windowHeight}${'px'}`;
      }
    }
  };
}());
