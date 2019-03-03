(function preventResizeOnAndroid() {
  /* window.onresize = () => {
    const fullScreenBg = document.querySelectorAll('.fill-screen');
    if (fullScreenBg[0].clientHeight !== window.innerHeight) {
      for (let i = 0; i < fullScreenBg.length; i += 1) {
        fullScreenBg[i].style.height = `${window.innerHeight}${'px'}`;
      }
    }
  };
*/

  let bgHeight;
  let bgWidth;
  let windowH;
  let windowW;

  window.onload = () => {
    bgHeight = document.querySelectorAll('.fill-screen')[0].clientHeight;
    bgWidth = document.querySelectorAll('.fill-screen')[0].clientWidth;
    windowH = window.innerHeight;
    windowW = window.innerWidth;
  };
  /*
  window.onorientationchange = () => {
    windowH = window.innerWidth;
    console.log(windowH);
    bgHeight = windowH;
    console.log(bgHeight);
  };
*/

/*
  window.onresize = () => {
    const fullScreenBg = document.querySelectorAll('.fill-screen');
    function clearHeight() {
      for (let i = 0; i < fullScreenBg.length; i += 1) {
        fullScreenBg[i].style.height = '0px';
      }
    }
    if (window.innerHeight !== windowH && window.innerHeight !== windowW) {
      clearHeight();

      if (window.innerHeight > window.innerWidth) {
        if (bgHeight > bgWidth) {
          for (let i = 0; i < fullScreenBg.length; i += 1) {
            fullScreenBg[i].style.height = `${bgHeight}${'px'}`;
          }
        } else {
          for (let i = 0; i < fullScreenBg.length; i += 1) {
            fullScreenBg[i].style.height = `${bgWidth}${'px'}`;
          }
        }
      }
      if (window.innerHeight < window.innerWidth) {
        if (bgHeight > bgWidth) {
          for (let i = 0; i < fullScreenBg.length; i += 1) {
            fullScreenBg[i].style.height = `${bgWidth}${'px'}`;
          }
        } else {
          for (let i = 0; i < fullScreenBg.length; i += 1) {
            fullScreenBg[i].style.height = `${bgHeight}${'px'}`;//
          }
        }
      }
    }
  };*/
}());
