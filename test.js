$(function(){
    //start
    
    $('.page_right .main_sub span').on('click',function(){
        $('.popup').addClass('active');
        
        
        $('.popup').on('click',function(e){
            if(!$(e.target).hasClass('active')){
            }else{
                $('.popup').removeClass('active');
            }
        });
    });
    
    $('.page_right .menu_btn').on('click',function(){
        var idx = $(this).index();
        
        if($('.menu_btn').hasClass('active')){
            $('.menu_btn').removeClass('active');
            $('header').removeClass('active');
        }else{
            $('.menu_btn').addClass('active');
            $('header').addClass('active');
        }
        
        
    });
    
    //end
});