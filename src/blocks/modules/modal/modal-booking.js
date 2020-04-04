import * as utils from "../../../js/import/utils";

class ModalBooking {

    static TIME_DURATION = 300;

    constructor(el = null) {
        this.el = el;

        if (! this.el) {
            this.el = document.querySelector('.modal-booking');
        }
    }

    handleShow = (event) => {
        const classListVal = event.target.closest('.cell').classList.value;

        if (classListVal.indexOf('status-') === -1) {
            const selectedCells = event.currentTarget.querySelectorAll('.selected');
            const selectedCellsLength = selectedCells.length;

            if (selectedCellsLength > 1) {
                for (let i = 0; i < selectedCellsLength; i++) {
                    selectedCells[i].classList.remove('selected');
                }
            }
            return utils.fadeIn(this.el, ModalBooking.TIME_DURATION);
        }
        return false;
    };

    handleHide = () => {
        const el = this.el;
        el.querySelector('.btn-close').addEventListener('click', function () {
            return utils.fadeOut(el, ModalBooking.TIME_DURATION);
        });
    }
}

export default ModalBooking;
