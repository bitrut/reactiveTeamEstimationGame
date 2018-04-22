import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import Modal from 'react-modal';
import { connect } from "react-redux";
import FaTrash from "react-icons/lib/fa/trash";

class ImportModal extends React.Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({ boardId: PropTypes.string })
    }).isRequired,
    history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
    dispatch: PropTypes.func.isRequired
  };

  constructor () {
    super();
    this.state = {
      showModal: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
}

  handleSelection = () => {
    const { dispatch, match, history } = this.props;
    const { boardId } = match.params;
    dispatch({ type: "DELETE_BOARD", payload: { boardId } });
    history.push("/");
  };

  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }

  render = () => (
    <div>
        <button onClick={this.handleOpenModal} className="board-deleter-button">
            <div className="board-header-right-text">&nbsp;Github import</div>
        </button>
        <Modal 
            isOpen={this.state.showModal}
            contentLabel="Minimal Modal Example"
            >
            <button onClick={this.handleCloseModal}>Close Modal</button>
        </Modal>
    </div>
  );
}


export default withRouter(connect()(ImportModal));