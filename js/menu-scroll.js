$(function(){
    $('nav a').click(function(){
        var href = $(this).attr(href);
        var offsettop = $(href).offset().top;

        $('html,body').animate({'scrollTop':offsettop});
        return false;
    })

    $('.section-text a').click(function(){
        var href = $(this).attr(href);
        var offsettop = $(href).offset().top;

        $('html,body').animate({'scrollTop':offsettop})

        return false;
    })
})