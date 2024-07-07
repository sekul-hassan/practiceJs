function showMam(event,mam){
    let mems = document.getElementsByClassName('mam');
    let btns = document.getElementsByClassName('btn');

    for(let i=0;i<mems.length;i++){
        mems[i].style.display = "none";
        btns[i].className = btns[i].className.replace(" active"," ");
    }
    document.getElementById(mam).style.display = "block";
    event.currentTarget.className += " active";

}