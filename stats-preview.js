function changeSrc() {
    const scrnSize = window.innerWidth;
    const img = document.querySelector('img');
    if(scrnSize < 800) {
        img.src = 'images\image-header-mobile.jpg';
    } else {
        img.src = 'images\image-header-desktop.jpg';
    }
}

window.addEventListener(onresize, changeSrc);