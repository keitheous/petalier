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

  // web redirection

  var facebookButtons = document.querySelectorAll('.fa-facebook-square');
  var instagramButtons = document.querySelectorAll('.fa-instagram');
  var mailButton = document.querySelectorAll('.fa-envelope');
  var phoneButton = document.querySelectorAll('.fa-phone');

  var applyRedirectionForQuerySelectors = function(querySelectors, contact, actionType){
    if (actionType === 'redirection'){
      for (var i = 0; i < querySelectors.length; i++) {
        querySelectors[i].addEventListener('click', function(event) {
          console.log('redirect')
          window.open(contact, '_blank');
        });
      }
    } else {
      for (var i = 0; i < querySelectors.length; i++) {
        querySelectors[i].addEventListener('click', function(event) {
          window.open(actionType + ":" + contact, "_blank")
        });
      }
    }
  }

  applyRedirectionForQuerySelectors(facebookButtons, 'https://www.facebook.com/the.petalier', 'redirection');
  applyRedirectionForQuerySelectors(instagramButtons, 'https://www.instagram.com/the.petalier', 'redirection');
  applyRedirectionForQuerySelectors(mailButton, 'thepetalier@gmail.com', 'mailto');
  applyRedirectionForQuerySelectors(mailButton, '+61420325425', 'tel');
});
