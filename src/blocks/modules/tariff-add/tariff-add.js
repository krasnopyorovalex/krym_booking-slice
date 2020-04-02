document.addEventListener("DOMContentLoaded", () => {

    const categoriesList = document.querySelector('.categories-list');
    if (categoriesList) {
        const categoriesListNames = categoriesList.querySelectorAll('.categories-list-item-name');
        const categoriesListNamesLength = categoriesListNames.length;

        if (categoriesListNamesLength) {
            for (let i = 0; i < categoriesListNamesLength; i++) {
                categoriesListNames[i].addEventListener("click", (event) => event.currentTarget.classList.toggle('active'));
            }
        }
    }
});
