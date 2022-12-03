const window_height = window.innerHeight;
const window_width = window.innerWidth;
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
    console.log(video_element);
    video_element.append(source_element);
    return video_element;
}
if(window_width < 780){
    const rotate_elem = document.createElement('div');
    const rotate_text = document.createElement('p');
    const rotate_elem_text = document.createTextNode("Пожалуйста, переверните телефон");
    rotate_elem.style.color = "white";
    rotate_text.style.position = "absolute";
    rotate_text.style.top = "50%";
    rotate_text.style.left = "50%";
    rotate_text.append(rotate_elem_text);
    rotate_elem.append(rotate_text);
    addVideo().appendTo(rotate_elem);
    rotate_text.style.transform = "translate(-50%, -50%)";
    rotate_elem.style.width = document.body.offsetWidth + "px";
    rotate_elem.style.height = document.body.offsetHeight + "px";
    rotate_elem.style.background = "black";
    const all_codes = document.querySelector(".all_codes");
    all_codes.classList.add("all_codes_non-active");
    document.body.prepend(rotate_elem);
}
