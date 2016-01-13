
$(document).ready(function(){

    /*select*/
    $("#select-town").selectmenu();


    /*menu*/
    $('.header__menu_but').click(function(){
        $('.overlay').addClass('active');
        $('.overlay').css({'height':$(document).height()});
        $('.menuoverlay').addClass('active');

    });
    $('.overlay, .menuoverlay__close').click(function(){
        $('.overlay').removeClass('active');
        $('.menuoverlay').removeClass('active');
        $('.header__menu_but').removeClass('active');
    });


});

$(window).load(function(){

    /*index carousel*/
    $('#indexWin8Car').lemmonSlider({
        infinite: true
    });

    /*index slider*/
    $("#owl-car").owlCarousel({
        items:1,
        autoPlay:true,
        navigation : true,
        navigationText : ["",""],
        afterAction : afterAction

    });
    $('.owl-buttons').append('<div class="islidercount"><div class="islidercount__big">1</div><div class="islidercount__small">/<span>'+$('#owl-car .index_owl_one').length+'</span></div></div>');

    function afterAction(){
        $('.islidercount__big').text(this.owl.currentItem+1);
    }
});


