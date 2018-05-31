$( document ).ready(function() {

  $(window).resize(function() {
    if ($(window).width() > 860) {
      $('.nav-items').show()
    }

    if (($(window).width() <= 860) && ($('#nav-icon').hasClass("fa-bars") )) {
      $('.nav-items').hide()
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

  var fullShadeOfNav = function(){
    console.log('full shade')
    $('.nav-items, .nav-brand').css("background-color", "white");
  }

  var OpacitizeNav = function(){
    console.log('opacity shade')
    // need to figure this out
    $('.nav-items, .nav-brand, .nav-bar').css("background", "transparent !important");
  }

  $('#nav-icon').on('click', function(){
      $(this).hasClass("fa-bars") ? expendNavBar() : collapseNavBar()

      $(this).hasClass("fa-bars") ? fullShadeOfNav() : OpacitizeNav()
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
          window.open(actionType + ":" + contact)
        });
      }
    }
  }

  applyRedirectionForQuerySelectors(facebookButtons, 'https://www.facebook.com/the.petalier', 'redirection');
  applyRedirectionForQuerySelectors(instagramButtons, 'https://www.instagram.com/the.petalier', 'redirection');
  applyRedirectionForQuerySelectors(mailButton, 'thepetalier@gmail.com', 'mailto');
  applyRedirectionForQuerySelectors(phoneButton, '+61420325425', 'tel');
});
