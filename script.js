const slider = document.querySelector('#slider');
slider.addEventListener('input', ()=>{
    createGrid(slider.value)
});


const colorPicker = document.querySelector('#colorPicker')

let mouseState = false;
function addPixelEvents(pixel) {
    pixel.addEventListener('mousedown', (e) => {
        e.preventDefault();
        mouseState = true;
        pixel.style.background = colorPicker.value;
    });

    pixel.addEventListener('mouseover', () => {
        if (mouseState) {
            pixel.style.background = colorPicker.value;
        }
    });

    pixel.addEventListener('mouseup', () => {
        mouseState = false;
    });

    return pixel;
}


function createGrid(newGridSize=16) {
    const container = document.querySelector('#container');
    let newPixelSize = ((31.15*16)/newGridSize);
    container.innerHTML = ('');

    for (let i = 1; i<=(newGridSize*newGridSize); i++){
        let pixel = document.createElement('div');
        pixel.classList.add('pixel');
        pixel.style.cssText = `height: ${newPixelSize}px; width: ${newPixelSize}px;`;
        addPixelEvents(pixel);
        container.appendChild(pixel);
    }
}

createGrid();


function getRandomColor(){
    return `#${Math.floor(Math.random() * 999999)}`;
}