/**
 * Header scrolling behaviour
 */
const logo = document.querySelector('.logo');
const header = document.querySelector('header');
const minHeightVh = (100 / window.innerHeight) * 100;
const maxHeightVh = 40;
const minTopPx = 16;
const maxTopPx = (window.innerHeight * (1 - maxHeightVh / 100)) / 2;

function handleScroll() {
    const scrollRatio = Math.max(
        0,
        1 - (window.scrollY / window.innerHeight) * 2
    );
    const heightVh = minHeightVh + (maxHeightVh - minHeightVh) * scrollRatio;
    const topPx = minTopPx + (maxTopPx - minTopPx) * scrollRatio;

    logo.style.height = heightVh + 'vh';
    logo.style.top = topPx + 'px';

    if (scrollRatio === 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

document.addEventListener('scroll', handleScroll);
handleScroll();

/**
 * Service selection
 */
const buttons = document.querySelectorAll('#services-selection button');
const articles = document.querySelectorAll('#services article');

function showService(type) {
    buttons.forEach((btn) => {
        btn.classList.toggle('active', btn.dataset.type === type);
    });

    articles.forEach((article) => {
        article.classList.toggle('active', article.dataset.type === type);
    });
}

if (buttons.length > 0) {
    const initialType = buttons[0].dataset.type;
    showService(initialType);
}

buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        const type = btn.dataset.type;
        showService(type);
    });
});
