"use strict";

import toggleModal from "./modules/toggleClubSelect";
import arrowScroll from "./modules/arrowScroll";
import burgerMenu from "./modules/burgerMenu";
import mainSlider from "./modules/mainSlider";
import sliderGallery from "./modules/sliderGallery";
import calc from "./modules/calc";
import sliderCarusel from "./modules/sliderCarusel";
import validateForm from "./modules/validateForm";
import sendForm from "./modules/sendForm";

//выбop клубa
toggleModal();
//стрелка и бургерменю при скролле
arrowScroll();
//burgerMenu
burgerMenu();
//mainSlider
mainSlider();
//слайдер фотогалереи
sliderGallery();
//калькулятор
calc();
//слайдер карусель
sliderCarusel();
//валидация
validateForm();
//отправка форм 
sendForm();