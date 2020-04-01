const mainpic = document.querySelector('.displayed-img');
const bar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');



btn.onclick = function() {

for (i = 0; i < 6; i++) {
    var pict = i
    var x = "images/pic" + image + "jpg";
    const newImage = document.createElement('full-img');
    newImage.setAttribute('src', x);
    bar.appendChild(newImage);
    newImage.onclick = function(e) {
        displayedImage.src = e.target.src;
       

    }
}
}











btn.onclick = function() {
    const btnClass = btn.getAttribute('class');
    if (btnClass === 'dark') {
        btn.setAttribute('class','light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)"
    }
    else{
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor ='rgba(0,0,0,0)'
    }
}






