window.onload = () => {
    //Выделение текущей страницы
    const path = window.location.pathname;
    const page_name = path.split("/").pop();
    var all_buttons_name = document.querySelectorAll(".menu_button");
    all_buttons_name.forEach(element => {
        if (element.href.slice(element.href.lastIndexOf('/') + 1) == page_name){
            element.style.background = "red";
        }
    });
    
}