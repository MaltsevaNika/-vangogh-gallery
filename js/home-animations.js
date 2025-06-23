document.addEventListener('DOMContentLoaded', function() {
    // Анимация героя-секции
    const hero = document.querySelector('.hero');
    if (hero) {
        const title = hero.querySelector('h1');
        const subtitle = hero.querySelector('p');
        const button = hero.querySelector('.btn');
        
        // Начальные стили
        title.style.opacity = '0';
        title.style.transform = 'translateY(30px)';
        subtitle.style.opacity = '0';
        subtitle.style.transform = 'translateY(30px)';
        button.style.opacity = '0';
        button.style.transform = 'translateY(30px)';
        
        // Анимация с задержкой
        setTimeout(() => {
            title.style.transition = 'all 0.8s ease-out';
            title.style.opacity = '1';
            title.style.transform = 'translateY(0)';
            
            setTimeout(() => {
                subtitle.style.transition = 'all 0.8s ease-out 0.3s';
                subtitle.style.opacity = '1';
                subtitle.style.transform = 'translateY(0)';
                
                setTimeout(() => {
                    button.style.transition = 'all 0.8s ease-out 0.6s';
                    button.style.opacity = '1';
                    button.style.transform = 'translateY(0)';
                }, 300);
            }, 300);
        }, 500);
    }
    
    // Параллакс эффект для фона
    window.addEventListener('scroll', function() {
        const parallaxElements = document.querySelectorAll('.parallax');
        
        parallaxElements.forEach(element => {
            const speed = parseFloat(element.getAttribute('data-speed')) || 0.5;
            const yPos = -(window.pageYOffset * speed);
            element.style.transform = `translate3d(0, ${yPos}px, 0)`;
        });
    });
    
    // Анимация цитаты
    const quoteSection = document.querySelector('.quote-section');
    if (quoteSection) {
        const quote = quoteSection.querySelector('.quote');
        const author = quoteSection.querySelector('.quote-author');
        
        // Начальные стили
        quote.style.opacity = '0';
        quote.style.transform = 'scale(0.9)';
        author.style.opacity = '0';
        
        // Запуск анимации при попадании в область видимости
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    quote.style.transition = 'all 0.8s ease-out';
                    quote.style.opacity = '1';
                    quote.style.transform = 'scale(1)';
                    
                    setTimeout(() => {
                        author.style.transition = 'all 0.8s ease-out 0.5s';
                        author.style.opacity = '1';
                    }, 500);
                    
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(quoteSection);
    }
});