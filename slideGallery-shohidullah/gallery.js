let slideIndex=1;

function showSlide(num){
    let slides=document.getElementsByClassName("slide");
    let previewImg=document.getElementsByClassName("previewImg");
    if(num>slides.length) num=1;
    if(num<1) num= slides.length;
     slideIndex=num;
   

     for(let i=0;i<slides.length;i++){
        slides[i].style.display="none";
        previewImg[i].style.opacity="0.6";
     }
    slides[slideIndex-1].style.display="block";
    previewImg[slideIndex-1].style.opacity="1";

}
showSlide(1);

function showNext(num){
    showSlide(num+slideIndex);

}