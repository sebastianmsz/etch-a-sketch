let slider = document.getElementById("slider");

slider.addEventListener('input', ()=>{
    createGrid(slider.value)
});

function createGrid(newGridSize=16) {
    const container = document.querySelector('#container');
    let newPixelSize = ((31.15*16)/newGridSize);
    container.innerHTML = ('');

    for (let i = 1; i<=(newGridSize*newGridSize); i++){
        let pixel = document.createElement('div');
        pixel.classList.add('pixel');
        pixel.style.cssText = `height: ${newPixelSize}px; width: ${newPixelSize}px;`
        container.appendChild(pixel)
    }
}

createGrid();