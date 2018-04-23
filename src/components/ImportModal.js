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
            overlayClassName="modal-underlay"
            includeDefaultStyles={false}
            className="modal"
            >
            <button className="board-deleter-button" onClick={this.handleCloseModal}>Close Modal</button>
            <div
                style={{
                margin: "10%",
                minHeight: "300px",
                width: "300px",
                boxShadow: "0px 0px 3px 2px rgb(0, 180, 255)",
                background: "white"
            }}
            >
                <form>
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" />
                </form>
            </div>
        </Modal>
    </div>
  );
}


export default withRouter(connect()(ImportModal));