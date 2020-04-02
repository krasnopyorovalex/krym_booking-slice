document.addEventListener("DOMContentLoaded", () => {
    const hasBoardInfo = document.querySelectorAll('.has-board-info');

    if (hasBoardInfo.length) {
        const hasBoardInfoLength = hasBoardInfo.length;

        for (let i = 0; i < hasBoardInfoLength; i++) {
            hasBoardInfo[i].addEventListener("click", (event) => {
                return event.currentTarget.classList.toggle('is-open');
            });

            document.addEventListener("click", (event) => {
                if (!hasBoardInfo[i].contains(event.target)) {
                    return hasBoardInfo[i].classList.remove('is-open');
                }
            });
        }
    }
});
