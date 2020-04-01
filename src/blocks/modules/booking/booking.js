import * as utils from '../../../js/import/utils';

const TIME_DURATION = 300;

document.addEventListener("DOMContentLoaded", () => {
    const booking = document.querySelector('.booking');
    const modal = document.querySelector('.modal');
    if (booking) {
        const categories = booking.querySelectorAll('.booking-body-category .bb-name');
        if (categories.length) {
            const tasksLength = categories.length;

            for (let i = 0; i < tasksLength; i++) {
                categories[i].addEventListener("click", (event) => event.currentTarget.closest('.booking-body-category').classList.toggle('active'));
            }
        }

        const bbFree = booking.querySelectorAll('.booking-body-category-rooms .bb-free');
        if (bbFree.length && modal) {
            const bbFreeLength = bbFree.length;
            let clicked = false;

            for (let i = 0; i < bbFreeLength; i++) {
                bbFree[i].addEventListener('mousedown', () => clicked = true);
                bbFree[i].addEventListener('mousemove', (event) => {
                    if (clicked) {
                        event.target.closest('.cell').classList.add('selected');
                    }
                    return true;
                });
                bbFree[i].addEventListener('mouseup', (event) => {
                    clicked = false;

                    const selectedCells = event.currentTarget.querySelectorAll('.selected');
                    const selectedCellsLength = selectedCells.length;

                    if (selectedCellsLength > 1) {
                        for (let i = 0; i < selectedCellsLength; i++) {
                            selectedCells[i].classList.remove('selected');
                        }
                    }
                    return utils.fadeIn(modal, TIME_DURATION);
                });
            }

            modal.querySelector('.btn-close').addEventListener('click', function () {
                return utils.fadeOut(modal, TIME_DURATION);
            });
        }
    }
});
