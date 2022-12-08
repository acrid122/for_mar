window.onload = () => {
    var cards = document.querySelectorAll(".button_menu");
    var button_menu = document.querySelector(".up_menu");
    var nav_menu = document.querySelector(".nav_1"); 
    var ret_but = document.querySelector('.return_but');
    /*Init slider*/
    //All_width
    var slideWidth_free = $('.slider_free .slider_line .ide_all_info').width();
    var slideWidth_half_free = $('.slider_half-free .slider_line .ide_all_info').width();
    var slideWidth_non_free = $('.slider_non-free .slider_line .ide_all_info').width();
    if(window.innerWidth <= 780){
        slideWidth_free = slideWidth_free * 2;
        slideWidth_half_free = slideWidth_half_free * 1.5;
        slideWidth_non_free = slideWidth_non_free * 1;
    }
    else if(window.innerWidth >= 780 && window.innerWidth <= 1020){
        slideWidth_free = slideWidth_free * 2.25;
        slideWidth_half_free = slideWidth_half_free * 1.75;
        slideWidth_non_free = slideWidth_non_free * 1;
    }
    else if(window.innerWidth >= 1020 && window.innerWidth <= 1200){
        slideWidth_free = slideWidth_free * 2.75;
        slideWidth_half_free = slideWidth_half_free * 2;
        slideWidth_non_free = slideWidth_non_free * 1;
    }
    else if(window.innerWidth >= 1200 && window.innerWidth <= 1500){
        slideWidth_free = slideWidth_free * 3.25;
        slideWidth_half_free = slideWidth_half_free * 2.25;
        slideWidth_non_free = slideWidth_non_free * 1.1;
    }
    else{
        slideWidth_free = slideWidth_free * 3.75;
        slideWidth_half_free = slideWidth_half_free * 2.25;
        slideWidth_non_free = slideWidth_non_free * 1.3;
    }
    //All_height
    var slideHeight_free = $('.slider_free .slider_line .ide_all_info').height();
    var slideHeight_half_free = $('.slider_half-free .slider_line .ide_all_info').height();
    var slideHeight_non_free = $('.slider_non-free .slider_line .ide_all_info').height();
    //Init var
    var init_height = cards[0].style.height;
    //Blur остальных
    function delete_left_or_set(i, k){
        for(let j = 0; j < cards.length; ++j){
            if(j != i){
                (k == "delete") ? cards[j].style.visibility = "hidden" : cards[j].style.visibility = "visible";
            }
        }
    }
    function return_but(i){
        ret_but.onclick = function(){
            switch (i){
                case 0:
                    var slider = document.querySelector(".slider_free");
                    $('.slider_non-free').css('display', 'block');
                    $('.slider_half-free').css('display', 'block');
                    break;
                case 1:
                    var slider = document.querySelector(".slider_half-free");
                    $('.slider_non-free').css('display', 'block');
                    break;
                case 2:
                    var slider = document.querySelector(".slider_non-free");
                    break;
            }
            $('.controls_but').css('display', 'none');
            slider.style.visibility = "hidden";
            cards[i].style.display = "block";
            nav_menu.style.visibility = "visible";
            delete_left_or_set(i, "");
            ret_but.style.display = "none"
        }
    }
    //Наведение
    for(let i = 0; i < cards.length; ++i){
            cards[i].onmouseenter = function(){
                nav_menu.style.visibility = "hidden";
                cards[i].style.display = "none";
                delete_left_or_set(i, "delete");
                if(cards[i].textContent.indexOf('Условно бесплатные IDE') != -1){
                    init_half_free();
                }
                if(cards[i].textContent.indexOf('Платные IDE') != -1){
                    init_slider_non_free();
                }
                if(cards[i].textContent.indexOf('Бесплатные IDE') != -1) {
                    init_free();
                }
                return_but(i);
            }
        /*
        cards[i].onmouseleave= function(){
            cards[i].style.height = init_height;
            delete_left_or_set(i, ""); 
        }*/
    }
    /*
    cards.forEach(elements => {elements.addEventListener('mouseenter', function(){
        elements.style.height = "500px";
    })})*/
    //Не наведение
    cards.forEach(elements => {elements.addEventListener('mouseleave', function(){ 
    })})
    /*Slider JQuery*/
    /*Non Free*/
    function init_slider_non_free(){
        //Из none -> block
            var slider = document.querySelector(".slider_non-free");
            slider.style.visibility = "visible";
            $('.return_but').css('display', 'block');
            $('.controls_but').css('display', 'block');
            $('#checkbox').change(function(){
                setInterval(function () {
                    moveRight();
                }, 3000);
            });
            //Инициализация слайдера
            var slideCount = $('.slider_non-free .slider_line .ide_non-free').length;
            var count = 0;
            var sliderAllWidth = slideCount * slideWidth_non_free;
            //Задание свойств слайдеру
            $('.slider_non-free').css({ width: slideWidth_non_free, height: slideHeight_non_free});
            //Список внутри слайдера должен быть длины, равной сумме всех широт блоков внутри
            $('.slider_non-free .slider_line').css({ width: sliderAllWidth});
        
            function moveLeft(count) {
                $('.slider_non-free .slider_line').animate({
                    translate: -count * slideWidth_non_free 
                }, 200)
            };
        
            function moveRight(count) {
                $('.slider_non-free .slider_line').animate({
                    translate: -count * slideWidth_non_free 
                }, 200)
            };
        
            $('a.control_prev').click(function () {
                --count;
                if(count < 0){
                    count = slideCount - 1;
                }
                moveLeft(count);
            });
        
            $('a.control_next').click(function () {
                ++count;
                if(count > slideCount - 1){
                    count = 0;
                }
                moveRight(count);
            });
    }
    /*Half free*/
    function init_half_free(){
        //Из none -> block
            var slider_non_free = document.querySelector(".slider_non-free");
            slider_non_free.style.display = "none";
            var slider = document.querySelector(".slider_half-free");
            slider.style.visibility = "visible";
            $('.return_but').css('display', 'block');
            $('.controls_but').css('display', 'block');
            $('#checkbox').change(function(){
                setInterval(function () {
                    moveRight();
                }, 3000);
            });
            //Инициализация слайдера
            var slideCount = $('.slider_half-free .slider_line .ide_all_info').length;
            var count = 0;
            var sliderAllWidth = slideCount * slideWidth_half_free;
            //Задание свойств слайдеру
            $('.slider_half-free').css({ width: slideWidth_half_free, height: slideHeight_half_free});
            //Список внутри слайдера должен быть длины, равной сумме всех широт блоков внутри
            $('.slider_half-free .slider_line').css({ width: sliderAllWidth});
        
            function moveLeft(count) {
                $('.slider_half-free .slider_line').animate({
                    translate: -count * slideWidth_half_free 
                }, 200)
            };
        
            function moveRight(count) {
                $('.slider_half-free .slider_line').animate({
                    translate: -count * slideWidth_half_free 
                }, 200)
            };
        
            $('a.control_prev').click(function () {
                --count;
                if(count < 0){
                    count = slideCount - 1;
                }
                moveLeft(count);
            });
        
            $('a.control_next').click(function () {
                ++count;
                if(count > slideCount - 1){
                    count = 0;
                }
                moveRight(count);
            });
    }
    //Free free
    function init_free(){
        //Из none -> block
            var slider_non_free = document.querySelector(".slider_non-free");
            var slider_half_free = document.querySelector(".slider_half-free");
            slider_half_free.style.display = "none";
            slider_non_free.style.display = "none";
            var slider = document.querySelector(".slider_free");
            slider.style.visibility = "visible";
            $('.return_but').css('display', 'block');
            $('.controls_but').css('display', 'block');
            $('#checkbox').change(function(){
                setInterval(function () {
                    moveRight();
                }, 3000);
            });
            //Инициализация слайдера
            var slideCount = $('.slider_free .slider_line .ide_all_info').length;
            var count = 0;
            var sliderAllWidth = slideCount * slideWidth_free;
            //Задание свойств слайдеру
            $('.slider_free').css({ width: slideWidth_free, height: slideHeight_free});
            //Список внутри слайдера должен быть длины, равной сумме всех широт блоков внутри
            $('.slider_free .slider_line').css({ width: sliderAllWidth});
        
            function moveLeft(count) {
                $('.slider_free .slider_line').animate({
                    translate: -count * slideWidth_free
                }, 200)
            };
        
            function moveRight(count) {
                $('.slider_free .slider_line').animate({
                    translate: -count * slideWidth_free
                }, 200)
            };
        
            $('a.control_prev').click(function () {
                --count;
                if(count < 0){
                    count = slideCount - 1;
                }
                moveLeft(count);
            });
        
            $('a.control_next').click(function () {
                ++count;
                if(count > slideCount - 1){
                    count = 0;
                }
                moveRight(count);
            });
    }
    var heart = document.querySelectorAll('.heart');
    for(let i = 0; i < heart.length; ++i){
        heart[i].onclick = function(){
        heart[i].classList.add('heart-target');
    }
}
}
//Удаление стрелок при нажатии на бургер
