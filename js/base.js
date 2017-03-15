$(document).ready(function(){
  var scrolledNum = 0;
  var navIsVisible = true;
  var navBar = $("#nav-bar");
  var navSpan = $("#nav-span");
  var navSpanHitBox = $("#nav-span-hitbox");
  var toggleNavButton = false;
  
  var mouseY = 101;
  var scrollToggleThreshold = 50;

  var mediaThreshold = 767;

  doTheThing();
  function doTheThing() {
    if ( window.matchMedia("(min-width: " + String(mediaThreshold) + "px)").matches ) {
      $("#nav-span").removeClass("remove-interaction");
      $("#nav-span").addClass("add-interaction");
    
      $("#nav-container").removeClass("remove-interaction");
      $("#nav-container").addClass("add-interaction");
      $("#nav-bar").removeClass("default-nav-bar-state");

      $("#social-media-container").removeClass("remove-interaction");
      $("#social-media-container").addClass("add-interaction");
      $("#social-media-container").removeClass("invisible");
      $("#social-media-container").removeClass("shift-media-container-right");

      $(".img-social-media-icon-link").addClass("default-social-media-icon-state");
    } else if (toggleNavButton) {
      toggleNavButtonOn();
    } else if (!toggleNavButton) {
      toggleNavButtonOff();
    }
  }
  
  $(window).on('load, resize', function () {
    doTheThing();
  });

  window.onscroll = function(event) {
    if (document.documentElement.clientWidth > mediaThreshold) {
      if (scrolledNum == 0 && document.body.scrollTop > scrollToggleThreshold) {
        
        navBar.addClass("duration-300");
        navSpan.addClass("duration-300");
      
      } else if (scrolledNum == 1) {
        
        navBar.removeClass("duration-0");
        navBar.addClass("duration-300");
        navBar.removeClass("invisible");
        
        navSpan.removeClass("duration-0");
        navSpan.addClass("duration-300");
        navSpan.removeClass("invisible");
      }
      
      scrolledNum ++;

      if(document.body.scrollTop <= scrollToggleThreshold && !navIsVisible) {
        toggleVisible();
      } else if (navIsVisible && mouseY > 100 && document.body.scrollTop > scrollToggleThreshold){
        toggleInvisible();
      }
    }
  };

  document.onmousemove = function(event) {
    mouseY = event.clientY;
    if (document.documentElement.clientWidth > mediaThreshold) {
      if (mouseY > 100 && navIsVisible && document.body.scrollTop > scrollToggleThreshold) {
        toggleInvisible();
      } else if (mouseY < 40 && !navIsVisible) {
        toggleVisible();
      }
    }
  }

  function toggleVisible() {
    navBar.removeClass("move-nav-up");
    navBar.removeClass("invisible");

    navSpan.removeClass("move-span-up");
    //navSpan.removeClass("nav-bottom-visible");
    //navSpan.addClass("nav-bottom-invisible");

    $("#nav-span").removeClass("remove-interaction");
    $("#nav-span").addClass("add-interaction");
  
    $("#nav-container").removeClass("remove-interaction");
    $("#nav-container").addClass("add-interaction");
  
    $("#social-media-container").removeClass("remove-interaction");
    $("#social-media-container").addClass("add-interaction");
    $("#social-media-container").removeClass("invisible");
    $("#social-media-container").removeClass("shift-media-container-right");
    
    navIsVisible = true;
  }

  function toggleInvisible() {
    navBar.addClass("move-nav-up");
    navBar.addClass("invisible");

    navSpan.addClass("move-span-up");
    //navSpan.removeClass("nav-bottom-invisible");
    //navSpan.addClass("nav-bottom-visible");

    $("#nav-span").addClass("remove-interaction");
    $("#nav-span").removeClass("add-interaction");
  
    $("#nav-container").addClass("remove-interaction");
    $("#nav-container").removeClass("add-interaction");
    
    $("#social-media-container").removeClass("add-interaction");
    $("#social-media-container").addClass("remove-interaction");
    $("#social-media-container").addClass("invisible");
    $("#social-media-container").addClass("shift-media-container-right");
    
    navIsVisible = false;
  }

  // Nav Button Logic
  $("#nav-button-container").hover(function() {
    if (toggleNavButton) {
      $("#line2").removeClass("toggle-line-2");
      $("#line3").removeClass("toggle-line-3");
    
      $("#line2").addClass("hover-line-2");
      $("#line3").addClass("hover-line-3");
    } else {
      $("#line1").addClass("hover-line-1");
      $("#line4").addClass("hover-line-4");
    }
  }, function() {
    if (toggleNavButton) {
      $("#line2").removeClass("hover-line-2");
      $("#line3").removeClass("hover-line-3");
      
      $("#line2").addClass("toggle-line-2");
      $("#line3").addClass("toggle-line-3");
    } else {
      $("#line1").removeClass("hover-line-1");
      $("#line4").removeClass("hover-line-4");
    }
  });

  $("#nav-button-container").click(function () {
    if (toggleNavButton) { // Nav Button is pressed out
      toggleNavButtonOff();
    } else { // Nav Button is pressed in
      toggleNavButtonOn();
    }
  });

  // Social Media Icon Logic
  $(".img-social-media-icon-link").hover(function() {
    $(this).find(".img-social-media-stroke-in").removeClass("animate-stroke-in-phase-out");
    $(this).find(".img-social-media-stroke-out").removeClass("animate-stroke-out-phase-out");
  
    $(this).find(".img-social-media-stroke-in").addClass("animate-stroke-in-phase-in");
    $(this).find(".img-social-media-stroke-out").addClass("animate-stroke-out-phase-in");
  }, function() {
    $(this).find(".img-social-media-stroke-in").removeClass("animate-stroke-in-phase-in");
    $(this).find(".img-social-media-stroke-out").removeClass("animate-stroke-out-phase-in");
  
    $(this).find(".img-social-media-stroke-in").addClass("animate-stroke-in-phase-out");
    $(this).find(".img-social-media-stroke-out").addClass("animate-stroke-out-phase-out");
  });

  function toggleNavButtonOn() {
    toggleNavButton = true;
    $("#line1").addClass("toggle-line-1");
    $("#line2").addClass("toggle-line-2");
    $("#line3").addClass("toggle-line-3");
    $("#line4").addClass("toggle-line-4");
    
    $("#nav-bar").removeClass("default-nav-bar-state");
    $("#nav-bar").removeClass("invisible");
    
    $("#nav-button").addClass("shift-nav-button");
    
    $("#nav-span").removeClass("remove-interaction");
    $("#nav-span").addClass("add-interaction");
  
    $("#nav-container").removeClass("remove-interaction");
    $("#nav-container").addClass("add-interaction");

    $("#social-media-container").removeClass("remove-interaction");
    $("#social-media-container").addClass("add-interaction");
    $("#social-media-container").removeClass("invisible");
    $("#social-media-container").removeClass("shift-media-container-right");
  }

  function toggleNavButtonOff() {
    toggleNavButton = false;
    $("#line1").removeClass("toggle-line-1");
    
    $("#line2").removeClass("toggle-line-2");
    $("#line2").removeClass("hover-line-2");
    
    $("#line3").removeClass("toggle-line-3");
    $("#line3").removeClass("hover-line-3");
    
    $("#line4").removeClass("toggle-line-4");
    
    $("#nav-bar").addClass("default-nav-bar-state");
    
    $("#nav-button").removeClass("shift-nav-button");
  
    $("#nav-span").addClass("remove-interaction");
    $("#nav-span").removeClass("add-interaction");
  
    $("#nav-container").addClass("remove-interaction");
    $("#nav-container").removeClass("add-interaction");

    $("#social-media-container").removeClass("add-interaction");
    $("#social-media-container").addClass("remove-interaction");
    $("#social-media-container").addClass("invisible");
    $("#social-media-container").addClass("shift-media-container-right");
  }

  $(".img-zoom").click(function() {
    $(this).toggleClass("img-zoomed");
  });

});

