function openBox(){
    let div = document.getElementById('loginDiv');
    let above = document.getElementById('above');

    div.style.display = "block";
    above.style.display = "none";
}

function closeBox(){
    let div = document.getElementById('loginDiv');
    let above = document.getElementById('above');

    div.style.display="none";
    above.style.display = "block";
}