const tabs = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
tab.addEventListener('click', () => {
    tabs.forEach(item => {
    item.classList.remove('active');
    });
    tab.classList.add('active');

    const target = tab.dataset.tab;
    tabContents.forEach(content => {
    if (content.id === target) {
        content.classList.add('active');
    } else {
        content.classList.remove('active');
    }
    });
});
});