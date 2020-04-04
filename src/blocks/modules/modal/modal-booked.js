import * as utils from "../../../js/import/utils";

class ModalBooked {
    render = (template) => {
        const modal = document.createElement('div');
        modal.classList.add('modal', 'modal-booked');
        modal.innerHTML = template;

        document.body.append(modal);

        modal.querySelector('.btn-close').addEventListener('click', () => utils.fadeOutAndRemove(modal));

        return utils.fadeIn(modal);
    };
}

export default ModalBooked;
