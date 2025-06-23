document.addEventListener('DOMContentLoaded', function() {
    const filterForm = document.getElementById('gallery-filters');
    const galleryItems = document.querySelectorAll('.gallery-item');
    const noResults = document.getElementById('no-results');
    
    if (filterForm) {
        filterForm.addEventListener('change', filterGallery);
    }

    function filterGallery() {
        const period = document.getElementById('period').value;
        const type = document.getElementById('type').value;
        const theme = document.getElementById('theme').value;
        const sort = document.getElementById('sort').value;
        
        let visibleItems = 0;
        
        galleryItems.forEach(item => {
            const itemPeriod = item.getAttribute('data-period');
            const itemType = item.getAttribute('data-type');
            const itemTheme = item.getAttribute('data-theme');
            
            const periodMatch = period === 'all' || itemPeriod === period;
            const typeMatch = type === 'all' || itemType === type;
            const themeMatch = theme === 'all' || itemTheme === theme;
            
            if (periodMatch && typeMatch && themeMatch) {
                item.style.display = 'block';
                visibleItems++;
            } else {
                item.style.display = 'none';
            }
        });
        
        // Сортировка
        if (sort !== 'all') {
            sortGallery(sort);
        }
        
        // Показать/скрыть сообщение "Ничего не найдено"
        noResults.style.display = visibleItems ? 'none' : 'block';
    }
    
    function sortGallery(sortMethod) {
        const gallery = document.querySelector('.gallery');
        const items = Array.from(document.querySelectorAll('.gallery-item[style="display: block;"]'));
        
        items.sort((a, b) => {
            switch(sortMethod) {
                case 'date-asc':
                    return parseInt(a.getAttribute('data-year')) - parseInt(b.getAttribute('data-year'));
                case 'date-desc':
                    return parseInt(b.getAttribute('data-year')) - parseInt(a.getAttribute('data-year'));
                case 'popular':
                    return parseInt(b.getAttribute('data-views')) - parseInt(a.getAttribute('data-views'));
                case 'alphabetical':
                    return a.querySelector('.gallery-title').textContent.localeCompare(b.querySelector('.gallery-title').textContent);
                default:
                    return 0;
            }
        });
        
        items.forEach(item => gallery.appendChild(item));
    }
});