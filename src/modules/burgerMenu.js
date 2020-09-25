const burgerMenu = () => {

    const menuButton = document.querySelector('.menu-button>img');
    const popupMenu = document.querySelector('.popup-menu');
    const hiddenSmall = document.querySelector('.hidden-small');
    if (window.innerWidth < 768) {
        menuButton.style.display = 'flex';
        hiddenSmall.style.display = '';
    } else {
        menuButton.style.display = '';
        hiddenSmall.style.display = 'flex';
    }
    document.addEventListener('click', (event) => {
        let target = event.target;
        if (target === menuButton) {
            popupMenu.style.display = 'flex';
        } else if (target.matches('.close-menu-btn>img') || target.matches('.popup-menu>ul>li>a')) {
            popupMenu.style.display = 'none';
        }
    });

};
export default burgerMenu;