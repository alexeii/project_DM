const toggleClubSelect = () => {
    const clubList = document.querySelector(".clubs-list>p");
    const clubsListUl = document.querySelector(".clubs-list>ul");

    document.addEventListener("click", (event) => {
        const target = event.target;
        if (target !== clubList && target !== clubsListUl) {
            clubsListUl.style.display = "none";
        } else if (target === clubList) {
            clubsListUl.style.display =
                clubsListUl.style.display !== "block" ? "block" : "none";
        }
    });
};
export default toggleClubSelect;