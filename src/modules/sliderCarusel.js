const sliderCarusel = () => {
    //const services = document.querySelector('.services');
    const services = document.querySelector('.servises-trans');
    const servicesSlider = document.querySelector('.services-slider');
    const slides = servicesSlider.querySelectorAll('.slide');
    const arrowPrev = document.createElement("span");
    arrowPrev.className = "slider-arrow";
    arrowPrev.classList.add("prev");
    servicesSlider.append(arrowPrev);
    const arrowNext = document.createElement("span");
    arrowNext.className = "slider-arrow";
    arrowNext.classList.add("next");
    servicesSlider.append(arrowNext);
    let position = 0;

    const prevSlider = () => {

        if (position >= 0) {
            --position;
            services.style.transform = `translateX(-${position * 20}%)`;
        }
    };
    const nextSlider = () => {

        if (position < 6) {
            ++position;
            services.style.transform = `translateX(-${position * 20}%)`;
        };
    };
    arrowNext.addEventListener('click', nextSlider);
    arrowPrev.addEventListener('click', prevSlider);

};



export default sliderCarusel;