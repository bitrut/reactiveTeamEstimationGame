import React from 'react';
import PropTypes from "prop-types";
import Modal from 'react-modal';
import { connect } from "react-redux";

class CardModal extends React.Component {
    static propTypes = {
        card: PropTypes.shape({
          text: PropTypes.string.isRequired,
          id: PropTypes.string.isRequired,
          date: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
          color: PropTypes.string
        }).isRequired,
        listId: PropTypes.string.isRequired,
        isOpen: PropTypes.bool.isRequired
    };

    render(){
        return(
            <Modal
                isOpen={this.props.isOpen}
                contentLabel="Card editor"
            >
                <h3>Selected Card</h3>
                <p>{this.props.card.text}</p>
            </Modal>
        );
    }
}

export default connect()(CardModal);