$(function(){
    var delay = 3000;
    var curIndex = 0;
    var amt;

    initSlider();
    autoPlay();

    function initSlider(){
        amt = $('.about-author').length;
        var sizeContainer = 100 * amt; 
        var sizeBoxSingle = 100 / amt;
        
        $('.about-author').css('width',sizeBoxSingle+'%');
        $('.scroll-wraper').css('width',sizeContainer+'%');

        for(i = 0; i < amt; i++){
            if(i == 0){
                $('.slider-balls').append('<span style="background-color: black;"></span>');
            }else{
                $('.slider-balls').append('<span></span>');
            }
        }
    }

    function autoPlay(){
        setInterval(function(){
            curIndex++;
            if(curIndex == amt){
                curIndex = 0;
            }
            goToSlider(curIndex);
        },delay);
    }

    function goToSlider(curIndex){
        var offSetx = $('.about-author').eq(curIndex).offset().left - $('.scroll-wraper').offset().left;

        $('.slider-balls span').css('background-color','rgb(112, 112, 112)');
        $('.slider-balls span').eq(curIndex).css('background-color','black');
        $('.scrollequipe').animate({'scrollLeft':offSetx});

    }

    $(window).resize(function(){
        $('.scrollequipe').stop().animate({'scrollLeft':0});
    })
})


