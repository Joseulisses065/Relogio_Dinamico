function transicao(){
    var imagem=document.getElementById("imagem");
    var hora;
    var data = new Date()
    var horas = data.getHours(); 
    var titulo;
    var corpo =document.body;
    titulo=document.getElementById("titulo");
    titulo.innerText=`Agora São ${horas} horas`
    if((horas<=12)&&(horas>=5)){
        imagem.src="img/manha.jpg"
        corpo.style.backgroundColor="#f78966";
    }else if((horas<=18)&&(horas>=13)){
        imagem.src="img/tarde.jpg"
        corpo.style.backgroundColor="#71c3f3";
    }else if((horas>=19)||(horas<=4)){
        imagem.src="img/noite.jpg"
        corpo.style.backgroundColor="#07588f"
    }
}
function entrar(){
    var imagem=document.getElementById("imagem");
    
    imagem.style.width="160px";
    imagem.style.height="160px"
}
function sair(){
    var imagem=document.getElementById("imagem");
  
    imagem.style.width="150px";
    imagem.style.height="150px"
}