import React from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Card extends React.Component {
    constructor() {
        super();
        this.state = {
          isModalOpen: false
        };
      }

      toggleCardEditor = () => {
        this.setState({ isModalOpen: !this.state.isModalOpen });
      };
    
      handleClick = event => {
        const { tagName, checked, id } = event.target;
        if (tagName.toLowerCase() === "input") {
          // The id is a string that describes which number in the order of checkboxes this particular checkbox has
          this.toggleCheckbox(checked, parseInt(id, 10));
        } else if (tagName.toLowerCase() !== "a") {
          this.toggleCardEditor(event);
        }
      };
    
      handleKeyDown = event => {
        // Only open card on enter since spacebar is used by react-beautiful-dnd for keyboard dragging
        if (event.keyCode === 13 && event.target.tagName.toLowerCase() !== "a") {
          event.preventDefault();
          this.toggleCardEditor();
        }
      };
    
      // identify the clicked checkbox by its index and give it a new checked attribute
      toggleCheckbox = (checked, i) => {
        const { card, dispatch } = this.props;
    
        let j = 0;
        const newText = card.text.replace(/\[(\s|x)\]/g, match => {
          let newString;
          if (i === j) {
            newString = checked ? "[x]" : "[ ]";
          } else {
            newString = match;
          }
          j += 1;
          return newString;
        });
    
        dispatch({
          type: "CHANGE_CARD_TEXT",
          payload: { cardId: card._id, cardText: newText }
        });
      };
}

Card.propTypes = {
    card: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        color: PropTypes.string
      }).isRequired,
      listId: PropTypes.string.isRequired,
      isDraggingOver: PropTypes.bool.isRequired,
      index: PropTypes.number.isRequired,
      dispatch: PropTypes.func.isRequired
};

export default connect(mapStateToProps)(Card);