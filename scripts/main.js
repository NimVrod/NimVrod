/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'assets/particles.json', function() {
    console.log('callback - particles.js config loaded');
});

$(document).ready(function (){
    $(document).scroll(function () {
        let scroll = $(document).scrollTop();
        $(".show").each(function () {
            if (scroll > $(this).offset().top - $(window).height()) {
                $(this).addClass("active");
            }
            else {
                $(this).removeClass("active");
            }
        });

    });
});