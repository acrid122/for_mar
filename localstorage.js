/*Избранное*/
var all_izbr = document.querySelectorAll('.izbr');
function local_check(){
    console.log(1);
    for(let i = 0; all_izbr.length; ++i){
        if(localStorage.getItem('number_iz' + i.toString()) !== null){
            all_izbr[i].classList.add("active");
        }
    }
}
function local_st(){
    for(let i = 0; all_izbr.length; ++i){
            all_izbr[i].onclick = function(){
                local_check();
                if(!all_izbr[i].classList.contains("active")){
                    localStorage.setItem('number_iz' + i.toString(), i.toString());
                    all_izbr[i].classList.add("active");
                }
                else{
                    localStorage.removeItem('number_iz' + i.toString());
                    all_izbr[i].classList.remove("active");
                }
            }
    }
}
local_st();