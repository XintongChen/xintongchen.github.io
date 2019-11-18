function goTo(el) {
    var ID = "#" + el;
    $(".mobile-nav").fadeOut('400');
    $('body, html').animate({ scrollTop: $(ID).offset().top }, '700');
}


$('[data-toggle="tooltip"]').tooltip()



$(window).load(function() {
    $(".loading").fadeOut(500);
});

// $('.intro .keywords').transition({ y: '10px', opacity: 1, delay: 100 }, 900);

// $('.intro .introduction').transition({ y: '-10px', opacity: 1, delay: 100 }, 700);
$(".menu-trigger").click(function(event) {
    $(".mobile-nav").slideDown('400');
});

$(".menu-closer").click(function(event) {
    $(".mobile-nav").fadeOut('400');   
});

$(".navbar-nav li a").click(function(event) {
    $(".navbar-collapse").collapse('hide');
});

$(".homeKey").click(function() {
    window.location.href = "index.html";
});

$(".topKey").click(function() {
    $('body, html').animate({ scrollTop: 0 }, '700');
});

$(window).scroll(function() {
    if ($(window).scrollTop() > 800) {
        $(".topKey").fadeIn();
    } else {
        $(".topKey").fadeOut();
    }
});


$(".panel-title a").click(function(event) {
    if($(this).hasClass("collapsed")){
        $(this).addClass("open");
    } else {
        $(this).removeClass("open");
    }
});

$('#accordion').on('shown.bs.collapse', function () {
  var panel = $(this).find('.in');
  $('html, body').animate({
        scrollTop: panel.offset().top - 80
  }, 500);
});

$('.carousel').carousel();

$("[data-fancybox]").fancybox();
