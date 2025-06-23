document.addEventListener('DOMContentLoaded', function() {
    const timelineItems = document.querySelectorAll('.period');
    
    function animateTimeline() {
        timelineItems.forEach((item, index) => {
            const itemPosition = item.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (itemPosition < screenPosition) {
                // Задержка для последовательной анимации
                item.style.transitionDelay = `${index * 0.1}s`;
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Инициализация
    timelineItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(50px)';
        item.style.transition = 'all 0.5s ease-out';
    });
    
    window.addEventListener('scroll', animateTimeline);
    animateTimeline(); // Запустить при загрузке
});