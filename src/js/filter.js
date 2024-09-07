const buttons = document.querySelectorAll('.filter-button');
const items = document.querySelectorAll('.item');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');

        items.forEach(item => {
            if (filter === 'all' || item.classList.contains(filter)) {
                item.classList.add('show');
            } else {
                item.classList.remove('show');
            }
        });
    });
});