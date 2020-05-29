(function ($) {
  "use strict"; // Start of use strict
  $(window).resize(function () {
    if ($(window).width() <= 375) {
      $("fa-2x").addClass("fa-1x");
      $("fa-1x").removeClass("fa-2x");
    }
    if ($(window).width() > 375) {
      $("fa-1x").addClass("fa-2x");
      $("fa-2x").removeClass("fa-1x");
    }
  });

  let first_button_flag = false;
  let second_button_flag = false;
  const openAllPluses = () => {
    if (document.querySelector(".openn") !== null) {
      document.querySelector(".openn").className =
        "fas fa-plus fa-2x" + " close";
    }
    if (document.querySelector(".open1") !== null) {
      document.querySelector(".open1").className =
        "fas fa-plus fa-2x" + " clos1";
    }
  };
  const closeAllPluses = () => {
    const initialSrting = "fas fa-plus fa-2x";
    if (!first_button_flag && document.querySelector(".close")) {
      console.log("estdg");
      document.querySelector(".close").className = initialSrting + " openn";
    }
    if (!second_button_flag && document.querySelector(".clos1")) {
      console.log("estdg");
      document.querySelector(".clos1").className = initialSrting + " open1";
    }
  };
  $(function () {
    $("#sort_link").click(() => {
      const initialSrting = "fas fa-plus fa-2x";
      if (document.querySelector(".openn") !== null) {
        document.querySelector(".openn").className = initialSrting + " close";
        second_button_flag
          ? (document.querySelector("#services").style.height = "150%")
          : (document.querySelector("#services").style.height = "120%");
      } else {
        document.querySelector(".close").className = initialSrting + " openn";
        second_button_flag
          ? (document.querySelector("#services").style.height = "130%")
          : (document.querySelector("#services").style.height = "100%");
      }

      first_button_flag = !first_button_flag;
      console.log(first_button_flag);
      $("#sort_list").slideToggle("slow");
    });
    $("#sort_link_2").click(() => {
      const initialSrting = "fas fa-plus fa-2x";
      if (document.querySelector(".open1") !== null) {
        document.querySelector(".open1").className = initialSrting + " clos1";
        first_button_flag
          ? (document.querySelector("#services").style.height = "150%")
          : (document.querySelector("#services").style.height = "120%");
      } else {
        document.querySelector(".clos1").className = initialSrting + " open1";
        first_button_flag
          ? (document.querySelector("#services").style.height = "130%")
          : (document.querySelector("#services").style.height = "100%");
      }

      second_button_flag = !second_button_flag;
      $("#sort_list_2").slideToggle("slow");
    });
  });
  /////
  var n = 0;
  $(document).ready(function () {
    setInterval(() => {
      document.querySelector(".masthead").classList.toggle("change-opacity");
      n += 1;
      if (n == 4) {
        n = 0;
      }
      console.log(document.getElementsByClassName("masthead"));
      document.getElementsByClassName("masthead")[0].style.backgroundImage =
        "url(./img/img" + n + ".png)";
    }, 5000);

    //        document.getElementById('ims.').style.background = 'url(img'+n+'.png)';
    //document.getElementById('ims').style.backgroundImage = 'url(img'+n+'.png)';
    //
    //        this.style.background = 'url(https://learn.jquery.com/jquery-wp-content/themes/jquery/content/books/learning-jquery-4th-ed.jpg)';
  });

  // Closes the sidebar menu
  $(".menu-toggle").click(function (e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
    // $('.menu-toggle > .fa-bars, .menu-toggle > .fa-times').toggleClass(
    //   'fa-bars fa-times'
    // );
    // $(this).toggleClass('active');
  });
  /////////////////////////////////////////////////////////////////////////////////////////
  $(".first-button-tourist").click(function (e) {
    e.preventDefault();
    openAllPluses();
    document.querySelector(".menu-toggle").style.display = "none";
    document.querySelector(".city-block").className =
      "city-block another-active";
  });

  $(".second-button-tourist").click(function (e) {
    e.preventDefault();
    openAllPluses();
    document.querySelector(".menu-toggle").style.display = "none";
    document.querySelector(".river-block").className =
      "river-block another-active";
  });

  $(".third-button-tourist").click(function (e) {
    e.preventDefault();
    openAllPluses();
    document.querySelector(".menu-toggle").style.display = "none";
    document.querySelector(".sea-block").className = "sea-block another-active";
  });

  $(".fourth-button-tourist").click(function (e) {
    e.preventDefault();
    openAllPluses();
    document.querySelector(".menu-toggle").style.display = "none";
    document.querySelector(".mount-block").className =
      "mount-block another-active";
  });

  $(".close-first-block").click(function (e) {
    e.preventDefault();
    closeAllPluses();
    document.querySelector(".menu-toggle").style.display = "block";
    console.log("test", document.querySelector(".city-block").className);
    document.querySelector(".city-block").className = "city-block ";
  });
  $(".next-city-block-content-button").click(function (e) {
    e.preventDefault();
    if (
      +document.querySelector(".city-block-content").src.substr(-5, 1) + 1 <
      5
    ) {
      document.querySelector(
        ".city-block-content"
      ).src = `img/first-modal-content/${
        +document.querySelector(".city-block-content").src.substr(-5, 1) + 1
      }.jpg`;
    } else {
      document.querySelector(
        ".city-block-content"
      ).src = `img/first-modal-content/1.jpg`;
    }
  });

  $(".close-second-block").click(function (e) {
    e.preventDefault();
    closeAllPluses();
    document.querySelector(".menu-toggle").style.display = "block";
    console.log("test", document.querySelector(".river-block").className);
    document.querySelector(".river-block").className = "river-block ";
  });
  $(".next-river-block-content-button").click(function (e) {
    e.preventDefault();
    if (
      +document.querySelector(".river-block-content").src.substr(-5, 1) + 1 <
      4
    ) {
      document.querySelector(
        ".river-block-content"
      ).src = `img/second-modal-content/${
        +document.querySelector(".river-block-content").src.substr(-5, 1) + 1
      }.jpg`;
    } else {
      document.querySelector(
        ".river-block-content"
      ).src = `img/second-modal-content/1.jpg`;
    }
  });

  $(".close-third-block").click(function (e) {
    e.preventDefault();
    closeAllPluses();
    document.querySelector(".menu-toggle").style.display = "block";
    console.log("test", document.querySelector(".sea-block").className);
    document.querySelector(".sea-block").className = "sea-block ";
  });
  $(".next-sea-block-content-button").click(function (e) {
    e.preventDefault();
    if (
      +document.querySelector(".sea-block-content").src.substr(-5, 1) + 1 <
      3
    ) {
      document.querySelector(
        ".sea-block-content"
      ).src = `img/third-modal-content/${
        +document.querySelector(".sea-block-content").src.substr(-5, 1) + 1
      }.jpg`;
    } else {
      document.querySelector(
        ".sea-block-content"
      ).src = `img/third-modal-content/1.jpg`;
    }
  });

  $(".close-fourth-block").click(function (e) {
    e.preventDefault();
    closeAllPluses();
    document.querySelector(".menu-toggle").style.display = "block";
    console.log("test", document.querySelector(".mount-block").className);
    document.querySelector(".mount-block").className = "mount-block ";
  });
  $(".next-mount-block-content-button").click(function (e) {
    e.preventDefault();
    if (
      +document.querySelector(".mount-block-content").src.substr(-5, 1) + 1 <
      4
    ) {
      document.querySelector(
        ".mount-block-content"
      ).src = `img/fourth-modal-content/${
        +document.querySelector(".mount-block-content").src.substr(-5, 1) + 1
      }.jpg`;
    } else {
      document.querySelector(
        ".mount-block-content"
      ).src = `img/fourth-modal-content/1.jpg`;
    }
  });

  //    #############################################################

  $(".first-button-dishes").click(function (e) {
    e.preventDefault();
    openAllPluses();
    document.querySelector(".menu-toggle").style.display = "none";
    console.log("test", document.querySelector(".maqluba-block"));
    document.querySelector(".maqluba-block").className =
      "maqluba-block another-active";
  });

  $(".second-button-dishes").click(function (e) {
    e.preventDefault();
    openAllPluses();
    document.querySelector(".menu-toggle").style.display = "none";
    document.querySelector(".falafel-block").className =
      "falafel-block another-active";
  });

  $(".third-button-dishes").click(function (e) {
    e.preventDefault();
    openAllPluses();
    document.querySelector(".menu-toggle").style.display = "none";
    document.querySelector(".mezze-block").className =
      "mezze-block another-active";
  });

  $(".fourth-button-dishes").click(function (e) {
    e.preventDefault();
    openAllPluses();
    document.querySelector(".menu-toggle").style.display = "none";
    document.querySelector(".ice-block").className = "ice-block another-active";
  });

  $(".close-maqluba-block").click(function (e) {
    e.preventDefault();
    closeAllPluses();
    document.querySelector(".menu-toggle").style.display = "block";
    console.log("test", document.querySelector(".maqluba-block").className);
    document.querySelector(".maqluba-block").className = "maqluba-block ";
  });
  $(".next-maqluba-block-content-button").click(function (e) {
    e.preventDefault();
    if (
      +document.querySelector(".maqluba-block-content").src.substr(-5, 1) + 1 <
      3
    ) {
      document.querySelector(
        ".maqluba-block-content"
      ).src = `img/first-modal-content/${
        +document.querySelector(".maqluba-block-content").src.substr(-5, 1) + 1
      }.jpg`;
    } else {
      document.querySelector(".maqluba-block-content").src = `img/maqluba.jpg`;
    }
  });

  $(".close-second-block").click(function (e) {
    e.preventDefault();
    closeAllPluses();
    document.querySelector(".menu-toggle").style.display = "block";
    console.log("test", document.querySelector(".falafel-block").className);
    document.querySelector(".falafel-block").className = "falafel-block ";
  });
  $(".next-falafel-block-content-button").click(function (e) {
    e.preventDefault();
    if (
      +document.querySelector(".falafel-block-content").src.substr(-5, 1) + 1 <
      3
    ) {
      document.querySelector(
        ".falafel-block-content"
      ).src = `img/second-modal-content/${
        +document.querySelector(".falafel-block-content").src.substr(-5, 1) + 1
      }.jpg`;
    } else {
      document.querySelector(".falafel-block-content").src = `img/falafel.jpg`;
    }
  });

  $(".close-third-block").click(function (e) {
    e.preventDefault();
    closeAllPluses();
    document.querySelector(".menu-toggle").style.display = "block";
    console.log("test", document.querySelector(".mezze-block").className);
    document.querySelector(".mezze-block").className = "mezze-block ";
  });
  $(".next-mezze-block-content-button").click(function (e) {
    e.preventDefault();
    if (
      +document.querySelector(".mezze-block-content").src.substr(-5, 1) + 1 <
      3
    ) {
      document.querySelector(
        ".mezze-block-content"
      ).src = `img/third-modal-content/${
        +document.querySelector(".mezze-block-content").src.substr(-5, 1) + 1
      }.jpg`;
    } else {
      document.querySelector(".mezze-block-content").src = `img/tmezze.jpg`;
    }
  });

  $(".close-fourth-block").click(function (e) {
    e.preventDefault();
    closeAllPluses();
    document.querySelector(".menu-toggle").style.display = "block";
    console.log("test", document.querySelector(".ice-block").className);
    document.querySelector(".ice-block").className = "ice-block ";
  });
  $(".next-ice-block-content-button").click(function (e) {
    e.preventDefault();
    if (
      +document.querySelector(".ice-block-content").src.substr(-5, 1) + 1 <
      3
    ) {
      document.querySelector(
        ".ice-block-content"
      ).src = `img/fourth-modal-content/${
        +document.querySelector(".ice-block-content").src.substr(-5, 1) + 1
      }.jpg`;
    } else {
      document.querySelector(".ice-block-content").src = `img/ice.jpg`;
    }
  });

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top,
          },
          1000,
          "easeInOutExpo"
        );
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $("#sidebar-wrapper .js-scroll-trigger").click(function () {
    console.log("test");
    $("#sidebar-wrapper").removeClass("active");
    $(".menu-toggle").removeClass("active");
    $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass(
      "fa-bars fa-times"
    );
  });

  // Scroll to top button appear
  $(document).scroll(function () {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $(".scroll-to-top").fadeIn();
    } else {
      $(".scroll-to-top").fadeOut();
    }
  });
})(jQuery); // End of use strict

// Disable Google Maps scrolling
// See http://stackoverflow.com/a/25904582/1607849
// Disable scroll zooming and bind back the click event
var onMapMouseleaveHandler = function (event) {
  var that = $(this);
  that.on("click", onMapClickHandler);
  that.off("mouseleave", onMapMouseleaveHandler);
  that.find("iframe").css("pointer-events", "none");
};
var onMapClickHandler = function (event) {
  var that = $(this);
  // Disable the click handler until the user leaves the map area
  that.off("click", onMapClickHandler);
  // Enable scrolling zoom
  that.find("iframe").css("pointer-events", "auto");
  // Handle the mouse leave event
  that.on("mouseleave", onMapMouseleaveHandler);
};
// Enable map zooming with mouse scroll when the user clicks the map
$(".map").on("click", onMapClickHandler);
