import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Button, Wrapper, Menu, MenuItem } from "react-aria-menubutton";

class ImportModal extends React.Component {
    static propTypes = {
        match: PropTypes.shape({
          params: PropTypes.shape({ boardId: PropTypes.string })
        }).isRequired,
        isOpen: PropTypes.bool.isRequired,
      };

      handleCloseModal () {
        this.setState({ showModal: false });
      }
    
    // handleSelection = () => {
    //     const { dispatch, match, history } = this.props;
    //     const { boardId } = match.params;
    //     dispatch({ type: "DELETE_BOARD", payload: { boardId } });
    //     history.push("/");
    //   };
    
    render  = () => (
        <div>
        <button onClick={this.handleOpenModal}>Trigger Modal</button>
        <ReactModal
            closeTimeoutMS={150} 
            contentLabel="Minimal Modal Example"
        >
          <button onClick={this.handleCloseModal}>Close Modal</button>
        </ReactModal>
      </div>
    );
  }
  

  export default withRouter(connect()(ImportModal));

