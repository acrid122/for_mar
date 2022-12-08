window.onload = () => {
    document.body.style.overflow = "hidden";
    //Выделение текущей страницы
    const path = window.location.pathname;
    const page_name = path.split("/").pop();
    var all_buttons_name = document.querySelectorAll(".menu_button");
    all_buttons_name.forEach(element => {
        if (element.href.slice(element.href.lastIndexOf('/') + 1) == page_name){
            element.style.background = "#5bf403";
        }
    });
    //Нажатие на стрелку
    var amount_click_arrow_1 = 0;
    var amount_click_arrow_2 = 0;
    var start_pos = $(window).scrollTop();
    //Удаление видео и nav
    var gif_elem = document.querySelector(".what_is_ide img");
    var big_nav = document.querySelector(".nav_1");
    //Передвижение стрелки 1
    $('.arrow_1_cont').click(() => {
        if(amount_click_arrow_1 % 2 == 0){
            $('html, body').animate({
                    scrollTop: $('.arrow_1_cont').offset().top
            }, 2000);
            $('.what_means_ide').css('opacity', "1");
            $('.arrow_1').css('transform', 'rotate(225deg)');
            $('.arrow_1').css('margin-top', '20%');
            gif_elem.style.opacity = "0";
            big_nav.style.opacity = "0";
            big_nav.style.transition = "none";
            ++amount_click_arrow_1;
            start_pos_2 = $(window).scrollTop();
        }
        else{
            $('html, body').animate({
                    scrollTop: start_pos
            }, 2000);
            $('.arrow_1').css('transform', 'rotate(45deg)');
            $('.what_means_ide').css('opacity', "0");
            $('.arrow_1').css('margin-top', '15%');
            gif_elem.style.opacity = "1";
            big_nav.style.opacity = "1";
            big_nav.style.transition = "opacity 500ms 2s linear";
            ++amount_click_arrow_1;
        }
    });
    //Передвижение стрелки 2
    $('.arrow_2_cont').click(() => {
        if(amount_click_arrow_2 % 2 == 0){
            $('html, body').animate({
                    scrollTop: $('.arrow_2_cont').offset().top
            }, 2000);
            $('.arrow_2').css('transform', 'rotate(225deg)');
            ++amount_click_arrow_2;
        }
        else{
            $('html, body').animate({
                scrollTop: $('.arrow_1_cont').offset().top
            }, 2000);
            $('.arrow_2').css('transform', 'rotate(45deg)');
            ++amount_click_arrow_2;
        }
    });
}
