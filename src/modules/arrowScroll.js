//
const arrowScroll = () => {
    const totopArrow = document.querySelector('#totop');
    const topMenu = document.querySelector('.top-menu');
    const headSlider = document.querySelector('.head-slider');

    totopArrow.style.display = 'none';

    document.addEventListener('scroll', () => {
        let rect = headSlider.getBoundingClientRect();
        if (rect.top < 0) {
            totopArrow.style.display = 'block';
        } else {
            totopArrow.style.display = 'none';
        }
        if (window.innerWidth < 768) {
            let burgerCoord = headSlider.getBoundingClientRect();
            if (burgerCoord.top < 0) {
                topMenu.style.position = 'fixed';
            } else if (burgerCoord.top > 0) {
                topMenu.style.position = '';
            }
        }
    });
};



export default arrowScroll;