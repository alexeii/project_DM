const mainSlider = () => {
    const mainSliders = document.querySelector('.main-slider');
    const arrSlide = mainSliders.querySelectorAll('.slide');
    let currentSlide = 0;
    let interval;
    const prevSlide = (elem, index) => {
        elem[index].style.display = 'none';
    };
    const nextSlide = (elem, index) => {
        elem[index].style.display = 'flex';
    };
    const autoPlaySlide = () => {
        prevSlide(arrSlide, currentSlide);
        currentSlide++;
        if (currentSlide >= arrSlide.length) {
            currentSlide = 0;
        }
        nextSlide(arrSlide, currentSlide);
    };
    const startSlide = (time = 2000) => {
        interval = setInterval(autoPlaySlide, time);

    };
    startSlide();
};

export default mainSlider;