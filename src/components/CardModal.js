import React from 'react';
import Modal from 'react-modal';

class CardEditModal extends Component {
    static propTypes = {
        card: PropTypes.shape({
          text: PropTypes.string.isRequired,
          id: PropTypes.string.isRequired,
          date: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
          color: PropTypes.string
        }).isRequired,
        listId: PropTypes.string.isRequired,
        isOpen: PropTypes.bool.isRequired,

    return (
        <Modal
            isOpen={isOpen}
            card
        >
            <h3>Selected Card</h3>
        </Modal>
    )
}