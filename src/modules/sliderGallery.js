const sliderGallery = () => {
  const gallery = document.querySelector("#gallery");
  const gallerySlider = document.querySelector(".gallery-slider");
  const slideArr = gallery.querySelectorAll(".slide");

  const dot = [];
  const buttonDot = [];
  const ulDot = document.createElement("ul");
  ulDot.className = "slider-dots";
  gallerySlider.append(ulDot);
  for (let i = 0; i < slideArr.length; i++) {
    const liDot = document.createElement("li");
    ulDot.append(liDot);
    const newDot = document.createElement("button");
    buttonDot[i] = newDot;
    buttonDot[i].className = "dot";
    liDot.append(newDot);
    dot[i] = liDot;
  }

  const arrowprev = document.createElement("span");
  arrowprev.className = "slider-arrow";
  arrowprev.classList.add("prev");
  gallerySlider.append(arrowprev);
  const arrowNext = document.createElement("span");
  arrowNext.className = "slider-arrow";
  arrowNext.classList.add("next");
  gallerySlider.append(arrowNext);
  for (let i = 1; i < slideArr.length; i++) {
    slideArr[i].style.display = "none";
  }
  dot[0].classList.add("slick-active");
  let currentSlide = 0;
  let interval;
  const prevSlide = (elem, index) => {
    elem[index].style.display = "none";
    dot[index].classList.remove("slick-active");
  };
  const nextSlide = (elem, index) => {
    elem[index].style.display = "flex";
    dot[index].classList.add("slick-active");
  };
  const autoPlaySlide = () => {
    prevSlide(slideArr, currentSlide);
    currentSlide++;
    if (currentSlide >= slideArr.length) {
      currentSlide = 0;
    }
    nextSlide(slideArr, currentSlide);
  };
  const startSlide = (time = 2000) => {
    interval = setInterval(autoPlaySlide, time);
  };
  const stopSlide = () => {
    clearInterval(interval);
  };
  gallery.addEventListener("click", (event) => {
    event.preventDefault();
    const target = event.target;
    if (!target.matches(".slider-arrow, .dot")) {
      return;
    }
    prevSlide(slideArr, currentSlide);

    if (target.matches(".next")) {
      currentSlide++;
    } else if (target.matches(".prev")) {
      currentSlide--;
    } else if (target.matches(".dot")) {
      buttonDot.forEach((elem, index) => {
        if (elem === target) {
          currentSlide = index;
        }
      });
    }
    if (currentSlide >= slideArr.length) {
      currentSlide = 0;
    }
    if (currentSlide < 0) {
      currentSlide = slideArr.length - 1;
    }
    nextSlide(slideArr, currentSlide);
  });

  gallery.addEventListener("mouseover", (event) => {
    if (event.target.matches(".slider-arrow") || event.target.matches(".dot")) {
      stopSlide();
    }
  });
  gallery.addEventListener("mouseout", (event) => {
    if (event.target.matches(".slider-arrow") || event.target.matches(".dot")) {
      startSlide();
    }
  });

  startSlide();
};

export default sliderGallery;
