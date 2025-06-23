document.addEventListener('DOMContentLoaded', function() {
    const comparisonSliders = document.querySelectorAll('.comparison-slider');
    
    comparisonSliders.forEach(slider => {
        const before = slider.querySelector('.before');
        const handle = slider.querySelector('.handle');
        let isDragging = false;
        
        function moveHandle(e) {
            let x;
            
            if (e.type === 'mousedown' || e.type === 'mousemove') {
                x = e.pageX - slider.getBoundingClientRect().left;
            } else if (e.type === 'touchstart' || e.type === 'touchmove') {
                x = e.touches[0].pageX - slider.getBoundingClientRect().left;
            }
            
            const sliderWidth = slider.offsetWidth;
            let position = (x / sliderWidth) * 100;
            
            // Ограничиваем положение в пределах слайдера
            position = Math.max(0, Math.min(100, position));
            
            before.style.width = `${position}%`;
            handle.style.left = `calc(${position}% - 10px)`;
        }
        
        // События для мыши
        handle.addEventListener('mousedown', () => {
            isDragging = true;
        });
        
        slider.addEventListener('mousemove', (e) => {
            if (isDragging) moveHandle(e);
        });
        
        window.addEventListener('mouseup', () => {
            isDragging = false;
        });
        
        // События для сенсорных устройств
        handle.addEventListener('touchstart', () => {
            isDragging = true;
        });
        
        slider.addEventListener('touchmove', (e) => {
            if (isDragging) moveHandle(e);
        });
        
        window.addEventListener('touchend', () => {
            isDragging = false;
        });
        
        // Клик по слайдеру для перемещения
        slider.addEventListener('click', (e) => {
            if (!isDragging) moveHandle(e);
        });
    });
});