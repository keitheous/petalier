$( document ).ready(function() {

  $(window).resize(function() {
    if ($(window).width() > 860) {
      $('.nav-items').show()
    }
  });

  var expendNavBar = function(){
    $('#nav-icon').removeClass('fa-bars').addClass('fa-times');
    $('.nav-items').show()
  }

  var collapseNavBar = function(){
    $('#nav-icon').addClass('fa-bars').removeClass('fa-times');
    $('.nav-items').hide();
  }

  $('#nav-icon').on('click', function(){
      $(this).hasClass("fa-bars") ? expendNavBar() : collapseNavBar()
  })

  $(".nav-items, .nav-brand > a").on('click', function(){
    if ($(window).width() <= 860) {
      collapseNavBar();
    }
  });

});
