function set_back_body(){
    var checkbox = document.getElementById('mobile-input');
    if (checkbox.checked == true){
        $('body').css('background', 'white');
    }
    else{
        $('body').css('background', 'black');
    }
}
setInterval(set_back_body, 1);