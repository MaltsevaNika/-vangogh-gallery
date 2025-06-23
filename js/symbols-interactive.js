document.addEventListener('DOMContentLoaded', function() {
    const symbolCards = document.querySelectorAll('.symbol-card');
    const symbolDetailModal = document.getElementById('symbol-detail');
    const modalContent = document.querySelector('.modal-content');
    const closeModal = document.querySelector('.close-modal');
    
    // Анимация при наведении на символы
    symbolCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const img = card.querySelector('img');
            img.style.transform = 'scale(1.1)';
            
            const content = card.querySelector('.symbol-content');
            content.style.backgroundColor = 'rgba(118, 127, 148, 0.7)';
            content.style.color = 'white';
        });
        
        card.addEventListener('mouseleave', () => {
            const img = card.querySelector('img');
            img.style.transform = 'scale(1)';
            
            const content = card.querySelector('.symbol-content');
            content.style.backgroundColor = 'white';
            content.style.color = '#333';
        });
        
        // Открытие модального окна с деталями
        card.addEventListener('click', function() {
            const symbolTitle = this.querySelector('h3').textContent;
            const symbolDescription = this.querySelector('p').textContent;
            const symbolImage = this.querySelector('img').src;
            const examples = Array.from(this.querySelectorAll('.example-list li')).map(li => li.textContent).join(', ');
            
            modalContent.innerHTML = `
                <div class="modal-header">
                    <h2>${symbolTitle}</h2>
                    <img src="${symbolImage}" alt="${symbolTitle}">
                </div>
                <div class="modal-body">
                    <p>${symbolDescription}</p>
                    <h3>Примеры работ:</h3>
                    <p>${examples}</p>
                    <button class="btn">Посмотреть все работы с этим символом</button>
                </div>
            `;
            
            symbolDetailModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Закрытие модального окна
    closeModal.addEventListener('click', () => {
        symbolDetailModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    window.addEventListener('click', (e) => {
        if (e.target === symbolDetailModal) {
            symbolDetailModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});