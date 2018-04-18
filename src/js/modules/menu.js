module.exports = function() {

  //begin background on scroll menu
  $(function() {
    $(window).scroll(function() {
      var topToDocument = window.pageYOffset || document.documentElement.scrollTop;
      var menu = document.getElementById('header');
      if (topToDocument <= 200) {
        $(menu).removeClass('active');
      } else {
        $(menu).addClass('active');
      }
    });
    var topToDocument = window.pageYOffset || document.documentElement.scrollTop;
    var menu = document.getElementById('header');
    if (topToDocument <= 200) {
      $(menu).removeClass('active');
    } else {
      $(menu).addClass('active');
    }
  });
  //end background on scroll menu

  // begin mobile menu
  $('#burger input').on('click', function () {
    $('#menu__list').toggleClass('active');
  });
  // end mobile menu

  // begin aside menu
  $('.aside-open').on('click', function () {
    $('#aside').toggleClass('active');
  });
  // end aside menu

};