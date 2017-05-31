document.addEventListener("DOMContentLoaded", function () {
    const searchButton = document.querySelector(".c-header__title__buttons__searchButton");
    const burgerButton = document.querySelector(".c-header__title__buttons__burgerButton");
    const searchButtonDropdown = document.querySelector(".c-header__title__buttons__searchButton__dropdown");
    const burgerButtonDropdown = document.querySelector(".c-header__title__buttons__burgerButton__dropdown");

    console.log(searchButtonDropdown, burgerButtonDropdown);

    searchButton.addEventListener("click", function () {

        searchButtonDropdown.style.display === "block" ? searchButtonDropdown.style.display = "none" : searchButtonDropdown.style.display = "block";
        burgerButtonDropdown.style.display = "none";

    });

    burgerButton.addEventListener("click", function () {

        burgerButtonDropdown.style.display === "block" ? burgerButtonDropdown.style.display = "none" : burgerButtonDropdown.style.display = "block";
        searchButtonDropdown.style.display = "none";
    });
});