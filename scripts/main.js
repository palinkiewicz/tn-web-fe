const logo = document.querySelector('.logo');
const minHeightVh = 100 / window.innerHeight * 100;
const maxHeightVh = 40;
const minTopPx = 16;
const maxTopPx = (window.innerHeight * (1 - maxHeightVh / 100) / 2)

function setCorrectLogoPosition() {
    const scrollRatio = Math.max(0, 1 - (window.scrollY / window.innerHeight) * 2);
    const heightVh = minHeightVh + (maxHeightVh - minHeightVh) * scrollRatio;
    const topPx = minTopPx + (maxTopPx - minTopPx) * scrollRatio;

    logo.style.height = heightVh + 'vh';
    logo.style.top = topPx + 'px';
}

document.addEventListener('scroll', setCorrectLogoPosition);
setCorrectLogoPosition();