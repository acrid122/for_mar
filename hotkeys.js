var cards_ide = document.querySelectorAll('.cards_ide');
var cards_ide_li = document.querySelectorAll('.cards_ide li');
var clion_key = document.querySelector('#clion_hot');
var mimg =document.createElement('img');
var mimg1 =document.createElement('img');
mimg.style.border = "2px solid white";
mimg1.style.border = "2px solid white";
mimg.style.borderRadius = "20px";
mimg1.style.borderRadius = "20px";
function delete_left_or_set(i, k){
    for(let j = 0; j < cards_ide.length; ++j){
        if(j != i){
            (k == "delete") ? cards_ide[j].style.display  = "none" : cards_ide[j].style.display  = "flex";
        }
    }
}
for(let i = 0; i < cards_ide.length; ++i){
    cards_ide[i].onmouseenter = function(){
        if(i == 0){
            for(let j = 0; j < cards_ide_li.length; ++j){
                cards_ide_li[j].onmouseenter = function(){
                    if(j == 0){
                        mimg.src='clion_hot.png';
                    }
                    else{
                        mimg.src='phpstorm_hot.jpg';
                    }
                    document.querySelector('main').prepend(mimg);
                    mimg.style.position = "absolute";
                    if(window.innerWidth <= 780){
                        mimg.style.left = "20%";
                        mimg.style.top = "50%";
                        mimg.style.width = "350px";
                        mimg.style.height = "250px";
                    }
                    else if(window.innerWidth >= 780 && window.innerWidth <= 1020){
                        mimg.style.left = "40%";
                        mimg.style.top = "50%";
                        mimg.style.width = "450px";
                        mimg.style.height = "300px";
                    }
                    else if(window.innerWidth >= 1020 && window.innerWidth <= 1200){
                        mimg.style.left = "30%";
                        mimg.style.top = "50%";
                        mimg.style.width = "650px";
                        mimg.style.height = "300px";
                    }
                    else if(window.innerWidth >= 1200 && window.innerWidth <= 1500){
                        mimg.style.left = "40%";
                        mimg.style.top = "50%";
                        mimg.style.width = "650px";
                        mimg.style.height = "450px";
                    }
                    else{
                        mimg.style.left = "40%";
                        mimg.style.top = "30%";
                        mimg.style.width = "750px";
                        mimg.style.height = "550px";
                    }
                }
            }
        }
        if(i == 1){
            for(let j = 0; j < cards_ide_li.length; ++j){
                cards_ide_li[j].onmouseenter = function(){
                    if(j == 4){
                        mimg.src='inteljlidea_hot_1.jpg';
                        mimg1.src='inteljlidea_hot_2.jpg';
                    }
                    if(j == 3){
                        mimg.src='pycharm_hot_1.jpg';
                        mimg1.src='pycharm_hot_2.jpg';
                    }
                    if(j == 2){
                        mimg.src='visual_st_hot_1.jpg';
                        mimg1.src='visual_st_hot_2.jpg';
                    }
                    document.querySelector('main').prepend(mimg1);
                    document.querySelector('main').prepend(mimg);
                    mimg.style.position = "absolute";
                    mimg1.style.position = "absolute";
                    if(window.innerWidth <= 780){
                        mimg.style.width = "250px";
                        mimg.style.height = "300px";
                        mimg1.style.width = "250px";
                        mimg1.style.height = "300px";
                        mimg.style.left = "2%";
                        mimg.style.top = "5%";
                        mimg1.style.right = "2%";
                        mimg1.style.top = "60%";
                    }
                    else if(window.innerWidth >= 780 && window.innerWidth <= 1020){
                        mimg.style.width = "350px";
                        mimg.style.height = "400px";
                        mimg1.style.width = "350px";
                        mimg1.style.height = "400px";
                        mimg.style.left = "2%";
                        mimg.style.top = "55%";
                        mimg1.style.right = "2%";
                        mimg1.style.top = "55%";
                    }
                    else if(window.innerWidth >= 1020 && window.innerWidth <= 1200){
                        mimg.style.width = "350px";
                        mimg.style.height = "400px";
                        mimg1.style.width = "350px";
                        mimg1.style.height = "400px";
                        mimg.style.left = "2%";
                        mimg.style.top = "55%";
                        mimg1.style.right = "2%";
                        mimg1.style.top = "55%";
                    }
                    else if(window.innerWidth >= 1200 && window.innerWidth <= 1500){
                        mimg.style.width = "350px";
                        mimg.style.height = "350px";
                        mimg1.style.width = "350px";
                        mimg1.style.height = "350px";
                        mimg.style.left = "2%";
                        mimg.style.top = "60%";
                        mimg1.style.right = "2%";
                        mimg1.style.top = "60%";
                    }
                    else{
                        mimg.style.width = "400px";
                        mimg.style.height = "400px";
                        mimg1.style.width = "400px";
                        mimg1.style.height = "400px";
                        mimg.style.left = "0%";
                        mimg.style.top = "35%";
                        mimg1.style.right = "0%";
                        mimg1.style.top = "35%";
                    }
                }
            }
        }
        if(i == 2){
            for(let j = 0; j < cards_ide_li.length; ++j){
                cards_ide_li[j].onmouseenter = function(){
                    if(j == 5){
                        mimg.src='eclipse_hot.jpg';
                    }
                    if(j == 6){
                        mimg.src='netbeans_hot.jpg';
                    }
                    if(j == 7){
                        mimg.src='xcode_hot.jpg';
                    }
                    if(j == 8){
                        mimg.src='clion_hot.png';
                    }
                    if(j == 9){
                        mimg.src='phpstorm_hot.jpg';
                    }
                    document.querySelector('main').prepend(mimg);
                    mimg.style.position = "absolute";
                    if(window.innerWidth <= 780){
                        mimg.style.width = "400px";
                        mimg.style.height = "300px";
                        mimg.style.left = "2%";
                        mimg.style.top = "20%";
                    }
                    else if(window.innerWidth >= 780 && window.innerWidth <= 1020){
                        mimg.style.width = "400px";
                        mimg.style.height = "325px";
                        mimg.style.left = "2%";
                        mimg.style.top = "10%";
                    }
                    else if(window.innerWidth >= 1020 && window.innerWidth <= 1200){
                        mimg.style.left = "5%";
                        mimg.style.top = "5%";
                        mimg.style.width = "550px";
                        mimg.style.height = "300px";
                    }
                    else if(window.innerWidth >= 1200 && window.innerWidth <= 1500){
                        mimg.style.left = "5%";
                        mimg.style.top = "40%";
                        mimg.style.width = "550px";
                        mimg.style.height = "400px";
                    }
                    else{
                        mimg.style.left = "5%";
                        mimg.style.top = "30%";
                        mimg.style.width = "750px";
                        mimg.style.height = "500px";
                    }
                }
            }
        }
        delete_left_or_set(i, "delete");
    }
    cards_ide[i].onmouseleave = function(){
        delete_left_or_set(i, "");
        mimg.remove();
        mimg1.remove();
    }
}