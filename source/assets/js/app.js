const $arrowLine = $(".arrow--line");
const $arrowChevron = $(".arrow--chevron");
const $leftSide = $("section.left");
const $rightSide = $("section.right");
const $primaryNav = $(".primary-nav");

$(".primary-nav--left, .primary-nav--right")
  .mouseenter(function(e) {
    let paragraphWidth = $(this)
      .find("p")
      .innerWidth();
    $(this)
      .find(".arrow--line")
      .stop()
      .animate({
        width: $(this).innerWidth() - paragraphWidth - 60
      });

    console.log();

    if (e.currentTarget.className == "primary-nav--left") {
      $leftSide.addClass("hovered");
    } else if (e.currentTarget.className == "primary-nav--right") {
      $rightSide.addClass("hovered");
    }
  })
  .mouseleave(function(e) {
    $(this)
      .find(".arrow--line")
      .stop()
      .animate({
        width: "100px"
      });

    if (e.currentTarget.className == "primary-nav--left") {
      $leftSide.removeClass("hovered");
    } else if (e.currentTarget.className == "primary-nav--right") {
      $rightSide.removeClass("hovered");
    }
  })
  .click(function(e) {
    if (e.currentTarget.className == "primary-nav--left") {
      $leftSide.addClass("open");
      $(".breadcrumbs ul").append(`<li><a href="/investigate">Investigate</a></li>`);
      history.pushState(null, null, 'investigate');
      $('.fixed-logo').css('display', 'block');
      $('.fixed-logo').stop().animate({
        opacity: 1
      }, 400);
    } else if (e.currentTarget.className == "primary-nav--right") {
      $rightSide.addClass("open");
    }

    // $primaryNav.stop().animate({
    //   bottom: -80
    // }, function() {
    //   // $primaryNav.css('display', 'none');
    // })

    e.preventDefault();
  });


  $(".menu-link").click(function() {
    $('.menu').toggleClass('open');
    $(".modal-backdrop").toggleClass('open');
  });







$('.collapsible').find('header').click(function (e) {
  $(this).parent().toggleClass('expanded');
})






let counter = 0;

$('.container').on('click', 'a', function (e) {
  counter++;

  let newLayer = document.createElement("div");
  let href = $(this).attr('href');
  newLayer.classList.add('layer');
  newLayer.classList.add(`layer--${counter}`)
  newLayer.classList.add('open');
  document.querySelector('.layer-container').append(newLayer);

  $(`.layer--${counter}`).load(href + ' .container', function() {
    $(".breadcrumbs ul").append(`<li><a href="/investigate">${counter}</a></li>`);
    
    $(`.layer--${counter}`).stop().animate({
      right: counter * 60,
      left: '0',
      zIndex: counter
    });

    history.pushState(null, null, href);
  });

  e.preventDefault();
});

window.addEventListener("popstate", function (e) {
  $('.layer').last().stop().animate({
    right: '100vw',
    left: '-100vw'
  });

  counter--;
});