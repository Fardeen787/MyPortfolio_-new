$(document).ready(function(){
  // Menu toggle functionality
  $('#menu').click(function(){
      $(this).toggleClass('fa-times');
      $('header').toggleClass('toggle');
      $('body').toggleClass('menu-open');
  });

  // Close menu on scroll and control scroll-to-top button
  $(window).on('scroll load',function(){
      $('#menu').removeClass('fa-times');
      $('header').removeClass('toggle');
      $('body').removeClass('menu-open');

      if($(window).scrollTop() > 0){
          $('.top').show();
      }else{
          $('.top').hide();
      }
  });

  // Smooth scrolling for navigation
  $('a[href*="#"]').on('click',function(e){
      e.preventDefault();

      $('html, body').animate({
          scrollTop : $($(this).attr('href')).offset().top,
      },
      500, 
      'linear'
      );
      
      // Close mobile menu after clicking a link
      $('#menu').removeClass('fa-times');
      $('header').removeClass('toggle');
      $('body').removeClass('menu-open');
  });
  
  // Add active class to navigation items
  $(window).on('scroll', function() {
      var scrollPosition = $(this).scrollTop();
      
      // Check each section's position
      $('section').each(function() {
          var topDistance = $(this).offset().top - 100;
          
          if (scrollPosition >= topDistance) {
              var sectionId = $(this).attr('id');
              
              // Remove active from all and add to current
              $('header .navbar ul li a').removeClass('active');
              $('header .navbar ul li a[href="#' + sectionId + '"]').addClass('active');
          }
      });
  });
  
  // Simple form validation
  $('form').on('submit', function(e) {
      e.preventDefault();
      
      // Simple validation
      var name = $('input[placeholder="name"]').val();
      var email = $('input[placeholder="email"]').val();
      var message = $('.message').val();
      
      if (!name || !email || !message) {
          alert('Please fill in all required fields (name, email, and message)');
          return;
      }
      
      // Here you would typically send data to a server
      // For now, we'll just show a success message
      alert('Thank you for your message! I will get back to you soon.');
      
      // Clear the form
      $(this).trigger('reset');
  });
});