const paintingImage = document.querySelector('.painting-image');
const zoomInBtn = document.querySelector('.zoom-in');
const zoomOutBtn = document.querySelector('.zoom-out');
const resetBtn = document.querySelector('.reset');
let scale = 1;
        
        zoomInBtn.addEventListener('click', () => {
            scale += 0.1;
            paintingImage.style.transform = `scale(${scale})`;
        });
        
        zoomOutBtn.addEventListener('click', () => {
            if (scale > 0.5) {
                scale -= 0.1;
                paintingImage.style.transform = `scale(${scale})`;
            }
        });
        
        resetBtn.addEventListener('click', () => {
            scale = 1;
            paintingImage.style.transform = `scale(${scale})`;
        });
