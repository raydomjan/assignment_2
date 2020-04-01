const mainpic = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

for(let i = 1; i <= 5; i++) {
    const newImage = document.createElement('displayed-img');
    newImage.setAttribute('src', 'pics' + i + '.jpg');
    thumbBar.appendChild(newImage);

    newImage.onclick = function(n) {
        displayedImage.src = n.target.src;
    }
}

btn.onclick =function() {
    const btnClass = btn.getAttribute('class');
    if (btnClass === 'shade') {
        btn.setAttribute('class','light');
        btn.textContent = 'Lighten';
        overlay.getElementsByClassName.backgroundColor = "rgba(0,0,0,0.5)"
    }
    else{
        btn.setAttribute('class', 'shade');
        btn.textContent = 'Darken';
        overlay.getElementsByClassName.backgroundColor ='rgba(0,0,0,0)'
    }
}






