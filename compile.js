const window_height = window.innerHeight;
const window_width = window.innerWidth;
const rotate_elem = document.createElement('div');
const rotate_text = document.createElement('p');
const rotate_elem_text = document.createTextNode("Пожалуйста, переверните телефон");
const section_choose = document.querySelector('select');
/* Exapmle for video adding
function addVideo(){
    var attrVideo = {
        'class': 'rotate_video',
        'width': '250',
        'data-height': '100',
        'controls': ' ',
        'loop': 'loop',
        'autoplay': 'autoplay',
        'preload': 'auto',
        'data-setup': '{}'
    }
    var attrSource = {
        'type': 'video/mp4',
        'src': 'rotate_phone.mp4'
    }
    var video_element = $('<video>').attr(attrVideo);
    var source_element = $('<source>').attr(attrSource);
    video_element.append(source_element);
    return video_element;
}*/
function addGif(){
    var attrGif = {
        'src': 'rotate_phone.gif',
        'width': '250',
        'height': '150',
    }
    var gif_element = $('<img>').attr(attrGif);
    gif_element.css({
        'position': 'absolute',
        'top': '30%',
        'left': '50%',
        'transform': 'translate(-50%, -50%)'
    })
    return gif_element;
}
if(window_width < 780){
    rotate_elem.style.color = "white";
    rotate_text.style.position = "absolute";
    rotate_text.style.top = "50%";
    rotate_text.style.left = "50%";
    rotate_text.append(rotate_elem_text);
    rotate_elem.append(rotate_text);
    addGif().appendTo(rotate_elem);
    rotate_text.style.transform = "translate(-50%, -50%)";
    rotate_elem.style.width = document.body.offsetWidth + "px";
    rotate_elem.style.height = document.body.offsetHeight + "px";
    rotate_elem.style.background = "black";
    section_choose.style.display = "none";
    const all_codes = document.querySelector(".all_codes");
    document.body.prepend(rotate_elem);
}
function check_window_width(){
    if(window.innerWidth > 780){
        rotate_elem.remove();
        rotate_elem_text.remove();
        rotate_text.remove();
        section_choose.style.display = "block";
    }
}
function chooseLang(){
    var ch_lang = document.querySelector('select');
    let k = 0;
    ch_lang.addEventListener("change", function(){
        console.log( ch_lang[ch_lang.value - 1]);
        document.querySelectorAll('.code')[k].style.display = "none";
        document.querySelectorAll('.code')[ch_lang.value - 1].style.display = "block";
        k = ch_lang.value - 1;
    });
}
chooseLang();
setInterval(check_window_width, 200);
