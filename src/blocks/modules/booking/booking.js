import ModalBooking from "%modules%/modal/modal-booking";
import ModalBooked from "%modules%/modal/modal-booked";

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

        const modalBooking = new ModalBooking();
        modalBooking.handleHide();

        const modalBooked = new ModalBooked();

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

                bbFree[i].addEventListener('mouseup', (event) => {
                    clicked = false;
                    return modalBooking.handleShow(event);
                });

                const bookedInfo = bbFree[i].querySelectorAll('.book-info');
                if (bookedInfo) {
                    const bookedInfoLength = bookedInfo.length;
                    for (let j = 0; j < bookedInfoLength; j++) {
                        bookedInfo[j].addEventListener('click', () => {
                            return fetch('modal/modal-booked.html')
                                .then((response) => response.text())
                                .then((data) => modalBooked.render(data));
                        });
                    }
                }
            }
        }
    }
});
