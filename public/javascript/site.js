
jQuery(document).ready(function () {

    // jQuery('.bannerSliderWrap').bxSlider({
    //     auto: true,
    //     autoHover: true,
    //     infiniteLoop: false,
    //     controls: true,
    //     touchEnabled: false
    // });


    jQuery("#menuToggle").on("click", function () {
        jQuery(this).parents("#header").toggleClass("menuOpen");
        jQuery("body").toggleClass("overFlowHidden");
    });

    jQuery('.archives').click(function () {
        jQuery('.archMenu').slideToggle(400);

    });


    jQuery('.mainNavigation .menuTitle').click(function () {
        jQuery("#header").removeClass("menuOpen");
        jQuery("body").removeClass("overFlowHidden");
    });
});