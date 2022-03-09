document.body.classList.add("raiSkin1200");

if (document.querySelector('body') != null) {
  var raiTotalBody = document.querySelector('body').getBoundingClientRect().height;

  if (document.querySelector('.customize-me') != null) {
      var raiTotalPage = document.querySelector('.customize-me').getBoundingClientRect().height;
  }

  if (raiTotalBody<raiTotalPage) {
    document.querySelector('body').style.height = (raiTotalPage-100)+'px';
  }
}
