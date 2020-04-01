const mainpic = document.querySelector('.displayed-img');
const bar = document.querySelector('.thumb-bar');

const bttn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

for(let i = 1; i <= 5; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', 'images/pic' + i + '.jpg');
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
}






