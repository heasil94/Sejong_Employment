$(function(){
    $('.top_btn').click(function(){
        $('nav').slideDown('slow')
    })
    $('.close').click(function(){
        $('nav').slideUp('slow')
    })
    $('.gnb>li').click(function(){
        if($(this).attr('class')!='on'){
            $('.sub').slideUp()
            $(this).find('.sub').slideToggle()
            $('.gnb>li').removeClass('on')
            $(this).addClass('on')
        }else{
            $(this).find('.sub').slideToggle()
            $('.gnb>li').removeClass('on')
        }
    })

    
    
    let w = $('.slide>li').width()
    $(window).resize(function(){
        w = $('.slide>li').width()
    })
    let intv = setInterval(function(){
        nextAni()
    },3000)
    function nextAni(){
        $('.slide').not(':animated').animate({marginLeft : - w},700,function(){
            $('.slide>li').eq(0).appendTo('.slide')
            $('.slide').css({marginLeft:0})
            $('.dot_con > span').eq(-1).prependTo('.dot_con')
        })
    }
    function prevAni(){
        $('.slide>li').eq(-1).prependTo('.slide')
        $('.slide').css({marginLeft:-w})
        $('.slide').not(':animated').animate({marginLeft:0},700)
        $('.dot_con > span').eq(0).appendTo('.dot_con')
    }
    $('.next').click(function(){
        clearInterval(intv)
        nextAni()
        intv = setInterval(function(){
        nextAni()
    },3000)
    })
    $('.prev').click(function(){
        clearInterval(intv)
        prevAni()
        intv = setInterval(function(){
        nextAni()
    },3000)
    })
    
    let i_w = $('.i_slide>li').width() * 1.45
    $(window).resize(function(){
        i_w = $('.i_slide>li').width() * 1.45
    })
    $('.i_prev').click(function(){
        $('.i_slide>li').eq(-1).prependTo('.i_slide')
        $('.i_slide').css({marginLeft : - i_w})
        $('.i_slide').animate({marginLeft:0},700)
    })
    $('.i_next').click(function(){
        $('.i_slide').animate({marginLeft:-i_w},700,function(){
        $('.i_slide>li').eq(0).appendTo('.i_slide')
        $('.i_slide').css({marginLeft :0})
        })
    })

    $('.tab_btn>a').click(function(){
        let nth = $(this).index()
        console.log(nth)
        $('.tab_btn>a').removeClass('on')
        $(this).addClass('on')
        $('.sec3_box .chk').removeClass('on')
        $('.sec3_box .chk').eq(nth).addClass('on')
    })

    $('input[type="radio"][name="career"]').click(function(){
        if($(this).prop('checked')){
            $('input[type="radio"][name="career"]').prop('checked',false);
            $(this).prop('checked',true)
        }
    })

    $('.sec4_nb>li').click(function(){
        let s4_nth = $(this).index()
        $('.sec4_nb').find('li.on').removeClass('on')
        $(this).addClass('on')
        $('.sec4 > div').removeClass('on')
        $('.sec4 > div').eq(s4_nth).addClass('on')
    })

    $('.pop_btn').click(function(){
        $('.pop_box').addClass('on')
    })
    $('.pop_up>i').click(function(){
        $('.pop_box').removeClass('on')
    })

    let w_mini = $('.b_box > ul > li').width()
    function miniSlide(){
        $('.b_box>ul').animate({marginLeft:- w_mini},700,function(){
        $('.b_box>ul>li').eq(0).appendTo('.b_box>ul')
        $('.b_box>ul').css({marginLeft:0})
    })
    }
    setInterval(function(){
        miniSlide()
    },3000)

})