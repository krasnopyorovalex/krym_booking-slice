document.addEventListener("DOMContentLoaded", () => {
    const booking = document.querySelector('.booking');
    if (booking) {
        const categories = booking.querySelectorAll('.booking-body-category .bb-name');
        if (categories.length) {
            const tasksLength = categories.length;

            for (let i = 0; i < tasksLength; i++) {
                categories[i].addEventListener("click", (event) => event.currentTarget.closest('.booking-body-category').classList.toggle('active'));
            }
        }

        const bbFree = booking.querySelectorAll('.booking-body-category-rooms .bb-free');
        if (bbFree.length) {
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
                bbFree[i].addEventListener('mouseup', () => clicked = false);
            }
        }
    }
});
