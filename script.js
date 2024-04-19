// criando um slideshow automático

// declarando as variaveis
let imagens=['./img/Carro1.jpg','./img/Carro2.jpg','./img/Carro3.jpg'];
let index = 0;
let time = 3000;

function slideShow(){
    document.getElementById("imgbanner").src=imagens[index];
    index++;

    if(index == imagens.length){
        index=0;
    

    }
    setTimeout('slideShow()', time);
}
slideShow();